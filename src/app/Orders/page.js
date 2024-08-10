'use client'
import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Text,
  Divider,
  HStack,
  Avatar,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import ClientNav from '@/components/ClientNav';

const orders = [
  {
    id: 1,
    lawyerName: 'John Doe',
    date: '2024-07-20',
    description: 'Consultation regarding property dispute',
    avatar: 'https://bit.ly/dan-abramov',
    amount: 150,
    bookingDate: '2024-07-18',
    bookingTime: '10:00 AM',
  },
  {
    id: 2,
    lawyerName: 'Jane Smith',
    date: '2024-08-05',
    description: 'Legal advice on contract drafting',
    avatar: 'https://bit.ly/code-beast',
    amount: 200,
    bookingDate: '2024-08-03',
    bookingTime: '2:00 PM',
  },
  {
    id: 3,
    lawyerName: 'David Lee',
    date: '2024-08-09',
    description: 'Representation in court for a civil case',
    avatar: 'https://bit.ly/prosper-baba',
    amount: 350,
    bookingDate: '2024-08-07',
    bookingTime: '9:00 AM',
  },
];

const OrderPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleReviewClick = (order) => {
    setSelectedOrder(order);
    onOpen();
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmitReview = () => {
    alert(`You rated ${selectedOrder.lawyerName} with ${rating} stars.`);
    onClose();
  };

  return (
    <>
      <ClientNav />
      <Box p={4} maxW="900px" mx="auto">
        <VStack spacing={4} align="stretch">
          {orders.map((order) => (
            <Box key={order.id} p={4} bg="white" borderRadius="md" boxShadow="md">
              <HStack spacing={4}>
                <Avatar size="md" src={order.avatar} />
                <VStack align="start" spacing={1} width="full">
                  <HStack justifyContent="space-between" width="full">
                    <Text fontWeight="bold">{order.lawyerName}</Text>
                    <Text color="gray.500" fontSize="sm">
                      {new Date(order.date).toLocaleDateString()}
                    </Text>
                  </HStack>
                  <Text color="gray.600">{order.description}</Text>
                  <HStack justifyContent="space-between" width="full" mt={2}>
                    <Text color="gray.600">Amount Paid: ${order.amount}</Text>
                    <VStack align="end" spacing={0}>
                      <Text color="gray.600">Booking Date: {new Date(order.bookingDate).toLocaleDateString()}</Text>
                      <Text color="gray.600">Booking Time: {order.bookingTime}</Text>
                    </VStack>
                  </HStack>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={() => handleReviewClick(order)}
                    mt={2}
                  >
                    Add Review
                  </Button>
                </VStack>
              </HStack>
              <Divider mt={4} />
            </Box>
          ))}
        </VStack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review {selectedOrder?.lawyerName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack justify="center">
              {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                  <IconButton
                    key={index}
                    icon={<FaStar />}
                    color={starRating <= (hover || rating) ? 'yellow.400' : 'gray.300'}
                    onClick={() => handleRating(starRating)}
                    onMouseEnter={() => setHover(starRating)}
                    onMouseLeave={() => setHover(null)}
                    aria-label={`${starRating} Stars`}
                    variant="unstyled"
                    fontSize="2xl"
                  />
                );
              })}
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmitReview}>
              Submit Review
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderPage;
