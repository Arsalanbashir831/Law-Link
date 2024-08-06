import { Box, Flex, Image, Text, Button, VStack } from '@chakra-ui/react';
import React from 'react';

const HireLawyer = () => {
  return (
    <Box py={12} px={6} bg="gray.50">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
       
        <Box flex="1" maxW="lg" ml={{ md: 10 }}>
          <VStack align="start" spacing={6}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">
             Hire Lawyer
            </Text>
            <Text fontSize="lg" color="gray.600">
            Navigating the complexities of legal issues can be daunting, but hiring a lawyer online has never been easier or more efficient. Imagine having access to top-tier legal professionals right at your fingertips, ready to provide expert advice and representation tailored to your unique situation. 
            </Text>
            <Button colorScheme="red" size="lg" variant="solid">
              Hire Now
            </Button>
          </VStack>
        </Box>

        <Box flex="1" maxW="lg" mb={{ base: 8, md: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Legal GPT"
            borderRadius="lg"
            boxShadow="lg"
            height={500}
            width={500}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HireLawyer;
