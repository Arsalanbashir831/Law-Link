import React from 'react';
import { Box, Image, Text, Stack, Badge, HStack, Button } from '@chakra-ui/react';

const LawyerCard = ({ lawyer }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white" m={5}
      p={4}
      _hover={{ boxShadow: 'lg' }}
    >
      <HStack spacing={4}>
        <Image
          borderRadius="full"
          boxSize="100px"
          src={lawyer.image}
          alt={lawyer.name}
          objectFit="cover"
        />
        <Stack spacing={2} flex={1}>
          <Text fontWeight="bold" fontSize="xl" color="red.600">
            {lawyer.name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {lawyer.specialization}
          </Text>
          <HStack spacing={2} wrap="wrap">
            {lawyer.services.map((service, index) => (
              <Badge key={index} colorScheme="red" borderRadius="full" px={2} py={1}>
                {service}
              </Badge>
            ))}
          </HStack>
          <Text fontSize="sm" color="gray.600">
            {lawyer.description}
          </Text>
          <Button colorScheme="red" size="sm" mt={2} alignSelf="start">
            View Profile
          </Button>
        </Stack>
      </HStack>
    </Box>
  );
};

export default LawyerCard;
