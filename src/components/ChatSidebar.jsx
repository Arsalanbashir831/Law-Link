'use client'
import React from 'react';
import { Box, VStack, Text, Avatar, HStack, Icon } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { selectedUserState } from '@/atoms/SelectedUserState';
import { FaCheckCircle } from 'react-icons/fa';

const users = [
  { id: 1, name: 'John Doe', avatarUrl: 'https://bit.ly/dan-abramov' },
  { id: 2, name: 'Jane Smith', avatarUrl: 'https://bit.ly/code-beast' },
  { id: 3, name: 'Alice Johnson', avatarUrl: 'https://bit.ly/prosper-baba' },
  { id: 4, name: 'Robert Brown', avatarUrl: 'https://bit.ly/ryan-florence' },
  { id: 5, name: 'Emily White', avatarUrl: 'https://bit.ly/sage-adebayo' },
  { id: 6, name: 'Michael Green', avatarUrl: 'https://bit.ly/kent-c-dodds' },
];

const ChatSidebar = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Box
      width="300px"
      bg="gray.50"
      p={4}
      boxShadow="lg"
      borderRight="2px solid"
      borderColor="gray.200"
      height="calc(100vh - 64px)"
      overflowY="auto" 
      sx={{
        '::-webkit-scrollbar': {
          width: '4px',
        },
        '::-webkit-scrollbar-track': {
          background: '#f1f1f1',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'red.600',
          borderRadius: '8px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      }}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="red.600" textAlign="center">
        Chat Users
      </Text>
      <VStack spacing={4} align="stretch">
        {users.map((user) => (
          <HStack
            key={user.id}
            p={3}
            bg={selectedUser?.id === user.id ? 'red.50' : 'white'}
            borderRadius="lg"
            boxShadow={selectedUser?.id === user.id ? 'lg' : 'md'}
            _hover={{ bg: 'gray.100', cursor: 'pointer', transform: 'scale(1.02)' }}
            alignItems="center"
            onClick={() => handleUserSelect(user)}
            transition="all 0.2s ease-in-out"
          >
            <Avatar src={user.avatarUrl} name={user.name} size="md" />
            <VStack align="start" spacing={0} flex="1">
              <Text fontWeight="bold" color={selectedUser?.id === user.id ? 'red.600' : 'gray.800'}>
                {user.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {selectedUser?.id === user.id ? 'Active now' : 'Last seen recently'}
              </Text>
            </VStack>
            {selectedUser?.id === user.id && (
              <Icon as={FaCheckCircle} color="red.600" boxSize={5} />
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ChatSidebar;
