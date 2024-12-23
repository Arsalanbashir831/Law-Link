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
  Spinner,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaPaperPlane, FaBalanceScale } from "react-icons/fa";
import { BASE_URL } from "@/Constants";

const formatText = (text) => {
  const lines = text.split("\n").map((line, index) => {
    if (line.startsWith("## ")) {
      const heading = line.replace("## ", "");
      return (
        <Text as="h2" fontSize="2xl" fontWeight="bold" key={index} mt={4}>
          {heading}
        </Text>
      );
    }

    const boldLine = line.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
      return `<strong>${p1}</strong>`;
    });

    return (
      <Text
        as="p"
        fontSize="md"
        key={index}
        dangerouslySetInnerHTML={{ __html: boldLine }}
        mt={2}
      />
    );
  });

  return lines;
};

const LegalGpt = () => {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const popularPrompts = [
    "What are my rights as a tenant?",
    "Can I break my lease early?",
    "What should I know about employment contracts?",
    "How to file a trademark?",
    "What are the steps for filing a lawsuit?",
  ];

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    setLoading(true);
    const loadingMessage = { sender: "ai", text: "loading" };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    try {
      const response = await fetch(`${BASE_URL}api/v1/users/legalGPT`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textPrompt: input }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        setMessages((prevMessages) => prevMessages.slice(0, -1));

        const aiResponse = { sender: "ai", text: ` ${data.response}` };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }
    } catch (error) {
      console.log(error);

      setMessages((prevMessages) => prevMessages.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
  };

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
            <Box>
              {message.sender === "ai" && message.text === "loading" ? (
                <Spinner size="sm" color="white" />
              ) : message.sender === "ai" ? (
                formatText(message.text).map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>{line}</React.Fragment>
                ))
              ) : (
                message.text
              )}
            </Box>
          </HStack>
        ))}
      </VStack>

      <Box mt={4} width="full" zIndex={1}>
        <Wrap mb={4} spacing={2}>
          {popularPrompts.map((prompt, index) => (
            <WrapItem key={index}>
              <Button
                size="sm"
                colorScheme="red"
                variant="outline"
                onClick={() => handlePromptClick(prompt)}
              >
                {prompt}
              </Button>
            </WrapItem>
          ))}
        </Wrap>

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
            isLoading={loading}
          >
            Send
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default LegalGpt;
