import { Flex, Box, Image, chakra, Link, Badge } from "@chakra-ui/react";
import { LinkWithRouter } from "../../components";
import dayjs from "dayjs";

export function Card(props) {
  return (
    <Box
      rounded="lg"
      shadow="md"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      maxW="2xl"
      h="full"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Flex direction={"column"} p={6} h="calc(100% - 16rem)">
        <Box>
          {props.post.attributes.categories?.data?.map((category) => {
            return (
              <Badge bg={"brand.400"} color={"white"} mr={1} key={category.id}>
                {category.attributes.name}
              </Badge>
            );
          })}
          <LinkWithRouter
            href={"/" + props.post.id}
            display="block"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{
              color: "gray.600",
              textDecor: "underline",
            }}
          >
            {props.post.attributes.title}
          </LinkWithRouter>
          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.post.attributes.summary}
          </chakra.p>
        </Box>

        <Box mt={"auto"} pt={4}>
          <Flex alignItems="center">
            <Link
              fontWeight="bold"
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              John Doe
            </Link>
            <chakra.span
              mx={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              {dayjs(props.post.attributes.publishedAt).format(
                "DD - MM - YYYY"
              )}
            </chakra.span>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
