import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
  VStack,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import ServicePostCard from "./ServicePostCard"; // Ensure this path is correct
import { BASE_URL } from "@/Constants";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  const [services, setServices] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}api/v1/lawyer/userPost`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.status === 200) {
          setPosts(data);
        }
      } catch (error) {
        setPosts([]);
      }
    };

    fetchUserPosts();
  }, []);

  const handleAddService = () => {
    if (service) {
      setServices([...services, service]);
      setService("");
    }
  };

  const handleRemoveService = (serviceToRemove) => {
    setServices(services.filter((s) => s !== serviceToRemove));
  };

  const handleSavePost = async () => {
    const token = localStorage.getItem("token");
    const newPost = { post_title: title, post_description: description, lawType: services };

    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts${currentEditIndex!=null?`/${currentEditIndex}`:""}`, {
        method: currentEditIndex !== null ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const savedPost = await response.json();
        if (currentEditIndex !== null) {
          const updatedPosts = posts.map((post, index) =>
            index === currentEditIndex ? savedPost : post
          );
          setPosts(updatedPosts);
        } else {
          setPosts([...posts, savedPost]);
        }
        // Clear the form
        setTitle("");
        setDescription("");
        setServices([]);
        setCurrentEditIndex(null);
        onClose();
      }
    } catch (error) {
      console.error("Failed to save post:", error);
    }
  };

  const handleEditPost = (post) => {
  
    setTitle(post.post_title);
    setDescription(post.post_description);
    setServices(post.lawType);
    setCurrentEditIndex(post._id);
    onOpen();
  };

  const handleDeletePost = async (index) => {
    const token = localStorage.getItem("token");
    const postId = index;

    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setPosts(posts.filter((_, i) => i !== index));
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <Box p={5}>
      <Heading size="xl" mb={5}>
        Create Post
      </Heading>
      <Button onClick={onOpen} colorScheme="red" mb={5}>
        Create Service Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currentEditIndex !== null ? "Edit Service Post" : "Create a New Service Post"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl id="title">
                <FormLabel>Title</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                />
              </FormControl>

              <FormControl id="description">
                <FormLabel>Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter post description"
                />
              </FormControl>

              <FormControl id="service">
                <FormLabel>Services</FormLabel>
                <HStack>
                  <Input
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="Add a service"
                  />
                  <Button onClick={handleAddService} colorScheme="red">
                    Add
                  </Button>
                </HStack>
                <HStack mt={2} spacing={2}>
                  {services.map((service, index) => (
                    <Tag
                      key={index}
                      size="lg"
                      borderRadius="full"
                      variant="solid"
                      colorScheme="red"
                    >
                      <TagLabel>{service}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveService(service)} />
                    </Tag>
                  ))}
                </HStack>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={handleSavePost}>
              {currentEditIndex !== null ? "Save Changes" : "Save Post"}
            </Button>
            <Button variant="ghost" onClick={onClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Heading size="md" mt={5} mb={5}>
        Posts
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {posts.map((post, index) => (
          <ServicePostCard
            key={post._id}
            title={post.post_title}
            description={post.post_description}
            services={post.lawType}
            onEdit={() => handleEditPost(post)}
            onDelete={() => handleDeletePost(post._id)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CreatePost;
