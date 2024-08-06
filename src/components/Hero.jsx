import { Box, Image, Flex, Text, Button, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Box position="relative" h="100vh" w="full" overflow="hidden">
      <Image
        src="https://plus.unsplash.com/premium_photo-1661769577787-9811af17f98d?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0"
        alt="Hero Image"
        objectFit="cover"
        w="full"
        h="full"
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.7)"
        align="center"
        justify="center"
        p={4}
      >
        <VStack spacing={8} textAlign="center" color="white" maxW="lg">
          <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold">
            Get the Justice You Deserve
          </Text>
          <Text fontSize={{ base: 'md', md: 'xl' }}>
            Hire experienced lawyers to solve your case with the utmost professionalism and care.
          </Text>
         
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              size="lg"
              colorScheme="red"
              bg="red.500"
              _hover={{ bg: 'red.600' }}
            >
             Hire Lawyer
            </Button>
            <Button
              size="lg"
              colorScheme="teal"
              variant="outline"
              _hover={{ bg: 'teal.600', color: 'white' }}
            >
              Learn More
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Hero;
