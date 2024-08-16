"use client";
import React, { useState } from "react";
import {
  Box,
  Input,
  VStack,
  HStack,
  Text,
  Button,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPaperPlane, FaBalanceScale } from "react-icons/fa";

const LegalGpt = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    setInput("");

    setTimeout(() => {
      const aiResponse = { sender: "ai", text: `You said: ${input}` };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Move useColorModeValue hook calls to top level
  const bgColor = useColorModeValue("gray.900", "gray.900");
  const iconColor = useColorModeValue("whiteAlpha.300", "whiteAlpha.100");
  const messageContainerBgColor = useColorModeValue("gray.800", "gray.800");
  const scrollbarTrackColor = useColorModeValue("gray.700", "gray.600");
  const scrollbarThumbColor = useColorModeValue("red.500", "red.300");
  const userMessageBgColor = "red.500";
  const userMessageTextColor = "white";
  const aiMessageBgColor = useColorModeValue("gray.700", "gray.700");
  const aiMessageTextColor = useColorModeValue("white", "white");
  const inputBgColor = useColorModeValue("gray.700", "gray.700");

  return (
    <Flex
      direction="column"
      bg={bgColor}
      height={"90vh"}
      p={6}
      boxShadow="2xl"
      width="100%"
      maxW="100%"
      mx="auto"
      position="relative"
    >
      <Icon
        as={FaBalanceScale}
        boxSize="150px"
        color={iconColor}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={0}
      />

      <VStack
        flex={1}
        spacing={4}
        overflowY="auto"
        width="full"
        p={4}
        bg={messageContainerBgColor}
        borderRadius="md"
        boxShadow="lg"
        zIndex={1}
        sx={{
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: scrollbarTrackColor,
          },
          "::-webkit-scrollbar-thumb": {
            background: scrollbarThumbColor,
            borderRadius: "8px",
          },
        }}
      >
        {messages.map((message, index) => (
          <HStack
            key={index}
            alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}
            bg={
              message.sender === "user" ? userMessageBgColor : aiMessageBgColor
            }
            color={
              message.sender === "user"
                ? userMessageTextColor
                : aiMessageTextColor
            }
            borderRadius="lg"
            p={4}
            maxWidth="75%"
            spacing={2}
            boxShadow="md"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Text fontSize="md">{message.text}</Text>
          </HStack>
        ))}
      </VStack>

      <Box mt={4} width="full" zIndex={1}>
        <HStack>
          <Input
            flex={1}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            focusBorderColor="red.500"
            bg={inputBgColor}
            color="white"
            borderRadius="full"
            boxShadow="sm"
          />
          <Button
            colorScheme="red"
            onClick={handleSendMessage}
            borderRadius="full"
            rightIcon={<FaPaperPlane />}
          >
            Send
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default LegalGpt;
