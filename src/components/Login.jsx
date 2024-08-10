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
  Text,
  Link,
} from '@chakra-ui/react';

const Login = ({ setIsLoginPage }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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
    <Flex align="center" justify="center" p={8} rounded="lg">
      <Box w={{ base: '100%', md: '400px' }}>
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="red.600">
          Login
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
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                focusBorderColor="red.500"
                value={formData.password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
              <Checkbox
                id="rememberMe"
                colorScheme="red"
                isChecked={formData.rememberMe}
                onChange={handleChange}
              >
                Remember me
              </Checkbox>
              <Link color="red.500">Forgot password?</Link>
            </Stack>
            <Button
              mt={4}
              colorScheme="red"
              bg="red.600"
              color="white"
              _hover={{ bg: 'red.700' }}
              size="lg"
              type="submit"
            >
              Login
            </Button>
            <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="start">
              <Text colorScheme="red">Dont have an Account?</Text>
              <Link color="red.500" onClick={() => setIsLoginPage(false)}>
                Signup
              </Link>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
