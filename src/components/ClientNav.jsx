'use client';
import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Collapse,
  Text,
  Button,
  Link as ChakraLink,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';
import { useRouter } from 'next/navigation';
import MenuAvatar from './MenuAvatar'; 

const ClientNav = ({ username = 'Arsalan Bashir', avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const router = useRouter();

  const NavData = [
    { id: 1, label: 'Find Lawyer', value: 'FindLawyer' },
    { id: 2, label: 'Legal GPT', value: 'LegalGpt' },
    { id: 3, label: 'Chats', value: 'Chats' },
    { id: 4, label: 'Orders', value: 'Orders' },
  ];
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBgColor = useColorModeValue('red.100', 'gray.600');
  const hoverTextColor = 'red.600';
  const mobileBgColor = useColorModeValue('red.100', 'gray.600');
  const mobileTextColor = 'red.600';

  return (
    <Box
      bg={bgColor}
      px={4}
      boxShadow="md"
      zIndex={10}
      position="sticky"
      top={0}
      w="100%"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        <Flex alignItems="center">
          <HStack
            spacing={2}
            cursor="pointer"
            onClick={() => router.push('/')}
            transition="all 0.2s"
            _hover={{ color: hoverTextColor, transform: 'scale(1.05)' }}
          >
            <GoLaw size="32px" color="red.600" />
            <Text
              fontWeight="bold"
              fontSize="2xl"
              color="red.600"
            >
              LawLink.pk
            </Text>
          </HStack>
          <HStack
            as="nav"
            spacing={6}
            ml={10}
            display={{ base: 'none', md: 'flex' }}
          >
            {NavData.map((navItem) => (
              <ChakraLink
                key={navItem.id}
                onClick={() => router.push(navItem.value)}
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
          <MenuAvatar username={username} avatarUrl={avatarUrl} />
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
            {NavData.map((navItem) => (
              <Button
                key={navItem.id}
                variant="ghost"
                colorScheme="red"
                onClick={() => {
                  router.push(navItem.value);
                  setIsOpen(false);
                }}
                _hover={{ bg: mobileBgColor, color: mobileTextColor }}
                width="full"
              >
                {navItem.label}
              </Button>
            ))}
            <Center>
              <MenuAvatar username={username} avatarUrl={avatarUrl} />
            </Center>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ClientNav;
