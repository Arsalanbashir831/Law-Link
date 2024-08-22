import {
    Box,
    Text,
    HStack,
    Tag,
    Button,
    Icon,
    VStack,
    Divider,
  } from "@chakra-ui/react";
  import { FaUserTie, FaGavel, FaEdit, FaTrashAlt } from "react-icons/fa";
  
  const ServicePostCard = ({ title, description, services, onEdit, onDelete }) => {
    return (
      <Box
        bg="red.800"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        color="white"
        maxW="lg"
      >
        {/* Header Section */}
        <HStack spacing={2} mb={4} alignItems="center">
          <Icon as={FaUserTie} boxSize={6} color="red.300" />
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
        </HStack>
  
        <Divider borderColor="red.700" mb={4} />
  
        {/* Services Tags */}
        <HStack spacing={2} mb={4} wrap="wrap">
          {services.map((service, index) => (
            <Tag
              key={index}
              size="md"
              variant="subtle"
              bg="red.100"
              color="black"
              borderRadius="full"
              px={3}
              py={1}
            >
              {service}
            </Tag>
          ))}
        </HStack>
  
        {/* Description */}
        <HStack mb={4} alignItems="start">
          <Icon as={FaGavel} color="red.300" />
          <Text fontSize="md" lineHeight="1.5">
            {description}
          </Text>
        </HStack>
  
        <Divider borderColor="red.700" mb={4} />
  
        {/* Action Buttons */}
        <HStack justifyContent="flex-end" spacing={3}>
          <Button
            leftIcon={<FaEdit />}
            colorScheme="red"
            variant="outline"
            size="sm"
            onClick={onEdit}
            _hover={{ bg: "red.700", color: "white" }}
          >
            Edit
          </Button>
          <Button
            leftIcon={<FaTrashAlt />}
            colorScheme="blue"
            variant="solid"
            size="sm"
            onClick={onDelete}
            _hover={{ bg: "blue.600" }}
          >
            Delete
          </Button>
        </HStack>
      </Box>
    );
  };
  
  export default ServicePostCard;
  