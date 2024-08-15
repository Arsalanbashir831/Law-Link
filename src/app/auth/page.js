"use client";
import {
  Grid,
  Image,
  Box,
  Text,
  Flex,
  Heading,
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "@/components/Login";
import Signup from "@/components/Signup";


const fadeIn = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const slideIn = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  50% { transform: translateY(55px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideInRightToLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: isLoginPage ? "1fr 1fr" : "1fr 1fr",
  });

  return (
    <Grid templateColumns={gridTemplateColumns} minH="100vh">
      {isLoginPage ? (
        <>
          <Box position="relative">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGxhd3xlbnwwfHx8fDE2Mjg2NjEwMjI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Legal background"
              objectFit="cover"
              w="100%"
              h="100vh"
              opacity="0.7"
              animation={`${fadeIn} 2s ease-in-out`}
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
              animation={`${slideIn} 3s ease-in-out`}
            >
              <Heading as="h1" size="xl" mb={4} whiteSpace="nowrap">
                Welcome Back!
              </Heading>
              <Text fontSize="md" mb={4} whiteSpace="nowrap">
                Log in to continue your journey.
              </Text>
            </Flex>
          </Box>
          <Flex align="center" justify="center" p={8} bg="gray.50">
            <Login setIsLoginPage={setIsLoginPage} />
          </Flex>
        </>
      ) : (
        <>
          <Flex align="center" justify="center" p={8} bg="gray.50">
            <Signup setIsLoginPage={setIsLoginPage} />
          </Flex>
          <Box position="relative">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGxhd3xlbnwwfHx8fDE2Mjg2NjEwMjI&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Legal background"
              objectFit="cover"
              w="100%"
              h="100vh"
              opacity="0.9"
              animation={`${fadeIn} 3s ease-in-out`}
            />
            <Flex
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(15, 15, 15, 0.5)"
              align="center"
              justify="center"
              direction="column"
              color="white"
              textAlign="center"
              p={8}
              animation={`${slideIn} 3s ease-in-out`}
            >
              {/* <Box
                bg="rgba(0,0,0,0.7)"
                p={7}
                w="100%"
                
                borderRadius={10}
                boxShadow={"md"}
              > */}
                <Heading as="h1" size="xl" mb={4} whiteSpace="nowrap">
                  Welcome to LawLink
                </Heading>
                <Text fontSize="md" mb={4} whiteSpace="nowrap">
                  Get the justice you deserve with our expert legal services.
                </Text>
                <Text fontSize="sm" whiteSpace="nowrap">
                  Our platform connects you with top lawyers and offers
                  AI-driven legal advice.
                </Text>
              {/* </Box> */}
            </Flex>
          </Box>
        </>
      )}
    </Grid>
  );
};

export default AuthPage;
