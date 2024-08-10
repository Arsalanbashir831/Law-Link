import React from 'react';
import {
  Box,
  Grid,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box py={12} px={6} bg="white" minH="100vh">
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
        <Box
          bg="white"
          p={8}
          rounded="lg"
          
          w="full"
        >
         
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" focusBorderColor="red.500" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" focusBorderColor="red.500" />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" focusBorderColor="red.500" />
            </FormControl>
            <Button
              mt={4}
              colorScheme="red"
              bg="red.600"
              color="white"
              _hover={{ bg: 'red.700' }}
              size="lg"
            >
              Submit
            </Button>
          </Stack>
        </Box>

        <Box
          bg="white"
          p={8}
          rounded="lg"
         
        >
          <Heading as="h2" size="xl" mb={6} color="red.600">
           Contact Us
          </Heading>
          <Text mb={4}>
            Our platform offers a seamless and secure way to get legal assistance from experienced professionals. Whether youre dealing with a complex legal issue or need straightforward advice, our experts are here to help.
          </Text>
          <Text mb={4}>
            With our online service, you can connect with top-rated lawyers, receive personalized advice, and handle your legal matters with confidence. Don’t wait—take control of your legal needs today!
          </Text>
        
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactForm;
