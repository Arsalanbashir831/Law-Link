import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Avatar,
  Text,
  Divider,
  Button,
  Icon,
  Flex,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaDollarSign, FaClock, FaRegCommentDots } from 'react-icons/fa';

const OrderCard = ({ order, onReviewClick }) => {
  return (
    <Box
      p={6}
      bg={useColorModeValue('gray.50', 'gray.800')}
      borderRadius="md"
      boxShadow="lg"
      _hover={{ boxShadow: '2xl', transform: 'translateY(-4px)', transition: '0.3s' }}
      bgGradient={useColorModeValue(
        'linear(to-r, gray.100, gray.50)',
        'linear(to-r, gray.700, gray.800)'
      )}
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    >
      <HStack spacing={4} alignItems="start">
        <Avatar size="xl" src={order.avatar} />
        <VStack align="start" spacing={3} width="full">
          <Flex justify="space-between" width="full">
            <Text fontWeight="bold" fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
              {order.lawyerName}
            </Text>
            <Badge colorScheme="blue" fontSize="0.9em">
              {new Date(order.date).toLocaleDateString()}
            </Badge>
          </Flex>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="md">
            {order.description}
          </Text>
          <HStack spacing={6} mt={3} width="full" justifyContent="space-between">
            <HStack>
              <Icon as={FaDollarSign} color="green.400" />
              <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize="md" fontWeight="medium">
                ${order.amount}
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaCalendarAlt} color="blue.400" />
              <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize="md" fontWeight="medium">
                {new Date(order.bookingDate).toLocaleDateString()}
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaClock} color="purple.400" />
              <Text color={useColorModeValue('gray.700', 'gray.300')} fontSize="md" fontWeight="medium">
                {order.bookingTime}
              </Text>
            </HStack>
          </HStack>
          <Button
            colorScheme="red"
            size="md"
            leftIcon={<FaRegCommentDots />}
            onClick={() => onReviewClick(order)}
            mt={4}
            alignSelf="flex-end"
            variant="solid"
          >
            Add Review
          </Button>
        </VStack>
      </HStack>
      <Divider mt={4} borderColor={useColorModeValue('gray.200', 'gray.600')} />
    </Box>
  );
};

export default OrderCard;
