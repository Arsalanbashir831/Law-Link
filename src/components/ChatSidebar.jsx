'use client'
import React from 'react';
import { Box, VStack, Text, Avatar, HStack } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { selectedUserState } from '@/atoms/SelectedUserState';

const users = [
  { id: 1, name: 'John Doe', avatarUrl: 'https://bit.ly/broken-link' },
  { id: 2, name: 'Jane Smith', avatarUrl: 'https://bit.ly/broken-link' },
  { id: 3, name: 'Alice Johnson', avatarUrl: 'https://bit.ly/broken-link' },
  // Add more users as needed
];

const ChatSidebar = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Box
      width="250px"
      bg="gray.50"
      p={4}
      boxShadow="md"
      borderRight="1px solid"
      borderColor="gray.200"
      height="100vh"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color="red.600">
        Chat Users
      </Text>
      <VStack spacing={4} align="stretch">
        {users.map((user) => (
          <HStack
            key={user.id}
            p={3}
            bg={selectedUser?.id === user.id ? 'gray.200' : 'white'}
            borderRadius="md"
            boxShadow="sm"
            _hover={{ bg: 'gray.100', cursor: 'pointer' }}
            alignItems="center"
            onClick={() => handleUserSelect(user)}
          >
            <Avatar src={user.avatarUrl} name={user.name} size="sm" />
            <Text fontWeight="medium">{user.name}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ChatSidebar;
