"use client";
import React, { useContext, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Button,
  Collapse,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import MenuAvatar from "./MenuAvatar";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/services/AuthProvider";

const NavbarGlobal = ({
  navData,
  username,
  avatarUrl,
  isLanding,
}) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const hoverBgColor = useColorModeValue("red.100", "gray.600");
  const hoverTextColor = "red.600";
  const buttonColorScheme = useColorModeValue("brown", "teal");
  const router = useRouter();

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleButtonClick = (link) => {
    if (isLanding) {
      handleScroll(link);
    } else {
      router.push(link);
    }
  };

  const handleAuthNavigation = (path) => {
    router.push(path);
  };

  return (
    <Box bg={bgColor} px={4} boxShadow="md" zIndex={10} position="sticky" top={0}>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto" w={"100%"}>
        <HStack
          spacing={4}
          cursor="pointer"
          onClick={() => handleScroll("hero-section")}
          transition="all 0.3s"
          _hover={{ color: hoverTextColor, transform: "scale(1.05)" }}
        >
          <GoLaw size="40px" color={hoverTextColor} />
          <Text fontWeight="bold" fontSize="2xl" color="red.600">
            LawLink.pk
          </Text>
        </HStack>

        <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
          {navData.map((navItem) => (
            <ChakraLink
              key={navItem.id}
              onClick={() => handleButtonClick(navItem.value)}
              fontSize="md"
              fontWeight="semibold"
              color={textColor}
              px={3}
              py={2}
              rounded="md"
              transition="all 0.3s"
              _hover={{
                textDecoration: "none",
                bg: hoverBgColor,
                color: hoverTextColor,
                boxShadow: "lg",
              }}
            >
              {navItem.label}
            </ChakraLink>
          ))}
        </HStack>

        <HStack display={{ base: 'none', md: 'flex' }} spacing={6}>
          {user ? (
            <MenuAvatar username={username} avatarUrl={avatarUrl} />
          ) : (
            <>
              <Button
                leftIcon={<FaSignInAlt />}
                variant="outline"
                colorScheme="red.600"
                _hover={{ bg: 'red', color: 'white' }}
                onClick={() => handleAuthNavigation('/auth')}
              >
                Login
              </Button>
              <Button
                leftIcon={<FaUserPlus />}
                bg="red.600"
                color={'white'}
                variant="solid"
                _hover={{ bg: 'red', color: 'white' }}
                onClick={() => handleAuthNavigation('/auth')}
              >
                Sign Up
              </Button>
            </>
          )}
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={toggleMenu}
          colorScheme="red"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: "none" }} boxShadow="md">
          <Stack as="nav" spacing={4}>
            {navData.map((navItem) => (
              <Button
                key={navItem.id}
                variant="ghost"
                colorScheme="red"
                onClick={() => handleButtonClick(navItem.value)}
                _hover={{ bg: "gray.300", color: hoverTextColor }}
                width="full"
              >
                {navItem.label}
              </Button>
            ))}
            {user ? (
              <Center>
                <MenuAvatar username={username} avatarUrl={avatarUrl} />
              </Center>
            ) : (
              <>
                <Button
                  leftIcon={<FaSignInAlt />}
                  variant="outline"
                  colorScheme="brown"
                  _hover={{ bg: "gray.300" }}
                  width="full"
                  onClick={() => handleButtonClick("/auth")}
                >
                  Login
                </Button>
                <Button
                  leftIcon={<FaUserPlus />}
                  colorScheme="brown"
                  variant="solid"
                  _hover={{ bg: "gray.300" }}
                  width="full"
                  onClick={() => handleButtonClick("/auth")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavbarGlobal;
