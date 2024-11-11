import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Avatar,
  Text,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Divider,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import { AuthContext } from "@/services/AuthProvider";
import { BASE_URL } from "@/Constants";

const PersonalData = () => {
  // const { user, setUser } = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState("");
  const [newProfilePic, setNewProfilePic] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const galleryRef = useRef(null);
  const toast = useToast();
const [user , setUser] = useState(null)

useEffect(()=>{
  const fetchUser = async () => { 
    try {
      const response = await fetch(`${BASE_URL}api/v1/users/userProfile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if(response.ok){
        const data = await response.json();
        setUser(data.user);
        setNewUsername(data.user.username);
      }
    }
 catch (error) {
  console.log(error);
  
 }
      
  }
  fetchUser();
},[])
  // console.log(user);
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  const handleProfilePicChange = (e) => {
    setNewProfilePic(e.target.files[0]);
  };

 // Update user profile API call
const updateUserProfile = async () => {
  try {
      // Check if there's a new profile picture file
      let response;
      if (newProfilePic) {
          // If a profile picture is being uploaded, use FormData
          const formData = new FormData();
          formData.append("username", newUsername); // Adding username as a text field
          formData.append("profilePic", newProfilePic); // Adding profilePic as a file

          response = await fetch(`${BASE_URL}api/v1/users/update-profile`, {
              method: "POST",
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: formData, // FormData automatically sets the correct `Content-Type`
          });
      } else {
          // If only username is being updated, use JSON payload
          response = await fetch(`${BASE_URL}api/v1/users/update-profile`, {
              method: "POST",
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ username: newUsername }), // Sending only the username in JSON
          });
      }

      if (!response.ok) throw new Error("Failed to update profile");

      const updatedUser = await response.json();
      setUser(updatedUser.user); // Update user in AuthContext

      toast({
          title: "Profile updated",
          description: "Your profile was updated successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
      });
      onClose(); // Close the modal after updating
  } catch (error) {
      toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
      });
  }
};


  const chartData = [
    { month: "Jan", casesCompleted: 10, casesWon: 8 },
    { month: "Feb", casesCompleted: 12, casesWon: 9 },
    { month: "Mar", casesCompleted: 8, casesWon: 6 },
    { month: "Apr", casesCompleted: 15, casesWon: 12 },
    { month: "May", casesCompleted: 20, casesWon: 18 },
    { month: "Jun", casesCompleted: 18, casesWon: 16 },
  ];

  return (
    <>
      <Box p={6} bg="white" borderRadius="xl" boxShadow="2xl" maxW="6xl" mx="auto" mt={5} mb={10}>
        <VStack align="center" spacing={4} textAlign="center" width="100%">
          <Avatar size="2xl" src={user?.profilePic || "https://bit.ly/dan-abramov"} name={user?.username || "Lawyer's Name"} />
          <Heading size="lg" color="gray.800">{user?.username || "Lawyer's Name"}</Heading>
          <Text fontSize="md" color="gray.600">{user?.lawyerType || "Lawyer Type"}</Text>
          <Button colorScheme="blue" mt={4} onClick={onOpen}>Edit Profile</Button>
          

          <Divider my={8} borderColor="gray.300" />

          {/* Statistical Bar Chart */}
          <Box w="full" h="400px" mt={8}>
            <Heading size="md" color="red.700" mb={4} textAlign="center">Cases Completed and Cases Won (Monthly)</Heading>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="casesCompleted" fill="#8884d8" name="Cases Completed" />
                <Bar dataKey="casesWon" fill="#82ca9d" name="Cases Won" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </VStack>

        {/* Edit Profile Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="username" mb={4}>
                <FormLabel>Username</FormLabel>
                <Input placeholder="New username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
              </FormControl>

              {/* <FormControl id="profilePic" mb={4}>
                <FormLabel>Profile Picture</FormLabel>
                <Input type="file" accept="image/*" onChange={handleProfilePicChange} />
              </FormControl> */}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={updateUserProfile}>Save Changes</Button>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default PersonalData;
