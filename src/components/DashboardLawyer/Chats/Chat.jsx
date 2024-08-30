'use client'
import React, { useContext, useState,useEffect } from 'react';
import { Box, VStack, HStack, Text, Input, IconButton, Flex, Avatar, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FaPaperPlane, FaPlus } from 'react-icons/fa';

import CreateOrderModal from '@/components/CreateOrderModal';
import TopbarChat from './ChatBar';
import { io } from "socket.io-client";
import { AuthContext } from '@/services/AuthProvider';
import { BASE_URL } from '@/Constants';
import { selectedUserState } from '@/atoms/SelectedUserState';
import { useRecoilValue } from 'recoil';


export const ChatBoxContent = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatId, setChatId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectedUser = useRecoilValue(selectedUserState);

// console.log("Selected User",selectedUser);


  useEffect(() => {
    if (user && selectedUser) {
      const socket = io(BASE_URL);

      // Join the chat
      socket.emit("join_chat", {
        senderId: user.userId,
        receiverId: selectedUser?._id,
      });

      // Listen for chat ID
      socket.on("chat_id", (chatId) => {
        console.log("Received chat_id:", chatId);
        setChatId(chatId);
      });

      // Listen for chat history
      socket.on("chat_history", (chatHistory) => {
        const formattedMessages = chatHistory.map((message) => ({
          userId: message.senderDetails._id,
          sender: message.senderDetails.username,
          text: message.content,
          avatar: message.senderDetails.profilePic,
        }));
        setMessages(formattedMessages);
      });

      // Listen for new messages
      socket.on("receive_message", (message) => {
        const newMessage = {
          userId: message.senderDetails._id,
          sender: message.senderDetails.username,
          text: message.content,
          avatar: message.senderDetails.profilePic,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      // Cleanup on unmount
      return () => {
        socket.disconnect();
      };
    }
  }, [user, selectedUser]);



  const handleSendMessage = () => {
    if (input.trim() === '') return;

   
    const socket = io(BASE_URL);
    socket.emit("send_message", {
      chatId,
      senderId: user.userId,
      content: input,
    });
    setInput('');
   
  };

  const scrollbarTrackColor = useColorModeValue('gray.200', 'gray.600');
  const scrollbarThumbColor = useColorModeValue('red.500', 'red.300');
  const messageBgColorYou = 'red.500';
  const messageTextColorYou = 'white';
  const messageBgColorOther = useColorModeValue('gray.200', 'gray.600');
  const messageTextColorOther = useColorModeValue('black', 'white');
  const chatBoxBgColor = useColorModeValue('gray.100', 'gray.800');
  const messageContainerBgColor = useColorModeValue('white', 'gray.700');
  const inputBgColor = useColorModeValue('white', 'gray.700');

  return (
    <Flex
      direction="column"
      bg={chatBoxBgColor}
      borderRadius="md"
      boxShadow="lg"
      height="90vh"
      width="100%"
      maxW="1600px"
      mx="auto"
    >
      <TopbarChat />

      <VStack
        flex={1}
        spacing={4}
        overflowY="auto"
        width="full"
        p={4}
        bg={messageContainerBgColor}
        borderRadius="md"
        boxShadow="md"
        sx={{
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: scrollbarTrackColor,
          },
          '::-webkit-scrollbar-thumb': {
            background: scrollbarThumbColor,
            borderRadius: '8px',
          },
        }}
      >
        {messages.map((message, index) => (
          <HStack
            key={index}
            alignSelf={message.userId != selectedUser._id ? "flex-end" : "flex-start"}
            bg={message.userId != selectedUser._id ? messageBgColorYou : messageBgColorOther}
            color={message.userId != selectedUser._id ? messageTextColorYou : messageTextColorOther}
            borderRadius="lg"
            p={4}
            maxWidth="75%"
            spacing={4}
            boxShadow="sm"
          >
            {message.userId === selectedUser._id && (
              <Avatar size="sm" src={message.profilePic} name={message.sender} />
            )}
            <Text fontSize="md">{message.text}</Text>
            {message.userId != selectedUser._id && (
              <Avatar size="sm" src={user.profilePic} name={user.username} />
            )}
          </HStack>
        ))}
      </VStack>

      <Box mt={4} width="full" p={4}>
        <HStack spacing={3}>
          <Input
            flex={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            focusBorderColor="red.500"
            bg={inputBgColor}
            borderRadius="full"
            boxShadow="sm"
          />
          <IconButton
            colorScheme="red"
            aria-label="Send message"
            icon={<FaPaperPlane />}
            onClick={handleSendMessage}
            borderRadius="full"
          />
        
        </HStack>
      </Box>

      <CreateOrderModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
