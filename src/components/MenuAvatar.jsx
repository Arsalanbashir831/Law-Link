import React from 'react';
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Text,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const MenuAvatar = ({ username = 'Muhammad', avatarUrl }) => {
  const router = useRouter();

  return (
    <Menu>
      <MenuButton
        as={Avatar}
        size="md"
        name={username}
        src={avatarUrl}
        cursor="pointer"
        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
      />
      <MenuList
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        boxShadow="lg"
        py={2}
        rounded="lg"
      >
        <Box px={4} py={2} textAlign="center">
          <Text fontWeight="bold" fontSize="md" color={useColorModeValue('gray.700', 'gray.200')}>
            {username}
          </Text>
        </Box>
        <MenuDivider />
        <MenuItem
          onClick={() => router.push('/profile')}
          _hover={{ bg: useColorModeValue('red.50', 'gray.700'), color: 'red.600' }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => router.push('/settings')}
          _hover={{ bg: useColorModeValue('red.50', 'gray.700'), color: 'red.600' }}
        >
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => router.push('/logout')}
          _hover={{ bg: useColorModeValue('red.50', 'gray.700'), color: 'red.600' }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuAvatar;
