import { useParams } from "react-router-dom";

export function BlogDetail() {
  const { id } = useParams();
  return <div>Blog ID: {id}</div>;
}
