import { useParams } from "react-router-dom";
import { CardList } from "../../components";
import {
  useLazyGetCategoryQuery,
  useLazyGetPostsQuery,
} from "../../state/baseApi";
import { useState, useEffect } from "react";

export function Categories() {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);
  const [getCategory] = useLazyGetCategoryQuery();
  const [getPosts] = useLazyGetPostsQuery();

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
    getCategory(categoryId)
      .unwrap()
      .then((result) => {
        setData(result.data.attributes.posts.data);
      });
  }, [categoryId]);

  return <CardList data={data} pt={10} pb={20} />;
}
