'use client'
import React, { useEffect, useState } from 'react';
import { Box, VStack, Text, Avatar, HStack, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { BASE_URL } from '@/Constants';


const ChatSidebar = ({selectedLawyer , setSelectedLawyer}) => {
 
  const [chatUsers, setChatUsers] = useState([]);

  const handleUserSelect = (user) => {
    setSelectedLawyer({
      user:{
        _id:user._id, 
        profilePic:user.profilePic,
        email:user.email,
        username:user.username
      }
    });
  };

  useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await fetch(`${BASE_URL}api/v1/chats/getChats`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json", 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch chat users");
        }

        const data = await response.json();
        console.log("Fetched chat users:", data);
        setChatUsers(data.users); // Assuming the response has a `users` array
      } catch (error) {
        console.error("Error fetching chat users:", error);
      }
    };

    fetchChatUsers();
  }, []);

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
        {chatUsers.map((user) => (
          <HStack
            key={user?._id}
            p={3}
            bg={selectedLawyer?.user?._id === user._id ? 'red.50' : 'white'}
            borderRadius="lg"
            boxShadow={selectedLawyer?.user?._id === user._id ? 'lg' : 'md'}
            _hover={{ bg: 'gray.100', cursor: 'pointer', transform: 'scale(1.02)' }}
            alignItems="center"
            onClick={() => handleUserSelect(user)}
            transition="all 0.2s ease-in-out"
          >
            <Avatar src={user.profilePic} name={user.username} size="md" />
            <VStack align="start" spacing={0} flex="1">
              <Text fontWeight="bold" color={selectedLawyer?.user?._id === user._id ? 'red.600' : 'gray.800'}>
                {user.username}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {selectedLawyer?.user?._id === user._id ? 'Active now' : 'Last seen recently'}
              </Text>
            </VStack>
            {selectedLawyer?.user?._id === user._id && (
              <Icon as={FaCheckCircle} color="red.600" boxSize={5} />
            )}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ChatSidebar;
