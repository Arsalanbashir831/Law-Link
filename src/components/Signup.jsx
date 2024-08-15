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
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { MdEmail, MdPerson } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

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
    console.log(formData);
  };

  return (
    <Flex align="center" justify="center" h="75vh" bg="white">
      <Box
        w={{ base: '100%', md: '500px' }}
        p={8}
        rounded="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="red.600">
          Create Your Account
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdEmail} color="red.500" />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  focusBorderColor="red.500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="userType" isRequired>
              <FormLabel>User Type</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdPerson} color="red.500" />
                </InputLeftElement>
                <Select
                  placeholder="Select user type"
                  focusBorderColor="red.500"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <option value="lawyer">Lawyer</option>
                  <option value="client">Client</option>
                </Select>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaLock} color="red.500" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Create a password"
                  focusBorderColor="red.500"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <Checkbox
              id="termsAccepted"
              colorScheme="red"
              isChecked={formData.termsAccepted}
              onChange={handleChange}
            >
              <Text fontSize={'sm'}>

              I agree to the Terms and Conditions
              </Text>
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
        <HStack mt={4} justify="center">
          <Text color="gray.600">Already have an account?</Text>
          <Link onClick={() => setIsLoginPage(true)} color="red.500">
            Login
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Signup;
