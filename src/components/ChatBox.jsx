'use client'
import React, { useState } from 'react';
import { Box, Input, VStack, HStack, Text, Button, Flex, Avatar } from '@chakra-ui/react';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { sender: 'John Doe', text: 'Hi there! How can I help you?', avatar: 'https://bit.ly/dan-abramov' },
    { sender: 'You', text: 'I need assistance with my order.', avatar: 'https://bit.ly/code-beast' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'You', text: input, avatar: 'https://bit.ly/prosper-baba' };
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInput('');

    // Simulate response from the other user
    setTimeout(() => {
      const response = { sender: 'John Doe', text: `I'm here to help you with ${input}`, avatar: 'https://bit.ly/dan-abramov' };
      setMessages((prevMessages) => [...prevMessages, response]);
    }, 1000);
  };

  const handleCreateOrder = () => {
    alert('Order creation functionality will be implemented here.');
  };

  return (
    <Flex
      direction="column"
      bg="gray.50"
      p={4}
      borderRadius="md"
      boxShadow="md"
      height="100vh"
      width="100%"
    >
      {/* Chat Messages */}
      <VStack
        flex={1}
        spacing={4}
        overflowY="auto"
        width="full"
        p={4}
        bg="white"
        borderRadius="md"
        boxShadow="md"
      >
        {messages.map((message, index) => (
          <HStack
            key={index}
            alignSelf={message.sender === 'You' ? 'flex-end' : 'flex-start'}
            bg={message.sender === 'You' ? 'red.500' : 'gray.300'}
            color={message.sender === 'You' ? 'white' : 'black'}
            borderRadius="lg"
            p={3}
            maxWidth="80%"
            spacing={4}
          >
            {message.sender !== 'You' && <Avatar size="sm" src={message.avatar} />}
            {message.sender === 'You' && <Avatar size="sm" src={message.avatar} />}
            <Text>{message.text}</Text>
          
          </HStack>
        ))}
      </VStack>

      {/* Input Field */}
      <Box mt={4} width="full">
        <HStack spacing={2}>
          <Input
            flex={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            focusBorderColor="red.500"
            bg="white"
            borderRadius="md"
          />
          <Button
            colorScheme="red"
            onClick={handleSendMessage}
            borderRadius="md"
          >
            Send
          </Button>
          <Button
            colorScheme="blue"
            onClick={handleCreateOrder}
            borderRadius="md"
          >
            Create Order
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default ChatBox;
