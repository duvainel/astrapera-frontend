import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { Image, Flex, Spacer, Box, List, ListItem } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as={"nav"} minWidth="max-content" alignItems="center" gap="2">
      <Box>
        <Link to={"/"}>
          <Image width="100px" objectFit="cover" src={logo} alt="Dan Abramov" />
        </Link>
      </Box>
      <Spacer />
      <Box color="brand.300">
        <List display="flex" gap={3}>
          <ListItem>
            <Link to={"/"}>Ana Sayfa</Link>
          </ListItem>
          <ListItem>
            <Link to={"/AboutUs"}>Hakkımızda</Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
