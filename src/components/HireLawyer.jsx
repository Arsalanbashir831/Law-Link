"use client";
import { Box, Flex, Image, Text, Button, VStack, HStack, Badge } from '@chakra-ui/react';
import React from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const HireLawyer = () => {
  return (
    <Box py={12} px={{ base: 6, md: 16 }} bg="white" maxW="100%" mx="auto">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" w="100%" mx="auto">

        <Box flex="1" maxW="lg" pr={{ md: 8 }}>
          <VStack align="start" spacing={4}>
            <Text fontSize="sm" color="orange.500" fontWeight="bold" textTransform="uppercase">
              Explore All Practice Areas
            </Text>
            <Text fontSize="3xl" fontWeight="bold" color="#1a202c">
              Why Us
            </Text>
            <Text fontSize="md" color="gray.600">
              Mauris dictum massa non consectetur volutpat. Sed id accumsan risus, eget sagittis lectus. Donec ut est mauris. Etiam et libero tellus. Suspendisse ac dictum massa, ac viverra lorem.
            </Text>
    
            <Flex wrap="wrap" mt={4} spacing={3}>
              <VStack align="start" spacing={2} mr={8}>
                <HStack>
                  <CheckCircleIcon color="orange.500" />
                  <Text>Expertise</Text>
                </HStack>
                <HStack>
                  <CheckCircleIcon color="orange.500" />
                  <Text>Results-Oriented</Text>
                </HStack>
              </VStack>
              <VStack align="start" spacing={2}>
                <HStack>
                  <CheckCircleIcon color="orange.500" />
                  <Text>Client-Centric Approach</Text>
                </HStack>
                <HStack>
                  <CheckCircleIcon color="orange.500" />
                  <Text>Personalized Service</Text>
                </HStack>
              </VStack>
            </Flex>
           
            <Flex mt={6} gap={4}>
              <Button bg="red.600" color="white" _hover={{ bg: "red.700" }} size="md">
                Practicing Area
              </Button>
              <Button colorScheme="blackAlpha" variant="link" fontWeight="bold">
                Book an appointment
              </Button>
            </Flex>
          </VStack>
        </Box>

   
        <Box flex="1" position="relative" maxW="lg" mt={{ base: 8, md: 0 }}>

          <Box
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            p={4}
            border="1px solid"
            borderColor="gray.200"
            maxW="400px"
            mx="auto"
            pt={10}
          >
    
            <Badge
              position="absolute"
              top={4}
              left={4}
              bg="orange.300"
              color="black"
              fontSize="sm"
              px={3}
              py={1}
              borderRadius="md"
            >
              99% Rate of success
            </Badge>
            <Image
              src="https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lawyer"
              height="400px"
              objectFit="cover"
              borderRadius="md"
            />
        
            <Box
              position="absolute"
              bottom={-4}
              left="50%"
              transform="translateX(-50%)"
              bg="blue.900"
              color="white"
              px={6}
              py={2}
              borderRadius="lg"
              fontWeight="bold"
              fontSize="lg"
              boxShadow="md"
            >
              15 Years of experience
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HireLawyer;
