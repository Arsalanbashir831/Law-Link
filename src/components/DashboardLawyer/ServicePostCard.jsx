import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  Tag,
  Button,
  VStack,
  Divider,
  Flex,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { FaDollarSign, FaEdit, FaTrashAlt, FaEllipsisH } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const ServicePostCard = ({
  title,
  description,
  services,
  price,
  experienceLevel,
  postedTime,
  onEdit,
  onDelete,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Box
      bg="white"
      p={6}
      boxShadow="lg"
      border="1px solid gray.100"
      width={{ base: "100%", sm: "90%", md: "80%", lg: "100%" }}
      mx="auto"
      mb={6}
      transition="all 0.3s"
      _hover={{ boxShadow: "2xl", transform: "translateY(-5px)" }}
      borderRadius={30}
      color="black"
    >

      <VStack align="start" spacing={1} mb={3}>
        <Text fontSize="xl" fontWeight="bold" color="black">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Fixed-price - Posted {postedTime}
        </Text>
      </VStack>


      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <HStack>
            <FaDollarSign color="black" />
            <Text fontSize="sm" color="black">
              {price}
            </Text>
          </HStack>
          <HStack>
            <BsFillBriefcaseFill color="black" />
            <Text fontSize="sm" color="black">
              {experienceLevel}
            </Text>
          </HStack>
        </HStack>
      </Flex>
      <Box mb={4}>
        <Collapse startingHeight={45} in={showFullDescription}>
          <Text fontSize="sm" color="gray.700">
            {description}
          </Text>
        </Collapse>
        <IconButton
          size="md"
          variant="ghost"
          colorScheme="red"
          icon={<FaEllipsisH />}
          aria-label="Toggle Description"
          onClick={handleToggleDescription}
          display={description.length > 100 ? "inline-flex" : "none"}
        />
      </Box>

      <HStack spacing={2} mb={4} wrap="wrap">
        {services.map((service, index) => (
          <Tag
            key={index}
            size="md"
            variant="solid"
            colorScheme="red"
            borderRadius="full"
            px={3}
            py={1}
          >
            {service}
          </Tag>
        ))}
      </HStack>

      <Divider borderColor="gray.300" mb={4} />

      <HStack justifyContent="flex-end" spacing={3}>
        <Button
          leftIcon={<FaEdit />}
          colorScheme="green"
          variant="solid"
          size="sm"
          width="100px"
          alignSelf="center"
          fontWeight="medium"
          onClick={onEdit}
          _hover={{ bg: "green.600", color: "white" }}
        >
          Edit
        </Button>
        <Button
          leftIcon={<FaTrashAlt />}
          colorScheme="red"
          variant="solid"
          size="sm"
          onClick={onDelete}
          width="100px"
          _hover={{ bg: "red.600" }}
        >
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default ServicePostCard;
