import React, { useContext, useState } from 'react';
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
  HStack,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { FaUser, FaCalendar, FaIdCard, FaPhone, FaEdit, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/services/AuthProvider';

const Profile = ({ user }) => {
  const {logout} = useContext(AuthContext);
  // const {username, email} = user;
  // console.log(username);
  
  
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
   
    onClose();
  };

  return (
    <Box
      maxW="2xl"
      mx="auto"
      mt={8}
      p={8}
      boxShadow="2xl"
      bg={useColorModeValue('white', 'gray.900')}
      borderRadius="2xl"
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      bgGradient="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,26,26,1) 35%)"
      // bgGradient="linear-gradient(90deg, rgba(191,156,156,1) 0%, rgba(175,82,82,1) 35%);"
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-8px)",
      }}
    >
      <Flex direction="column" alignItems="center" mb={6}>
        <Avatar
          size="2xl"
          name={editableUser?.username}
          src={editableUser?.profilePic}
          mb={4}
          boxShadow="lg"
          border="4px solid"
          borderColor="red.600"
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
        />
        <Heading color="white" mb={2}>
          {editableUser?.username}
        </Heading>
        <Text fontSize="lg" color="gray.300" mb={4}>
          @{editableUser?.email}
        </Text>
      </Flex>
      
      <HStack spacing={4} mt={8} justify="center">
        {/* <Button
          size="md"
          colorScheme="red"
          borderRadius="full"
          onClick={onOpen}
          _hover={{ bg: "red.700" }}
          leftIcon={<FaEdit />}
        >
          Edit Profile
        </Button> */}
        <Button
          size="md"
          colorScheme="blue"
          variant="outline"
          borderRadius="full"
          onClick={logout}
          _hover={{ bg: "blue.700", color: "white" }}
          leftIcon={<FaSignOutAlt />}
        >
          Logout
        </Button>
      </HStack>

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
                  value={editableUser?.username}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  value={editableUser?.username}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="dob"
                  value={editableUser?.dob}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>CNIC Number</FormLabel>
                <Input
                  name="cnic"
                  value={editableUser?.cnic}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Contact Number</FormLabel>
                <Input
                  name="contactNumber"
                  value={editableUser?.contactNumber}
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
  <Flex align="center" mb={4}>
    <Icon as={icon} color="red.600" mr={3} boxSize={5} />
    <Box>
      <Text fontWeight="bold" color="gray.300">
        {label}:
      </Text>
      <Text color="gray.300">{value}</Text>
    </Box>
  </Flex>
);

export default Profile;
