import React from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  Button,
  Icon,
  Flex,
  VStack,
  useDisclosure,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserTie, FaGavel, FaPhone } from "react-icons/fa";
import ViewProfileModal from "../ViewProfileModa";

const LawyerCard = ({ lawyer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        bg={useColorModeValue("white", "gray.900")}
        p={8}
        m={5}
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-8px)",
          transition: "0.3s",
        }}
        transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
        bgGradient="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,26,26,1) 35%);"
      >
        <Flex alignItems="start">
          <Box pos="relative">
            <Image
              borderRadius="full"
              boxSize="130px"
              src={lawyer.image}
              alt={lawyer.name}
              objectFit="cover"
              border="4px solid"
              borderColor="red.600"
              mr={8}
              transition="0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            />
          </Box>
          <VStack align="start" spacing={4} flex={1}>
            <HStack justifyContent="space-between" width="full">
              <Text
                fontWeight="extrabold"
                fontSize="3xl"
                color="white"
              >
                {lawyer.name}
              </Text>
            </HStack>
            <HStack spacing={3} alignItems="center">
              <Icon as={FaUserTie} color="red.600" boxSize={6} />
              <Text
                fontSize="lg"
                color="white"
              >
                {lawyer.specialization}
              </Text>
            </HStack>
            <HStack spacing={3} wrap="wrap">
              {lawyer.services.map((service, index) => (
                <Badge
                  key={index}
                  colorScheme="red"
                  borderRadius="full"
                  px={4}
                  py={2}
                  textTransform="uppercase"
                >
                  {service}
                </Badge>
              ))}
            </HStack>
            <HStack spacing={3} alignItems="center">
              <Icon as={FaGavel} color="gray.300" boxSize={5} />
              <Text
                fontSize="md"
                color="gray.300"
              >
                {lawyer.description}
              </Text>
            </HStack>
            <HStack spacing={3} width="full" justifyContent="space-between" mt={4}>
              <Button
                size="md"
                colorScheme="red"
                borderRadius="full"
                onClick={onOpen}
                _hover={{ bg: "red.700" }}
                leftIcon={<Icon as={FaUserTie} />}
              >
                View Profile
              </Button>
              <Button
                size="md"
                colorScheme="blue"
                borderRadius="full"
                _hover={{ bg: "blue.700" }}
                leftIcon={<Icon as={FaPhone} />}
                onClick={() => alert(`Contacting ${lawyer.name}`)}
              >
                Contact Lawyer
              </Button>
            </HStack>
          </VStack>
        </Flex>
      </Box>

      <ViewProfileModal isOpen={isOpen} onClose={onClose} lawyer={lawyer} />
    </>
  );
};

export default LawyerCard;
