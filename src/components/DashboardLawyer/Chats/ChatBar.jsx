'use client'
import React from 'react';
import { Box, HStack, Text, Avatar, Icon, VStack } from '@chakra-ui/react';
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

const TopbarChat = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <Box
      width="100%"
      bg="gray.50"
      p={3}
      boxShadow="lg"
      borderBottom="2px solid"
      borderColor="gray.200"
      overflowX="auto"
      sx={{
        '::-webkit-scrollbar': {
          height: '4px',
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
      <Text fontSize="xl" fontWeight="bold" mb={4} color="red.600" textAlign="center">
        Chat Users
      </Text>
      <HStack spacing={4} align="center">
        {users.map((user) => (
          <Box
            key={user.id}
            p={selectedUser?.id === user.id ? 3 : 2}
            bg={selectedUser?.id === user.id ? 'red.50' : 'white'}
            borderRadius="full"
            boxShadow={selectedUser?.id === user.id ? 'lg' : 'md'}
            _hover={{ bg: 'gray.100', cursor: 'pointer', transform: selectedUser?.id !== user.id ? 'scale(1.05)' : undefined }}
            alignItems="center"
            onClick={() => handleUserSelect(user)}
            transition="all 0.2s ease-in-out"
            minW={selectedUser?.id === user.id ? '150px' : '60px'}
            maxW={selectedUser?.id === user.id ? '150px' : '60px'}
          >
            <HStack spacing={2}>
              <Avatar src={user.avatarUrl} name={user.name} size={selectedUser?.id === user.id ? 'md' : 'sm'} />
              {selectedUser?.id === user.id && (
                <>
                  <Text align={'center'} fontSize="sm" fontWeight="bold" color="red.600">
                    {user.name}
                  </Text>
                  <Icon as={FaCheckCircle} color="red.600" boxSize={4} />
                </>
              )}
            </HStack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default TopbarChat;
