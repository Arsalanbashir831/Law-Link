"use client";
import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";


const Footer = () => {
  const hoverTextColor = 'red.600';
  return (
    <Box bg="gray.900" color="#9d9d9d" py={10}>
      <Flex
     
        mx="auto"
        justify="space-between"
        flexWrap="wrap"
        px={4}
        direction={["column", "column", "row"]}
      >
        <VStack
          align="flex-start"
          spacing={4}
          w={["100%", "50%", "25%"]}
          mb={[8, 8, 0]}
        >
          <HStack
            spacing={2}
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ color: hoverTextColor, transform: 'scale(1.05)' }}
          >
            <GoLaw size="32px" color="red.600" />
            <Text fontWeight="bold" fontSize="2xl" color="red.600">
              LawLink.pk
            </Text>
          </HStack>
          <Text fontSize="sm" lineHeight="taller">
          Hire experienced lawyers to solve your <br /> 
          case with the utmost professionalism and care.
          </Text>
          <HStack spacing={4}>
            <Icon as={FaFacebookF} boxSize={6} color={"#9D152D"} />
            <Icon as={FaGoogle} boxSize={6} />
            <Icon as={FaTwitter} boxSize={6} color={"#9D152D"} />
            <Icon as={FaPinterest} boxSize={6} />
            <Icon as={FaInstagram} boxSize={6} color={"#9D152D"} />
          </HStack>
        </VStack>
        <VStack
          align="flex-start"
          spacing={4}
          w={["100%", "48%", "25%"]}
          mb={[8, 8, 0]}
        >
          <Heading as="h4" size="md" mb={4} color="#9D152D" fontWeight={"500"}>
            LAW SERVICES 
          </Heading>
          <Link href="#" fontSize="sm" _hover={{ color: "white" }} color="#9d9d9d">
            Parenting Issues
          </Link>
          <Link href="#" fontSize="sm" _hover={{ color: "white" }} color="#9d9d9d">
            Property Disputes
          </Link>
          <Link href="#" fontSize="sm" _hover={{ color: "white" }} color="#9d9d9d">
            Crimes & Offences
          </Link>
          <Link href="#" fontSize="sm" _hover={{ color: "white" }} color="#9d9d9d">
            Legal Advice
          </Link>
          <Link href="#" fontSize="sm" _hover={{ color: "white" }} color="#9d9d9d">
            Family Law
          </Link>
        </VStack>

        <VStack
          align="flex-start"
          spacing={4}
          w={["100%", "48%", "25%"]}
          mb={[8, 8, 0]}
        >
          <Heading as="h4" size="md" mb={4} fontWeight={"500"} color={"#9D152D"}>
            CONTACT INFO
          </Heading>
          <Text fontSize="sm" color="#9d9d9d">
            Address: 123 Legal Avenue City, State, 78910
          </Text>
          <Text fontSize="sm" color="#9d9d9d">
          Email: info@legalservices.com
          </Text>
          <Text fontSize="sm" color="#9d9d9d">
          Phone: (123) 456-7890
          </Text>
        </VStack>


        <VStack align="flex-start" spacing={4} w={["100%", "50%", "25%"]}>
          <Heading as="h4" size="md" mb={4} color={"#9D152D"} fontWeight={"500"}>
            OUR LOCATION
          </Heading>
          <Box w="100%" h="200px">
            <iframe
              title="Law Links"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.19982910156251%2C32.15198435497862%2C74.23202514648439%2C32.17465726337644&amp;layer=mapnik&amp;marker=32.16333150870695%2C74.21592712402344"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
            <Link
              href="https://www.openstreetmap.org/?mlat=32.1633&amp;mlon=74.2159#map=15/32.1633/74.2159"
              target="_blank"
              rel="noopener noreferrer"
              color="#9d9d9d"
              fontSize="sm"
              mt={2}
              _hover={{ color: "white" }}
            >
              View larger map
            </Link>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
