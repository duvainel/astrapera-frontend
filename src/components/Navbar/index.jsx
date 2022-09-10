import logo from "../../assets/logo.webp";
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { LinkWithRouter, Container } from "../../components";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { useGetCategoriesQuery } from "../../state/baseApi";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  {
    label: "Ana Sayfa",
    href: "/",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
];

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { data: categories } = useGetCategoriesQuery();
  const [navItems, setNavItems] = useState(NAV_ITEMS);

  useEffect(() => {
    if (!categories) return;

    const generatedCategories = categories?.data.map((category) => {
      return {
        label: category.attributes.name,
        href: `/kategoriler/${category.id}`,
      };
    });

    setNavItems((prev) => {
      return [
        ...prev,
        {
          label: "Kategoriler",
          children: [
            {
              label: "Tüm Yazılar",
              href: "/kategoriler/0",
            },
            ...generatedCategories,
          ],
        },
      ];
    });

    return () => {
      setNavItems(NAV_ITEMS);
    };
  }, [categories]);

  return (
    <Box
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Container>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          justify={"space-between"}
          direction={{ base: "row-reverse", md: "row" }}
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ md: 1 }}
            justify={{ base: "center", md: "space-between" }}
            align={"center"}
          >
            <LinkWithRouter href={"/"}>
              <Image
                width="90px"
                objectFit="cover"
                src={logo}
                alt="Dan Abramov"
              />
            </LinkWithRouter>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav items={navItems} />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav items={navItems} />
        </Collapse>
      </Container>
    </Box>
  );
}
