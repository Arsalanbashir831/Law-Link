import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  HStack,
  Avatar,
  Text,
  Box,
  Badge,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { FaUserTie, FaGavel, FaBriefcase } from 'react-icons/fa';

const ViewProfileModal = ({ isOpen, onClose, lawyer }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack spacing={4}>
            <Avatar size="lg" src={lawyer.user.profile_pic} />
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold" fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
                {lawyer.user.username}
              </Text>
              <HStack spacing={2} alignItems="center">
                <Icon as={FaUserTie} color="red.600" />
                <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
                  {lawyer.post_title}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                Services:
              </Text>
              <HStack spacing={2} wrap="wrap">
                {lawyer.lawType.map((service, index) => (
                  <Badge key={index} colorScheme="red" borderRadius="full" px={3} py={1}>
                    {service}
                  </Badge>
                ))}
              </HStack>
            </Box>
            <Box>
              <HStack spacing={2} alignItems="center">
                <Icon as={FaGavel} color="red.600" />
                <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.300')}>
                  Description:
                </Text>
              </HStack>
              <Text mt={2} color={useColorModeValue('gray.600', 'gray.400')}>
                {lawyer.post_description}
              </Text>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter>
        <Flex gap={5}>
        <Button colorScheme="green" >
               Chat
              </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </Flex>
       
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewProfileModal;
