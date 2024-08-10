'use client'
import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  Select,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Stack,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [amount, setAmount] = useState('');
  const toast = useToast();

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime && amount) {
      toast({
        title: 'Appointment Confirmed',
        description: `You have booked an appointment on ${selectedDate.toLocaleDateString()} at ${selectedTime} for $${amount}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Incomplete Details',
        description: 'Please select a date, time, and enter the amount.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      p={6}
      maxW="500px"
      mx="auto"
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      mt={10}
    >
      <Heading mb={6} textAlign="center" color="blue.600">
        Book an Appointment
      </Heading>
      <VStack spacing={5} align="stretch">
        <FormControl>
          <FormLabel color="gray.600">Select a Date:</FormLabel>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            placeholderText="Choose a date"
            className="chakra-input css-yk16xz"
          />
        </FormControl>

        <FormControl>
          <FormLabel color="gray.600">Select a Time:</FormLabel>
          <Select
            placeholder="Choose a time"
            value={selectedTime}
            onChange={handleTimeChange}
            focusBorderColor="blue.500"
            bg="gray.50"
          >
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel color="gray.600">Enter Amount ($):</FormLabel>
          <Input
            type="number"
            placeholder="Enter contract amount"
            value={amount}
            onChange={handleAmountChange}
            focusBorderColor="blue.500"
            bg="gray.50"
          />
        </FormControl>

        <Stack direction="row" justify="center">
          <Button
            colorScheme="blue"
            onClick={handleConfirmBooking}
            size="lg"
            width="full"
          >
            Confirm Appointment
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

export default AppointmentBooking;
