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
  useToast,
  VStack,
  useDisclosure,
  SimpleGrid,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import ServicePostCard from "./ServicePostCard";
import { BASE_URL } from "@/Constants";
import Header from "./Header";
import { FaPlus } from "react-icons/fa";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [services, setServices] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

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
      } finally {
        setLoading(false);
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
    const newPost = {
      post_title: title,
      post_description: description,
      lawType: services,
    };

    try {
      const response = await fetch(
        `${BASE_URL}api/v1/lawyer/posts${
          currentEditIndex != null ? `/${currentEditIndex}` : ""
        }`,
        {
          method: currentEditIndex !== null ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newPost),
        }
      );

      if (response.ok) {
        const savedPost = await response.json();
        if (currentEditIndex !== null) {
          const updatedPosts = posts.map((post) =>
            post._id === currentEditIndex ? savedPost : post
          );
          setPosts(updatedPosts);
          toast({
            title: "Post updated successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          setPosts([...posts, savedPost]);
          toast({
            title: "Post created successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
        setTitle("");
        setDescription("");
        setServices([]);
        setCurrentEditIndex(null);
        onClose();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save post. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
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

  const handleDeletePost = async (postId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== postId));
        toast({
          title: "Post deleted successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <Box p={3}>
      <Header title="Create Post" />
      <Button onClick={onOpen} colorScheme="red" mb={5} leftIcon={<FaPlus />}>
        Create Service Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currentEditIndex !== null
              ? "Edit Service Post"
              : "Create a New Service Post"}
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

              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                />
              </FormControl>

              <FormControl id="experienceLevel">
                <FormLabel>Experience Level</FormLabel>
                <Input
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  placeholder="Enter experience level (Beginner, Intermediate, Advanced Practitioner)"
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
                <HStack mt={2} spacing={2} wrap="wrap">
                  {services.map((service, index) => (
                    <Tag
                      key={index}
                      size="lg"
                      borderRadius="full"
                      variant="solid"
                      colorScheme="red"
                    >
                      <TagLabel>{service}</TagLabel>
                      <TagCloseButton
                        onClick={() => handleRemoveService(service)}
                      />
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

      {loading ? (
        <Flex justify="center" align="center" height="200px">
          <Spinner size="xl" color="red.500" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {posts.map((post) => (
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
      )}
    </Box>
  );
};

export default CreatePost;
