import { useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../state/baseApi";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import ReactMarkdown from "react-markdown";
import { Text, Flex, Heading, Image, chakra } from "@chakra-ui/react";

export function BlogDetail() {
  const { id } = useParams();
  const { data: posts } = useGetPostsQuery({ id });

  if (!posts) return <div>Loading...</div>;

  return (
    <>
      <Flex justify="center">
        <Image
          mb={4}
          w="100%"
          maxW={850}
          src={posts.data[0].attributes.cover.data.attributes.url}
        />
      </Flex>
      <Prose>
        <Heading color={useColorModeValue("brand.500", "white")} as={"h1"}>
          {posts.data[0].attributes.title}
        </Heading>
        <ReactMarkdown>{posts.data[0].attributes.description}</ReactMarkdown>
      </Prose>
      <Text mt={6} textAlign={"right"}>
        Yazar:{" "}
        <chakra.span fontWeight="bold" color="gray.700">
          {posts.data[0].attributes.author.data.attributes.name}
        </chakra.span>
      </Text>
    </>
  );
}
