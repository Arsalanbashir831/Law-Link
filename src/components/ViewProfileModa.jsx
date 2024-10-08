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
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUserTie, FaGavel, FaBriefcase } from 'react-icons/fa';

const ViewProfileModal = ({ isOpen, onClose, lawyer }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={useColorModeValue('red.600', 'gray.700')} borderTopRadius="md">
          <HStack spacing={4}>
            <Avatar size="lg" src={lawyer.user?.profile_pic} name={lawyer.user?.username} />
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold" fontSize="2xl" color={useColorModeValue('white', 'white')}>
                {lawyer.user?.username}
              </Text>
              <HStack spacing={1} alignItems="center">
                <Icon as={FaUserTie} color="white" />
                <Text fontSize="md" color={useColorModeValue('white', 'white')}>
                  {lawyer?.post_title}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </ModalHeader>
        <ModalCloseButton color={useColorModeValue('white', 'white')} />
        <ModalBody>
          <VStack align="start" spacing={6}>
            <Box w="full">
              <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                Services:
              </Text>
              <HStack spacing={2} wrap="wrap">
                {lawyer.lawType?.map((service, index) => (
                  <Badge key={index} colorScheme="red" borderRadius="full" px={3} py={1}>
                    {service}
                  </Badge>
                ))}
              </HStack>
            </Box>
            <Divider borderColor={useColorModeValue('gray.300', 'gray.600')} />
            <Box w="full">
              <HStack spacing={2} alignItems="center" mb={2}>
                <Icon as={FaGavel} color="red.600" />
                <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.300')}>
                  Description:
                </Text>
              </HStack>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                {lawyer?.post_description}
              </Text>
            </Box>
            <Divider borderColor={useColorModeValue('gray.300', 'gray.600')} />
            <Box w="full">
              <HStack spacing={2} alignItems="center" mb={2}>
                <Icon as={FaBriefcase} color="red.600" />
                <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.300')}>
                  Experience:
                </Text>
              </HStack>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Over 10 years of experience in {lawyer?.post_title}.
              </Text>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter bg={useColorModeValue('gray.100', 'gray.700')} borderBottomRadius="md">
          <Button colorScheme="red" onClick={onClose} mr={3}>
            Close
          </Button>
          <Button variant="ghost" onClick={() => alert('Contact Lawyer')}>
            Contact
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewProfileModal;
