import { CardList } from "../../components";
import { useGetPostsQuery } from "../../state/baseApi";
import { useSelector } from "react-redux";

export function Home() {
  const search = useSelector((state) => state.search.query);

  const { data: posts } = useGetPostsQuery({ search });

  return <CardList data={posts?.data} />;
}
