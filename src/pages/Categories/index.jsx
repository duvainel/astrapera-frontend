import { useParams } from "react-router-dom";
import { CardList } from "../../components";
import {
  useGetCategoriesQuery,
  useLazyGetPostsQuery,
} from "../../state/baseApi";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuery } from "../../state/slices/search";

export function Categories() {
  const { categoryId } = useParams(); // URL'den kategori id'sini çektiğimiz yer
  const [data, setData] = useState([]);
  const { data: categories } = useGetCategoriesQuery();
  const [getPosts] = useLazyGetPostsQuery();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);

  const getCategorySlug = useCallback(() => {
    if (!categoryId) return;
    return categories?.data?.filter((category) => category.id == categoryId)[0]
      .attributes.slug;
  }, [categoryId]);

  useEffect(() => {
    dispatch(resetQuery());
  }, [categoryId]);

  useEffect(() => {
    if (!categoryId) return;
    if (categoryId == 0) {
      getPosts({ search })
        .unwrap()
        .then((result) => {
          setData(result.data);
        });
      return;
    }
    getPosts({ category: getCategorySlug(), search })
      .unwrap()
      .then((result) => {
        setData(result.data);
      });
  }, [categoryId, search]);

  return <CardList data={data} />;
}
