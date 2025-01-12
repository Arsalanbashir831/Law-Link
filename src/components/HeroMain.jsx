"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
 
  const bgColor = useColorModeValue("rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.7)");
  const textColor = "white";
const router = useRouter()
  return (
    <Box
      w="100%"
      h={{ base: "130vh", md: "90vh" }}
      position="relative"
      backgroundImage="url('https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize="cover"
      backgroundPosition="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: bgColor,
        zIndex: 1,
      }}
    >
      <Flex
        h="100%"
        w="100%"
        m="auto"
        px={5}
        zIndex={2}
        position="relative"
        align="center"
        justify="space-between"
      >
    
        <motion.div
          initial={{ opacity: 0, x: -100 }}  
          whileInView={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }} 
        >
          <Stack pl={15} spacing={6} maxW="lg">
            <Text
              fontSize="lg"
              color="#8a2020"
              fontWeight="bold"
              textTransform="uppercase"
              fontFamily={"Poppins, sans-serif"} 
            >
              Home of Law & Order
            </Text>
            <Heading
              as="h1"
              size="2xl"
              color={textColor}
              fontWeight="bold"
              lineHeight="1.2"
              fontFamily={"Poppins, sans-serif"}  
            >
              Experts of Justice
            </Heading>
            <Text
              color={textColor}
              fontSize="md"
              maxW="sm"
              fontFamily={"Poppins, sans-serif"}
            >
              Law Services on your fingertips. Hire the best lawyers to solve your
              case with the utmost professionalism and care.
            </Text>
            <Button onClick={()=>router.push('/auth')}
              colorScheme="red"
              bg="red.600"
              color="white"
              px={6}
              py={4}
              _hover={{ bg: "red.700" }}
              alignSelf="start"
              borderRadius="lg"
              fontFamily={"Poppins, sans-serif"} 
            >
              Find Out More
            </Button>
          </Stack>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}  
          whileInView={{ opacity: 1, x: 0 }}  
          transition={{ duration: 0.8, ease: 'easeOut' }}  
          viewport={{ once: true, amount: 0.5 }} 
          style={{ zIndex: 2, position: "relative" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lawyer Woman"
            maxH="100vh"
            objectFit="contain"
            borderBottomLeftRadius="full"
            ml={{ base: 0, md: -16 }}
          />
        </motion.div>
      </Flex>
    </Box>
  );
};

export default HeroSection;
