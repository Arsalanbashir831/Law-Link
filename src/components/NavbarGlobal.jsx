'use client';
import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';
import MenuAvatar from './MenuAvatar';
import { useRouter } from 'next/navigation';

const NavbarGlobal = ({ navData, showAuthButtons = false, username, avatarUrl , isLanding}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBgColor = useColorModeValue('red.100', 'gray.600');
  const hoverTextColor = 'red.600';
  const mobileBgColor = useColorModeValue('red.100', 'gray.600');
  const mobileTextColor = 'red.600';
const router = useRouter()
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after scrolling (for mobile)
  };
  const handleButtonClick =(link)=>{
if(isLanding){
  handleScroll(link)
}else{
router.push(link)
}
  }

  return (
    <Box
      bg={bgColor}
      px={4}
      boxShadow="md"
      zIndex={10}
      position="sticky"
      top={0}
      // w="100%"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
      
        mx="auto"
      >
        <Flex alignItems="center">
          <HStack
            spacing={2}
            cursor="pointer"
            onClick={() => handleScroll('hero-section')}
            transition="all 0.2s"
            _hover={{ color: hoverTextColor, transform: 'scale(1.05)' }}
          >
            <GoLaw size="32px" color="red.600" />
            <Text fontWeight="bold" fontSize="2xl" color="red.600">
              LawLink.pk
            </Text>
          </HStack>
          <HStack as="nav" spacing={6} ml={10} display={{ base: 'none', md: 'flex' }}>
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
                  textDecoration: 'none',
                  bg: hoverBgColor,
                  color: hoverTextColor,
                  boxShadow: 'lg',
                }}
              >
                {navItem.label}
              </ChakraLink>
            ))}
          </HStack>
        </Flex>
        <HStack display={{ base: 'none', md: 'flex' }} spacing={6}>
          {showAuthButtons ? (
            <>
              <Button
                leftIcon={<FaSignInAlt />}
                variant="outline"
                colorScheme="red"
                _hover={{ bg: 'red.600', color: 'white' }}
                onClick={() => handleScroll('hero-section')}
              >
                Login
              </Button>
              <Button
                leftIcon={<FaUserPlus />}
                colorScheme="red"
                variant="solid"
                _hover={{ bg: 'red.600' }}
                onClick={() => handleScroll('hero-section')}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <MenuAvatar username={username} avatarUrl={avatarUrl} />
          )}
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
          colorScheme="red"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }} boxShadow="md">
          <Stack as="nav" spacing={4}>
            {navData.map((navItem) => (
              <Button
                key={navItem.id}
                variant="ghost"
                colorScheme="red"
                onClick={() => handleScroll(navItem.value)}
                _hover={{ bg: mobileBgColor, color: mobileTextColor }}
                width="full"
              >
                {navItem.label}
              </Button>
            ))}
            {showAuthButtons ? (
              <>
                <Button
                  leftIcon={<FaSignInAlt />}
                  variant="outline"
                  colorScheme="red"
                  _hover={{ bg: 'gray.300' }}
                  width="full"
                  onClick={() => handleScroll('hero-section')}
                >
                  Login
                </Button>
                <Button
                  leftIcon={<FaUserPlus />}
                  colorScheme="red"
                  variant="solid"
                  _hover={{ bg: 'gray.300' }}
                  width="full"
                  onClick={() => handleScroll('hero-section')}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Center>
                <MenuAvatar username={username} avatarUrl={avatarUrl} />
              </Center>
            )}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavbarGlobal;
