"use client";
import {
  Grid,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Login from "@/components/Login";
import Signup from "@/components/Signup";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGxhd3xlbnwwfHx8fDE2Mjg2NjEwMjI&ixlib=rb-1.2.1&q=80&w=1080",
      heading: "Welcome to LawLink",
      text: "Get the justice you deserve with our expert legal services.",
      subtext:
        "Our platform connects you with top lawyers and offers AI-driven legal advice.",
    },
    {
      src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Legal Assistance at Your Fingertips!",
      text: " Justice Simplified",
      subtext:
        "Our AI-driven tools ensure you receive accurate and timely legal assistance.",
    },
    {
      src: "https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Your Legal Ally",
      text: "Instant access to top-tier legal advice and representation.",
      subtext:
        "Trusted connections with lawyers who fight for you.",
    },
  ];

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    md: isLoginPage ? "1fr 1fr" : "1fr 1fr",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 10000); 
    return () => clearInterval(slideTimer);
  }, [images.length]);

  return (
    <Grid
      templateColumns={gridTemplateColumns}
      minH="100vh"
      visibility={isLoaded ? "visible" : "hidden"}
    >
      {isLoginPage ? (
        <>
          <MotionBox
            position="relative"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} 
          >
            <Image
              src={images[currentSlide].src}
              alt="Legal background"
              objectFit="cover"
              w="100%"
              h="100vh"
              opacity="0.9"
              animation={`${fadeIn} 1.5s ease-in-out`}
            />
            <MotionFlex
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
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }} 
            >
              <MotionHeading
                as="h1"
                size="xl"
                mb={8}
                whiteSpace="nowrap"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Text color={"red.600"}>

                {images[currentSlide].heading}
                </Text>
              </MotionHeading>
              <MotionText
                fontSize="md" 
                mb={6}
                whiteSpace="nowrap"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.5 }} 
              >
                {images[currentSlide].text}
              </MotionText>
              <MotionText
                fontSize="md" 
                whiteSpace="nowrap"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }} 
              >
                {images[currentSlide].subtext}
              </MotionText>
            </MotionFlex>
          </MotionBox>
          <Flex align="center" justify="center" p={8} bg="gray.50">
            <Login setIsLoginPage={setIsLoginPage} />
          </Flex>
        </>
      ) : (
        <>
          <Flex align="center" justify="center" p={8} bg="gray.50">
            <Signup setIsLoginPage={setIsLoginPage} />
          </Flex>
          <MotionBox
            position="relative"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={images[currentSlide].src}
              alt="Legal background"
              objectFit="cover"
              w="100%"
              h="100vh"
              opacity="0.9"
              animation={`${fadeIn} 1.5s ease-in-out`}
            />
            <MotionFlex
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
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <MotionHeading
                as="h1"
                size="xl"
                mb={8}
                whiteSpace="nowrap"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Text color={"red.600"}>

                {images[currentSlide].heading}
                </Text>
              </MotionHeading>
              <MotionText
                fontSize="md"
                mb={6}
                whiteSpace="nowrap"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.5 }} 
              >
                {images[currentSlide].text}
              </MotionText>
              <MotionText
                fontSize="md"
                whiteSpace="nowrap"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }} 
              >
                {images[currentSlide].subtext}
              </MotionText>
            </MotionFlex>
          </MotionBox>
        </>
      )}
    </Grid>
  );
};

export default AuthPage;
