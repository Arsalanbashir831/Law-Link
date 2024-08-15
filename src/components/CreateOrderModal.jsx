'use client'
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaUser, FaCalendarAlt, FaFileAlt, FaDollarSign, FaClock } from 'react-icons/fa';

const CreateOrderModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    lawyerName: '',
    date: '',
    description: '',
    amount: '',
    bookingDate: '',
    bookingTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert('Order created successfully!');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl id="lawyerName" isRequired>
              <FormLabel>
                <Icon as={FaUser} mr={2} />
                Lawyer Name
              </FormLabel>
              <Input
                placeholder="Enter lawyer name"
                name="lawyerName"
                value={formData.lawyerName}
                onChange={handleInputChange}
                focusBorderColor="red.500"
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="md"
              />
            </FormControl>

            <FormControl id="date" isRequired>
              <FormLabel>
                <Icon as={FaCalendarAlt} mr={2} />
                Date
              </FormLabel>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                focusBorderColor="red.500"
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="md"
              />
            </FormControl>

            <FormControl id="description" isRequired>
              <FormLabel>
                <Icon as={FaFileAlt} mr={2} />
                Description
              </FormLabel>
              <Input
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                focusBorderColor="red.500"
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="md"
              />
            </FormControl>

            <FormControl id="amount" isRequired>
              <FormLabel>
                <Icon as={FaDollarSign} mr={2} />
                Amount
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                focusBorderColor="red.500"
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="md"
              />
            </FormControl>

            <HStack spacing={4} width="full">
              <FormControl id="bookingDate" isRequired>
                <FormLabel>
                  <Icon as={FaCalendarAlt} mr={2} />
                  Booking Date
                </FormLabel>
                <Input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleInputChange}
                  focusBorderColor="red.500"
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="md"
                />
              </FormControl>

              <FormControl id="bookingTime" isRequired>
                <FormLabel>
                  <Icon as={FaClock} mr={2} />
                  Booking Time
                </FormLabel>
                <Input
                  type="time"
                  name="bookingTime"
                  value={formData.bookingTime}
                  onChange={handleInputChange}
                  focusBorderColor="red.500"
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="md"
                />
              </FormControl>
            </HStack>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateOrderModal;
