// components/StepOne.js
import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Image,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';

const StepOne = ({ formData, handleChange }) => {
  const columns = useBreakpointValue({ base: '1fr', md: '1fr 1fr' }); // Responsive grid columns

  return (
    <Box
      bg="gray.50"
      p={6}
      borderRadius="md"
      shadow="md"
      borderWidth="1px"
    >
      <Grid templateColumns={columns} gap={6}>
        <GridItem colSpan={1}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              focusBorderColor="red.500"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              placeholder="Enter your age"
              focusBorderColor="red.500"
              value={formData.age}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              focusBorderColor="red.500"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl id="profilePicture">
            <FormLabel>Profile Picture</FormLabel>
            <Input
              type="file"
              accept="image/*"
              focusBorderColor="red.500"
              onChange={handleChange}
            />
            {formData.profilePicture && (
              <Image src={formData.profilePicture} alt="Profile" mt={4} boxSize="150px" objectFit="cover" />
            )}
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default StepOne;
