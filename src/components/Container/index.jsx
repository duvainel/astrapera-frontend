import { Box } from "@chakra-ui/react";

export function Container(props) {
  return (
    <Box maxW={1280} mx="auto" px={{ base: 5, md: 10 }} {...props}>
      {props.children}
    </Box>
  );
}
