"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Text,
  useToast,
  VStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import { BASE_URL } from "@/Constants";

const ContactUs = () => {
  const underlineColor = useColorModeValue("#9D152D", "#9D152D");
  const inputBgColor = useColorModeValue("rgba(255, 255, 255, 0.15)", "rgba(0, 0, 0, 0.25)");
  const toast = useToast();

  const [formData, setFormData] = useState({
    email: "",
    query: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}api/v1/users/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Query sent successfully!",
          description: "We will get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setFormData({ email: "", query: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error sending query",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <Box
      position="relative"
      py={{ base: "12", md: "24" }}
      px={{ base: "6", md: "12", lg: "24" }}
      backgroundColor={useColorModeValue("gray.50", "gray.900")}
    >
      <Container maxW="full" bg="white" p={8} borderRadius="lg" boxShadow="lg">
        <VStack spacing={6} align="stretch">
          <Heading as="h2" size="lg" textAlign="center" color="red.600">Send Your Query</Heading>
          {/* <Box w="100%" h="2px" bg={underlineColor} mt={1} mb={4} alignSelf="center" /> */}
          <Text textAlign="center" color="gray.600">Submit your query and we will get back to you as soon as possible.</Text>
          
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email*"
                  bg={inputBgColor}
                  borderColor="#9D152D"
                  borderWidth="2px"
                  color="black"
                  _placeholder={{ color: "gray.600" }}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <Textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  placeholder="Your Query.."
                  bg={inputBgColor}
                  borderColor="#9D152D"
                  borderWidth="2px"
                  color="black"
                  _placeholder={{ color: "gray.600" }}
                  size="lg"
                  rows={5}
                />
              </FormControl>

              <Button 
                type="submit" 
                bg="#9D152D" 
                size="lg" 
                width="full" 
                isLoading={loading} 
                _hover={{ bg: "#7d0f24", color: "white" }}
              >
                <Text color="white">SEND QUERY</Text>
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactUs;
