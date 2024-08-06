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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavData = [
    { id: 1, label: 'Home', value: 'Home' },
    { id: 2, label: 'Hire Lawyer', value: 'Hire' },
    { id: 3, label: 'FAQs', value: 'FAQs' },
    { id: 4, label: 'Contact Us', value: 'ContactUs' },
  ];

  return (
    <Box bg="transparent" px={4} color="red.600" boxShadow={'xl'}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box fontWeight="bold" fontSize="xl" mr={8}>
            LawLink.pk
          </Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NavData.map((navItem) => (
              <Button
                key={navItem.id}
                variant="ghost"
                colorScheme="gray"
                _hover={{ bg: 'gray.300' }}
              >
                {navItem.label}
              </Button>
            ))}
          </HStack>
        </Flex>
        <HStack display={{ base: 'none', md: 'flex' }} spacing={4}>
          <Button
            leftIcon={<FaSignInAlt />}
            variant="outline"
            colorScheme="red"
            _hover={{ bg: 'red.600' ,color:'white'}}
          >
            Login
          </Button>
          <Button
            leftIcon={<FaUserPlus />}
            colorScheme="red"
            variant="solid"
            _hover={{ bg: 'red.600' }}
          >
            Sign Up
          </Button>
        </HStack>
        <IconButton
       pl={3}
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
          colorScheme="red"
         
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }} boxShadow={'lg'}>
          <Stack as="nav" spacing={4}>
            {NavData.map((navItem) => (
              <Button
                key={navItem.id}
                variant="ghost"
                colorScheme="red"
                _hover={{ bg: 'gray.300' }}
                width="full"
              >
                {navItem.label}
              </Button>
            ))}
            <Button
              leftIcon={<FaSignInAlt />}
              variant="outline"
              colorScheme="red"
              _hover={{ bg: 'gray.300' }}
              width="full"
            >
              Login
            </Button>
            <Button
              leftIcon={<FaUserPlus />}
              colorScheme="red"
              variant="solid"
              _hover={{ bg: 'gray.300' }}
              width="full"
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
