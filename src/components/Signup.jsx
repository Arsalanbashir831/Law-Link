import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Stack,
  Checkbox,
  Link,
  HStack,
  Text,
  Select,
} from '@chakra-ui/react';

const Signup = ({ setIsLoginPage }) => {
  const [formData, setFormData] = useState({
    email: '',
    userType: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Flex align="center" justify="center" p={8}>
      <Box w={{ base: '100%', md: '400px' }}>
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="red.600">
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                focusBorderColor="red.500"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="userType" isRequired>
              <FormLabel>User Type</FormLabel>
              <Select
                placeholder="Select user type"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="lawyer">Lawyer</option>
                <option value="client">Client</option>
              </Select>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Create a password"
                focusBorderColor="red.500"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Checkbox
              id="termsAccepted"
              colorScheme="red"
              isChecked={formData.termsAccepted}
              onChange={handleChange}
            >
              I agree to the Terms and Conditions
            </Checkbox>
            <Button
              mt={4}
              colorScheme="red"
              bg="red.600"
              color="white"
              _hover={{ bg: 'red.700' }}
              size="lg"
              type="submit"
            >
              Sign Up
            </Button>
          </Stack>
        </form>
        <HStack mt={2}>
          <Text>Already Have an Account?</Text>
          <Link onClick={() => setIsLoginPage(true)} color="red.500">
            Login
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Signup;
