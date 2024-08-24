import React, { useState } from "react";
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

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  const [services, setServices] = useState([]);
  const [posts, setPosts] = useState([
    {
      title: "Corporate Law",
      description: "Experienced corporate lawyer with over 10 years of practice.",
      services: ["Contract Drafting", "Business Formation", "Mergers & Acquisitions"],
    },
    {
      title: "Family Law",
      description: "Specialized in handling family law cases with a compassionate approach.",
      services: ["Divorce", "Child Custody", "Alimony"],
    },
    {
      title: "Criminal Law",
      description: "Defending clients in serious criminal charges with a strong legal strategy.",
      services: ["Drug Offenses", "White Collar Crimes", "Fraud"],
    },
    {
      title: "Intellectual Property Law",
      description: "Protecting your intellectual property rights with extensive legal expertise.",
      services: ["Trademark Registration", "Patent Filing", "Copyright Protection"],
    },
  ]); 

  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const handleAddService = () => {
    if (service) {
      setServices([...services, service]);
      setService("");
    }
  };

  const handleRemoveService = (serviceToRemove) => {
    setServices(services.filter((s) => s !== serviceToRemove));
  };

  const handleSavePost = () => {
    const newPost = { title, description, services };

    if (currentEditIndex !== null) {
      // Editing an existing post
      const updatedPosts = posts.map((post, index) =>
        index === currentEditIndex ? newPost : post
      );
      setPosts(updatedPosts);
    } else {
      // Adding a new post
      setPosts([...posts, newPost]);
    }

    // Clear the form
    setTitle("");
    setDescription("");
    setServices([]);
    setCurrentEditIndex(null);
    onClose();
  };

  const handleEditPost = (index) => {
    const post = posts[index];
    setTitle(post.title);
    setDescription(post.description);
    setServices(post.services);
    setCurrentEditIndex(index);
    onOpen();
  };

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
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
          <ModalHeader>{currentEditIndex !== null ? "Edit Service Post" : "Create a New Service Post"}</ModalHeader>
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
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        {posts.map((post, index) => (
          <ServicePostCard
            key={index}
            title={post.title}
            description={post.description}
            services={post.services}
            onEdit={() => handleEditPost(index)}
            onDelete={() => handleDeletePost(index)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CreatePost;
