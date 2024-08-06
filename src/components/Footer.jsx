'use client'
import React from 'react';
import { Box, Grid, GridItem, Text, Link, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} px={6}>
        {/* Quick Links */}
        <GridItem>
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Quick Links
            </Text>
            <Link href="#" _hover={{ textDecoration: 'none', color: 'red.400' }}>
              Home
            </Link>
            <Link href="#" _hover={{ textDecoration: 'none', color: 'red.400' }}>
              Pricing
            </Link>
            <Link href="#" _hover={{ textDecoration: 'none', color: 'red.400' }}>
              FAQs
            </Link>
            <Link href="#" _hover={{ textDecoration: 'none', color: 'red.400' }}>
              Contact Us
            </Link>
          </VStack>
        </GridItem>

        {/* Address */}
        <GridItem>
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Address
            </Text>
            <Text>123 Legal Avenue</Text>
            <Text>Suite 456</Text>
            <Text>City, State, 78910</Text>
            <Text>Email: info@legalservices.com</Text>
            <Text>Phone: (123) 456-7890</Text>
          </VStack>
        </GridItem>

        {/* Social Media Links */}
        <GridItem>
          <VStack align="start" spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Follow Us
            </Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <Icon as={FaFacebook} w={6} h={6} _hover={{ color: 'red.400' }} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaTwitter} w={6} h={6} _hover={{ color: 'red.400' }} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} w={6} h={6} _hover={{ color: 'red.400' }} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: 'red.400' }} />
              </Link>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
