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
import { useMemo, useCallback, useEffect } from "react";

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { data: categories } = useGetCategoriesQuery();

  const NAV_ITEMS = useMemo(() => {
    return [
      {
        label: "Ana Sayfa",
        href: "/",
      },
      {
        label: "Hakkımızda",
        href: "/hakkimizda",
      },
      {
        label: "Kategoriler",
        children: [
          {
            label: "Tüm Yazılar",
            href: "/kategoriler/0",
          },
        ],
      },
    ];
  }, [categories]);

  const generateCategories = useCallback(() => {
    const navCategories = NAV_ITEMS.filter(
      (item) => item.label === "Kategoriler"
    );

    const generatedCategories = categories?.data.map((category) => {
      navCategories[0].children.push({
        label: category.attributes.name,
        href: `/kategoriler/${category.id}`,
      });
    });

    navCategories.children = generatedCategories;
  }, [categories]);

  generateCategories();

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
              <DesktopNav items={NAV_ITEMS} />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav items={NAV_ITEMS} />
        </Collapse>
      </Container>
    </Box>
  );
}
