import { useParams } from "react-router-dom";
import { CardList } from "../../components";
import {
  useGetCategoriesQuery,
  useLazyGetPostsQuery,
} from "../../state/baseApi";
import { useState, useEffect, useCallback } from "react";

export function Categories() {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);
  const { data: categories } = useGetCategoriesQuery();
  const [getPosts] = useLazyGetPostsQuery();

  const getCategorySlug = useCallback(() => {
    if (!categoryId) return;
    return categories?.data?.filter((category) => category.id == categoryId)[0]
      .attributes.slug;
  }, [categoryId]);

  useEffect(() => {
    if (!categoryId) return;
    if (categoryId == 0) {
      getPosts()
        .unwrap()
        .then((result) => {
          setData(result.data);
        });
      return;
    }
    getPosts({ category: getCategorySlug() })
      .unwrap()
      .then((result) => {
        setData(result.data);
      });
  }, [categoryId]);

  return <CardList data={data} />;
}
