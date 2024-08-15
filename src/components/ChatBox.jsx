'use client'
import React, { useState } from 'react';
import { Box, Input, VStack, HStack, Text, Button, Flex, Avatar, IconButton, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FaPaperPlane, FaPlus } from 'react-icons/fa';
import CreateOrderModal from './CreateOrderModal'; // Import the CreateOrderModal component

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'John Doe', text: 'Hi there! How can I help you?', avatar: 'https://bit.ly/dan-abramov' },
    { sender: 'You', text: 'I need assistance with my order.', avatar: 'https://bit.ly/code-beast' },
  ]);
  const [input, setInput] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'You', text: input, avatar: 'https://bit.ly/prosper-baba' };
    setMessages([...messages, newMessage]);

    setInput('');
    setTimeout(() => {
      const response = { sender: 'John Doe', text: `I'm here to help you with ${input}`, avatar: 'https://bit.ly/dan-abramov' };
      setMessages((prevMessages) => [...prevMessages, response]);
    }, 1000);
  };

  return (
    <Flex
      direction="column"
      bg={useColorModeValue('gray.100', 'gray.800')}
      p={4}
      borderRadius="md"
      boxShadow="lg"
      height="90vh"
      width="100%"
      maxW="1200px"
      mx="auto"
    >
    
      <VStack
        flex={1}
        spacing={4}
        overflowY="auto"
        width="full"
        p={4}
        bg={useColorModeValue('white', 'gray.700')}
        borderRadius="md"
        boxShadow="md"
        sx={{
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: useColorModeValue('gray.200', 'gray.600'),
          },
          '::-webkit-scrollbar-thumb': {
            background: useColorModeValue('red.500', 'red.300'),
            borderRadius: '8px',
          },
        }}
      >
        {messages.map((message, index) => (
          <HStack
            key={index}
            alignSelf={message.sender === 'You' ? 'flex-end' : 'flex-start'}
            bg={message.sender === 'You' ? 'red.500' : useColorModeValue('gray.200', 'gray.600')}
            color={message.sender === 'You' ? 'white' : useColorModeValue('black', 'white')}
            borderRadius="lg"
            p={4}
            maxWidth="75%"
            spacing={4}
            boxShadow="sm"
          >
            {message.sender !== 'You' && <Avatar size="sm" src={message.avatar} />}
            <Text fontSize="md">{message.text}</Text>
            {message.sender === 'You' && <Avatar size="sm" src={message.avatar} />}
          </HStack>
        ))}
      </VStack>

      
      <Box mt={4} width="full">
        <HStack spacing={3}>
          <Input
            flex={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            focusBorderColor="red.500"
            bg={useColorModeValue('white', 'gray.700')}
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
          <IconButton
            colorScheme="blue"
            aria-label="Create order"
            icon={<FaPlus />}
            onClick={onOpen}
            borderRadius="full"
          />
        </HStack>
      </Box>

      
      <CreateOrderModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default ChatBox;
