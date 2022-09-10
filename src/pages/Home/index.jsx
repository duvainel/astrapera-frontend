import { CardList } from "../../components";
import { useGetPostsQuery } from "../../state/baseApi";

export function Home() {
  const { data: posts } = useGetPostsQuery();

  return <CardList data={posts?.data} />;
}
