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
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const LawyerNav = ({ username, avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter()

  const NavData = [
    { id: 1, label: 'Chats', value: 'Chats' },
    { id: 2, label: 'Orders', value: 'Orders' },
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
              <Button onClick={()=>router.push(navItem.value)}
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
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar size="sm" name='Arsalan' />
            </MenuButton>
            <MenuList>
              <Box px={4} py={2} textAlign="center">
                <strong>Arsalan Bashir</strong>
              </Box>
              <MenuDivider />
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
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
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
                width="full"
                textAlign="left"
              >
                <Avatar size="sm" name='Arsalan' mr={2} />
                Arsalan
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default LawyerNav;
