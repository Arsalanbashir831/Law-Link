import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Input,
  FormControl,
  FormLabel,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { FaUser, FaCalendar, FaIdCard, FaPhone, FaEdit, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Profile = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editableUser, setEditableUser] = useState(user);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Handle saving the updated user details
    onClose();
  };

  return (
    <Box
      maxW="2xl"
      mx="auto"
      mt={8}
      p={6}
      boxShadow="lg"
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
    >
      <Flex direction="column" alignItems="center" mb={6}>
        <Avatar
          size="2xl"
          name={editableUser.name}
          src={editableUser.avatarUrl}
          mb={4}
          boxShadow="lg"
        />
        <Heading mb={2}>{editableUser.name}</Heading>
        <Text fontSize="lg" color="gray.500" mb={4}>
          @{editableUser.username}
        </Text>
      </Flex>
      <Stack spacing={4} w="full" maxW="md" mx="auto">
        <ProfileDetail icon={FaCalendar} label="Date of Birth" value={editableUser.dob} />
        <ProfileDetail icon={FaIdCard} label="CNIC Number" value={editableUser.cnic} />
        <ProfileDetail icon={FaPhone} label="Contact Number" value={editableUser.contactNumber} />
      </Stack>
      <Stack direction="row" spacing={4} mt={8} justify="center">
        <Button leftIcon={<FaEdit />} colorScheme="red" onClick={onOpen}>
          Edit Profile
        </Button>
        <Button
          leftIcon={<FaSignOutAlt />}
          colorScheme="red"
          variant="outline"
          onClick={() => router.push('/logout')}
        >
          Logout
        </Button>
      </Stack>

      {/* Modal for editing profile */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={editableUser.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  value={editableUser.username}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="dob"
                  value={editableUser.dob}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>CNIC Number</FormLabel>
                <Input
                  name="cnic"
                  value={editableUser.cnic}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Contact Number</FormLabel>
                <Input
                  name="contactNumber"
                  value={editableUser.contactNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const ProfileDetail = ({ label, value, icon }) => (
  <Flex align="center">
    <Icon as={icon} color="red.600" mr={2} />
    <Box>
      <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.300')}>
        {label}:
      </Text>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>{value}</Text>
    </Box>
  </Flex>
);

export default Profile;
