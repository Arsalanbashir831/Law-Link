'use client'
import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, Avatar, Icon, VStack } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { selectedUserState } from '@/atoms/SelectedUserState';
import { FaCheckCircle } from 'react-icons/fa';
import { BASE_URL } from '@/Constants';



// const users = [
//   { id: 1, name: 'John Doe', avatarUrl: 'https://bit.ly/dan-abramov' },
//   { id: 2, name: 'Jane Smith', avatarUrl: 'https://bit.ly/code-beast' },
//   { id: 3, name: 'Alice Johnson', avatarUrl: 'https://bit.ly/prosper-baba' },
//   { id: 4, name: 'Robert Brown', avatarUrl: 'https://bit.ly/ryan-florence' },
//   { id: 5, name: 'Emily White', avatarUrl: 'https://bit.ly/sage-adebayo' },
//   { id: 6, name: 'Michael Green', avatarUrl: 'https://bit.ly/kent-c-dodds' },
// ];

const TopbarChat = () => {
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserState);
const [users, setUsers] = useState([])
  useEffect(()=>{
    const fetchChatUsers = async()=>{
      const token = localStorage.getItem('token')
      try {
        const response = await fetch(`${BASE_URL}api/v1/chats/getChats`,{
          headers:{
            "Content-Type":'application/json',
            Authorization:`Bearer ${token}`
          }
        })
        const data = await response.json()
        if (response.status===200) {
          setUsers(data.users)
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchChatUsers()
  },[])
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
        {users?.map((user) => (
          <Box
            key={user._id}
            p={selectedUser?._id === user._id ? 3 : 2}
            bg={selectedUser?._id === user._id ? 'red.50' : 'white'}
            borderRadius="full"
            boxShadow={selectedUser?._id === user._id ? 'lg' : 'md'}
            _hover={{ bg: 'gray.100', cursor: 'pointer', transform: selectedUser?._id !== user._id ? 'scale(1.05)' : undefined }}
            alignItems="center"
            onClick={() => handleUserSelect(user)}
            transition="all 0.2s ease-in-out"
            minW={selectedUser?._id === user._id ? '150px' : '60px'}
            maxW={selectedUser?._id === user._id ? '150px' : '60px'}
          >
            <HStack spacing={2}>
              <Avatar src={user.profilePic} name={user.username} size={selectedUser?._id === user._id ? 'md' : 'sm'} />
              {selectedUser?._id === user._id && (
                <>
                  <Text align={'center'} fontSize="sm" fontWeight="bold" color="red.600">
                    {user.username}
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
