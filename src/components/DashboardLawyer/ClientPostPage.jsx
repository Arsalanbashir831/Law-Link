import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { BASE_URL } from "@/Constants"; // Adjust to your constants file

const ClientPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Fetch all client posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/client`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if token storage is different
          },
        });
        if (!response.ok) throw new Error("Failed to fetch client posts");
        const data = await response.json();
        setPosts(data);
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
    fetchPosts();
  }, [toast]);

  // Open profile details modal
  const handleProfileDetailsClick = (client) => {
    setSelectedClient(client);
    onOpen();
  };

  return (
    <Box p={6}>
      <Heading mb={4}>Client Posts</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {posts.map((post) => (
          <Box
            key={post._id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="white"
          >
            <VStack align="start">
              <Heading size="md">{post.post_title}</Heading>
              <Text>{post.post_description}</Text>
              <Button
                colorScheme="blue"
                onClick={() => handleProfileDetailsClick(post.user)}
              >
                Profile Details
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>

      {/* Profile Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Client Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedClient ? (
              <VStack align="start">
                <Text><strong>Name:</strong> {selectedClient.username}</Text>
                <Text><strong>Email:</strong> {selectedClient.email}</Text>
                {selectedClient.profile_pic && (
                  <Box>
                    <strong>Profile Picture:</strong>
                    <img src={selectedClient.profile_pic} alt="Profile" />
                  </Box>
                )}
                {selectedClient.degree_pic && (
                  <Box>
                    <strong>Degree Picture:</strong>
                    <img src={selectedClient.degree_pic} alt="Degree" />
                  </Box>
                )}
              </VStack>
            ) : (
              <Text>No client details available</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ClientPostPage;
