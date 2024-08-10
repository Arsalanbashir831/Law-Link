'use client'
import React, { useState } from 'react';
import { Box, Input, VStack, HStack, Text, Button, Flex } from '@chakra-ui/react';

const LegalGpt = () => {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { sender: 'ai', text: `You said: ${input}` };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Flex
      direction="column"
      bg="gray.100"
      height={'90vh'}
      p={4}
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
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
            bg={message.sender === 'user' ? 'red.500' : 'gray.300'}
            color={message.sender === 'user' ? 'white' : 'black'}
            borderRadius="lg"
            p={3}
            maxWidth="80%"
          >
            <Text>{message.text}</Text>
          </HStack>
        ))}
      </VStack>

      {/* Input Field */}
      <Box mt={4} width="full">
        <HStack>
          <Input
            flex={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
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
        </HStack>
      </Box>
    </Flex>
  );
};

export default LegalGpt;
