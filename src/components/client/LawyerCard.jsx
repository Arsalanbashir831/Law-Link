import React, { useState } from 'react';
import { Box, Image, Text, Stack, Badge, HStack, Button, Icon, Flex, VStack, useDisclosure, useColorModeValue } from '@chakra-ui/react';
import { FaUserTie, FaGavel } from 'react-icons/fa';
import ViewProfileModal from '../ViewProfileModa';


const LawyerCard = ({ lawyer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg={useColorModeValue('white', 'gray.800')}
        p={6}
        m={5}
        _hover={{ boxShadow: '2xl', transform: 'translateY(-5px)', transition: '0.3s' }}
        transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      >
        <Flex alignItems="start">
          <Image
            borderRadius="full"
            boxSize="120px"
            src={lawyer.image}
            alt={lawyer.name}
            objectFit="cover"
            border="3px solid"
            borderColor="red.600"
            mr={6}
          />
          <VStack align="start" spacing={3} flex={1}>
            <HStack justifyContent="space-between" width="full">
              <Text fontWeight="bold" fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                {lawyer.name}
              </Text>
              <Button size="sm" colorScheme="red" onClick={onOpen}>
                View Profile
              </Button>
            </HStack>
            <HStack spacing={2} alignItems="center">
              <Icon as={FaUserTie} color="red.600" />
              <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
                {lawyer.specialization}
              </Text>
            </HStack>
            <HStack spacing={2} wrap="wrap">
              {lawyer.services.map((service, index) => (
                <Badge key={index} colorScheme="red" borderRadius="full" px={3} py={1}>
                  {service}
                </Badge>
              ))}
            </HStack>
            <HStack spacing={2} alignItems="center">
              <Icon as={FaGavel} color="gray.500" />
              <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                {lawyer.description}
              </Text>
            </HStack>
          </VStack>
        </Flex>
      </Box>

      <ViewProfileModal isOpen={isOpen} onClose={onClose} lawyer={lawyer} />
    </>
  );
};

export default LawyerCard;
