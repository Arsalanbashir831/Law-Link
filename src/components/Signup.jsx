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
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/Constants';

const Signup = ({ setIsLoginPage }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: '',
    profilePic: null,
    degreePic: null, // Added field for degreePic
    termsAccepted: false,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [id]: files[0], // Store file object for profile picture and degree picture
      });
    } else {
      setFormData({
        ...formData,
        [id]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const form = new FormData();
      form.append('username', formData.username);
      form.append('email', formData.email);
      form.append('type', formData.userType);
      form.append('password', formData.password);
      form.append('profilePic', formData.profilePic);
      if (formData.userType === 'lawyer') {
        form.append('degreePic', formData.degreePic); // Append degree picture if user is a lawyer
      }

      const response = await fetch(`${BASE_URL}/api/v1/users/signup`, {
        method: 'POST',
        body: form,
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        // Handle successful signup (e.g., navigate to a different page)
        localStorage.setItem('userToken', data.token)
        if(data.user.type==='lawyer'){
          router.push('/Lawyer')
        }else{
          router.push('/FindLawyer')
        }
       
      } else {
        // Handle signup failure (e.g., display an error message)
        console.log('Signup failed', data);
      }
    } catch (error) {
      console.error('Error during signup', error);
    }
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
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdPerson} color="red.500" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  focusBorderColor="red.500"
                  value={formData.username}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
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
            {formData.userType === 'lawyer' && (
              <FormControl id="degreePic" isRequired>
                <FormLabel>Degree Picture</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  focusBorderColor="red.500"
                  onChange={handleChange}
                />
              </FormControl>
            )}
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
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaLock} color="red.500" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  focusBorderColor="red.500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="profilePic">
              <FormLabel>Profile Picture</FormLabel>
              <Input
                type="file"
                accept="image/*"
                focusBorderColor="red.500"
                onChange={handleChange}
              />
            </FormControl>
            <Checkbox
              id="termsAccepted"
              colorScheme="red"
              isChecked={formData.termsAccepted}
              onChange={handleChange}
            >
              <Text fontSize={'sm'}>I agree to the Terms and Conditions</Text>
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
