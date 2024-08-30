// BookingDetailsModal.js
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  VStack,
  HStack,
  Text,
  Avatar,
  Divider,
  Badge,
  Spacer,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaDollarSign, FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
    console.log(booking);
    
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Booking Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            borderWidth="1px"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="lg"
            bg="orange.50"
            p={5}
            w="full"
            mb={3}
          >
            <VStack align="start" spacing={3} w="full">
              <HStack justify="space-between" w="full">
                <Text fontSize="sm" color="gray.500">
                  {new Date(booking?.bookingDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Text>
                <Avatar
                  src={booking?.client?.profilePic || "https://bit.ly/dan-abramov"}
                  name={booking?.client?.username || booking?.lawyerName}
                  size="lg"
                  border="2px solid"
                  borderColor="white"
                />
              </HStack>

              <HStack spacing={3} w="full">
                <VStack align="start" spacing={0} flex={1}>
                  <Text fontSize="md" fontWeight="bold" color="black">
                    {booking?.client?.username || booking?.lawyerName}
                  </Text>
                  <Text fontSize="sm" fontWeight="bold" color="black">
                    {booking?.client?.email || booking?.description}
                  </Text>
                </VStack>
              </HStack>

              <Divider />
              <HStack spacing={2} w="full" wrap="wrap">
                {booking?.services?.map((service, index) => (
                  <Badge bg={"red.600"} key={index} borderRadius="md" px={2} py={1}>
                    <Text color={"white"}>{service}</Text>
                  </Badge>
                ))}
              </HStack>

              <Divider />

              <Flex align="center" w="full" mt={4}>
                <Text fontSize="lg" fontWeight="bold" color="black">
                  <Icon as={FaDollarSign} color="gray.500" mr={1} />
                  {booking?.amount}/hr
                </Text>
                <Spacer />
                <Text fontSize="sm" color="gray.500">
                  <Icon as={FaMapMarkerAlt} color="gray.500" mr={1} />
                  {booking?.location || "Location not specified"}
                </Text>
              </Flex>

              <Flex align="center" w="full" mt={4}>
                <Text fontSize="sm" color="gray.500">
                  <Icon as={FaCalendarAlt} color="gray.500" mr={1} />
                  Appointment Date: {new Date(booking?.bookingDate).toLocaleDateString()}
                </Text>
                <Spacer />
                <Text fontSize="sm" color="gray.500">
                  <Icon as={FaClock} color="gray.500" mr={1} />
                  Appointment Time: {booking?.timeOfAppointment || "N/A"}
                </Text>
              </Flex>

              <Divider />

              <Text fontSize="sm" color="gray.500" mt={2}>
                Created At: {new Date(booking?.createdAt).toLocaleString()}
              </Text>
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BookingDetailsModal;
