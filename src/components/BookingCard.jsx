'use client';
import React from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
  Badge,
  Icon,
  Button,
  Avatar,
  useColorModeValue,
  Flex,
  Spacer,
  IconButton,
  Divider,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import { FaDollarSign, FaMapMarkerAlt, FaInfoCircle, FaBookmark, FaStar } from 'react-icons/fa';
import ReviewModal from './ReviewModal';

const BookingCard = ({ booking, buttonType = 'Details' }) => {
  const bgColor = useColorModeValue('orange.50', 'gray.700');
  const textColor = useColorModeValue('black', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
console.log("is rated",booking.isRatedBooking);

  const handleButtonClick = () => {
    if (buttonType === 'Review') {
      onOpen();
    } else {
      console.log('Details clicked');
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="20px"
        overflow="hidden"
        boxShadow="lg"
        bg={bgColor}
        p={5}
        w="300px"
        m={4}
      >
        <VStack align="start" spacing={3} w="full">
          <HStack justify="space-between" w="full">
            <Text fontSize="sm" color="gray.500">
              {new Date(booking?.bookingDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Text>
            <Avatar
              src={booking?.profile || "https://bit.ly/dan-abramov"}
              name={booking?.lawyerName}
              size="lg"
              border="2px solid"
              borderColor="white"
            />
          </HStack>

          <HStack spacing={3} w="full">
            <VStack align="start" spacing={0} flex={1}>
              <Text fontSize="md" fontWeight="bold" color={textColor}>
                {booking?.lawyerName}
              </Text>
              <Text fontSize="sm" fontWeight="bold" color={textColor}>
                {booking?.description || 'Law Firm Name'}
              </Text>
            </VStack>
          </HStack>

          <Divider />

          <HStack spacing={2} w="full" wrap="wrap">
            {booking?.services?.map((tag, index) => (
              <Badge key={index} colorScheme="gray" borderRadius="md" px={2} py={1}>
                {tag}
              </Badge>
            ))}
          </HStack>

          <Divider />

          <Flex align="center" w="full" mt={4}>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              <Icon as={FaDollarSign} color="gray.500" mr={1} />
              {booking?.amount}/hr
            </Text>
            <Spacer />
            <Text fontSize="sm" color="gray.500">
              <Icon as={FaMapMarkerAlt} color="gray.500" mr={1} />
              {booking?.location || 'San Francisco, CA'}
            </Text>
          </Flex>

          <Flex align="center" w="full" mt={4}>
            <Tooltip label={booking.isRatedBooking ? 'Review already added' : ''} placement="top">
              <Button
                onClick={handleButtonClick}
                isDisabled={booking.isRatedBooking}
                colorScheme={booking.isRatedBooking ? 'gray' : 'red'}
                leftIcon={<FaStar />}
              >
                {booking.isRatedBooking ? 'Review Added' : 'Add Review'}
              </Button>
            </Tooltip>
          </Flex>
        </VStack>
      </Box>
      <ReviewModal isOpen={isOpen} onClose={onClose} lawyerId={booking.lawyerId} />
    </>
  );
};

export default BookingCard;
