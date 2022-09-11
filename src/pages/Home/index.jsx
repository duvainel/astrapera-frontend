import { CardList } from "../../components";
import { useGetPostsQuery } from "../../state/baseApi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetQuery } from "../../state/slices/search";

export function Home() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);

  useEffect(() => {
    dispatch(resetQuery());
  }, []);

  const { data: posts } = useGetPostsQuery({ search });

  return <CardList data={posts?.data} />;
}
