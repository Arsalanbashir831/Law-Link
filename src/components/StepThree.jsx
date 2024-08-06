// components/StepThree.js
import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';

const StepThree = ({ formData, handleChange }) => {
  return (
    <Box
      p={6}
      boxShadow="lg"
      borderRadius="md"
      bg="gray.50"
      maxW="md"
      mx="auto"
    >
      <VStack spacing={6}>
        <FormControl id="fullName" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your full name"
            focusBorderColor="red.500"
            value={formData.fullName}
            onChange={(e) => handleChange(e, 'fullName')}
          />
        </FormControl>

        <FormControl id="accountNumber" isRequired>
          <FormLabel>Account Number</FormLabel>
          <Input
            type="text"
            placeholder="Enter your account number"
            focusBorderColor="red.500"
            value={formData.accountNumber}
            onChange={(e) => handleChange(e, 'accountNumber')}
          />
        </FormControl>

        <HStack spacing={4}>
          <FormControl id="expiryDate" isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              placeholder="MM/YY"
              focusBorderColor="red.500"
              value={formData.expiryDate}
              onChange={(e) => handleChange(e, 'expiryDate')}
            />
          </FormControl>

          <FormControl id="cvc" isRequired>
            <FormLabel>CVC</FormLabel>
            <Input
              type="text"
              placeholder="CVC"
              focusBorderColor="red.500"
              value={formData.cvc}
              onChange={(e) => handleChange(e, 'cvc')}
            />
          </FormControl>
        </HStack>
      </VStack>
    </Box>
  );
};

export default StepThree;
