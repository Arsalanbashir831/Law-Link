'use client';
import NavbarGlobal from "@/components/NavbarGlobal";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { BASE_URL } from "@/Constants";

const Page = () => {
  const clientNavData = [
    { id: 1, label: "Find Lawyer", value: "/FindLawyer" },
    { id: 2, label: "Legal GPT", value: "/LegalGpt" },
    { id: 3, label: "Chats", value: "/Chats" },
    { id: 4, label: "Bookings", value: "/Bookings" },
    { id: 5, label: "Posts", value: "client_posting" },
  ];

  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ post_title: "", post_description: "", lawType: "" });
  const toast = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts for the client
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/client`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
     console.log(error);
     
    }
  };

  // Open the "Add Post" modal
  const handleAddPostOpen = () => {
    setNewPost({ post_title: "", post_description: "", lawType: "" });
    setIsAddModalOpen(true);
  };

  // Create a new post
  const handleAddPostSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) throw new Error("Failed to create post");
      const createdPost = await response.json();
      setPosts([...posts, createdPost]);
      setIsAddModalOpen(false);
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

  // Open the edit modal and select the post to edit
  const handleEditClick = (post) => {
    setSelectedPost(post);
    setIsEditModalOpen(true);
  };

  // Update an existing post
  const handleEditSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/${selectedPost._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          post_title: selectedPost.post_title,
          post_description: selectedPost.post_description,
        }),
      });
      if (!response.ok) throw new Error("Failed to update post");
      const updatedPost = await response.json();
      setPosts(posts.map((post) => (post._id === updatedPost._id ? updatedPost : post)));
      setIsEditModalOpen(false);
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

  // Open the delete modal and select the post to delete
  const handleDeleteClick = (post) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  // Delete a post
  const handleDeleteSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/${selectedPost._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) throw new Error("Failed to delete post");
      setPosts(posts.filter((post) => post._id !== selectedPost._id));
      setIsDeleteModalOpen(false);
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

  return (
    <>
      <NavbarGlobal
        navData={clientNavData}
        avatarUrl="path-to-avatar.jpg"
        isLanding={false}
      />
      <Box p={6}>
        <Button colorScheme="red" mb={4} onClick={handleAddPostOpen}>
          Add Post
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {posts.map((post) => (
            <Box
              key={post._id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              bg="white"
              position="relative"
            >
              <VStack>
                <Heading size="md" mt={2}>{post.post_title}</Heading>
                <Text>{post.post_description}</Text>
              </VStack>
              <Box position="absolute" top="4" right="4">
                <IconButton
                  icon={<EditIcon />}
                  mr={2}
                  colorScheme="blue"
                  onClick={() => handleEditClick(post)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleDeleteClick(post)}
                />
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Add Post Modal */}
        <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  value={newPost.post_title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, post_title: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Description</FormLabel>
                <Input
                  value={newPost.post_description}
                  onChange={(e) =>
                    setNewPost({ ...newPost, post_description: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Law Type</FormLabel>
                <Select
                  placeholder="Select law type"
                  value={newPost.lawType}
                  onChange={(e) => setNewPost({ ...newPost, lawType: e.target.value })}
                >
                  <option value="General">General</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Civil">Civil</option>
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleAddPostSubmit}>
                Create Post
              </Button>
              <Button variant="ghost" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Edit Post Modal */}
        {isEditModalOpen && (
          <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl mb={4}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    value={selectedPost?.post_title || ''}
                    onChange={(e) =>
                      setSelectedPost({ ...selectedPost, post_title: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Input
                    value={selectedPost?.post_description || ''}
                    onChange={(e) =>
                      setSelectedPost({ ...selectedPost, post_description: e.target.value })
                    }
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={handleEditSubmit}>
                  Save Changes
                </Button>
                <Button variant="ghost" onClick={() => setIsEditModalOpen(false)}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        {/* Delete Post Confirmation Modal */}
        {isDeleteModalOpen && (
          <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delete Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Are you sure you want to delete {selectedPost?.post_title}?
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="red" onClick={handleDeleteSubmit}>
                  Delete
                </Button>
                <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </>
  );
};

export default Page;
