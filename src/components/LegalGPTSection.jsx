import { Box, Flex, Image, Text, Button, VStack } from '@chakra-ui/react';
import React from 'react';

const LegalGPTSection = () => {
  return (
    <Box py={12} px={6} bg="gray.50">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center">
        <Box flex="1" maxW="lg" mb={{ base: 8, md: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Legal GPT"
            borderRadius="lg"
            boxShadow="lg"
            height={500}
            width={500}
          />
        </Box>
        <Box flex="1" maxW="lg" ml={{ md: 10 }}>
          <VStack align="start" spacing={6}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">
              Legal GPT
            </Text>
            <Text fontSize="lg" color="gray.600">
              Add your case study and get AI-powered legal advice tailored to your specific situation.
              Our advanced AI system analyzes your case details and provides you with reliable and accurate
              legal guidance.
            </Text>
            <Button colorScheme="red" size="lg" variant="solid">
              Try Now
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default LegalGPTSection;
