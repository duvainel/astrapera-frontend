import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../state/baseApi";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import ReactMarkdown from "react-markdown";

export function BlogDetail() {
  const { id } = useParams();
  const { data: post } = useGetPostQuery(id);

  if (!post) return <div>Loading...</div>;

  return (
    <Prose>
      <ReactMarkdown>{post.data.attributes.description}</ReactMarkdown>
    </Prose>
  );
}
