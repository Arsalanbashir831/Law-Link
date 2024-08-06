'use client'
import { Grid, Image, Box, Text, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from '@/components/Login';
import Signup from '@/components/Signup';

const AuthPage = () => {
  const [isLoginPage , setIsLoginPage]= useState(false)
  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} minH="100vh">
      <Flex align="center" justify="center" p={8} bg="gray.50">
      { isLoginPage  ?  <Login setIsLoginPage={setIsLoginPage}/> : <Signup setIsLoginPage={setIsLoginPage} />}
      </Flex>
      <Box position="relative">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGxhd3xlbnwwfHx8fDE2Mjg2NjEwMjI&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Legal background"
          objectFit="cover"
          w="100%"
          h="100vh"
        />
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          align="center"
          justify="center"
          direction="column"
          color="white"
          textAlign="center"
          p={8}
        >
          <Heading as="h2" size="xl" mb={4}>
            Welcome to LawLink
          </Heading>
          <Text fontSize="lg" mb={4}>
            Get the justice you deserve with our expert legal services.
          </Text>
          <Text fontSize="md">
            Our platform connects you with top lawyers and offers AI-driven legal advice.
          </Text>
        </Flex>
      </Box>
    </Grid>
  );
};

export default AuthPage;
