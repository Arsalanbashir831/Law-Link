'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  useToast,
} from '@chakra-ui/react';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import LawyerStep2 from '../LawyerStep2';


const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    profilePicture: '',
    cnicPicture: '',
    bankCardInfo: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [id]: URL.createObjectURL(files[0]),
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast({
        title: 'Form submitted.',
        description: 'Your onboarding form has been submitted successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      console.log(formData);
      // Add your form submission logic here
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Flex align="center" justify="center" p={8}>
      <Box w={{ base: '100%', md: '600px' }}>
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="red.600">
          Onboarding
        </Heading>
        {step === 1 && <StepOne formData={formData} handleChange={handleChange} />}
        {step === 2 && <LawyerStep2 formData={formData} handleChange={handleChange} />}
        {step === 3 && <StepThree formData={formData} handleChange={handleChange} />}
        <Flex mt={8} justify="space-between">
          {/* {step > 1 && (
            <Button colorScheme="red" onClick={handlePreviousStep}>
              Previous
            </Button>
          )} */}
          <Button
            colorScheme="red"
            onClick={handleNextStep}
            ml="auto"
          >
            {step === 3 ? 'Submit' : 'Next'}
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Onboarding;
