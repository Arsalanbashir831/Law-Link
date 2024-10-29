// src/components/LawyerCard.js

import React, { useState } from "react";
import {
  Box,
  Avatar,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

const LawyerCard = ({ lawyer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="white"
        borderRadius="md"
        boxShadow="md"
        p={4}
        width="100%"
        maxW="350px"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.02)" }}
      >
        <HStack spacing={4} align="center">
          <Avatar
            size="lg"
            src={lawyer.user.profile_pic}
            name={lawyer.user.username}
            bg="gray.200"
          />
          <VStack align="start" spacing={1}>
            <Heading size="md" color="red.600">
              {lawyer.user.username}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {lawyer.user.email}
            </Text>
          </VStack>
        </HStack>
        <Box mt={4}>
          <Heading size="sm" color="red.700" mb={2}>
            {lawyer.post_title}
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={3}>
            {lawyer.post_description}
          </Text>
          <HStack wrap="wrap" spacing={2}>
            {lawyer.lawType.map((type, index) => (
              <Badge key={index} colorScheme="red">
                {type}
              </Badge>
            ))}
          </HStack>
        </Box>
        <Button mt={4} colorScheme="red" width="full" onClick={onOpen}>
          Contact Info
        </Button>
      </Box>

      {/* Modal for Lawyer Details */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Collaborate with {lawyer.user.username}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="start">
              <HStack>
                <Avatar
                  size="xl"
                  src={lawyer.user.profile_pic}
                  name={lawyer.user.username}
                />
                <VStack align="start">
                  <Heading size="md" color="red.600">
                    {lawyer.user.username}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {lawyer.user.email}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Rating: {lawyer.user.avgRating} ({lawyer.user.ratingCount}{" "}
                    reviews)
                  </Text>
                </VStack>
              </HStack>
              <Box>
                <Heading size="sm" color="red.700">
                  Specialization
                </Heading>
                <HStack wrap="wrap" spacing={2} mt={2}>
                  {lawyer.lawType.map((type, index) => (
                    <Badge key={index} colorScheme="red">
                      {type}
                    </Badge>
                  ))}
                </HStack>
              </Box>
              <Box>
                <Heading size="sm" color="red.700" mb={2}>
                  Description
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {lawyer.post_description}
                </Text>
              </Box>
              <Box>
                <Heading size="sm" color="red.700" mb={2}>
                  Degree Certificate
                </Heading>
                <Image
                  src={lawyer.user.degree_pic}
                  alt="Degree Certificate"
                  borderRadius="md"
                  boxShadow="sm"
                  maxWidth="100%"
                />
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={onClose} mr={3}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LawyerCard;
