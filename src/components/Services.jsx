"use client";
import React from "react";
import { Box, Grid, GridItem, Heading, Text, Flex, Badge } from "@chakra-ui/react";

const services = [
  {
    area: "AREA 1",
    title: "Commercial Law",
    description:
      "Commercial law covers a broad range of business activities, including the sale of goods, insurance, banking, partnerships, and corporations. Our firm provides expert advice on commercial agreements and ensures compliance with applicable laws.",
  },
  {
    area: "AREA 2",
    title: "Intellectual Property",
    description:
      "Our Intellectual Property services help protect your innovations, brands, and creations. We offer advice on patents, trademarks, copyrights, and trade secrets to safeguard your intellectual assets.",
  },
  {
    area: "AREA 3",
    title: "General Contracts",
    description:
      "We provide comprehensive legal services for drafting, reviewing, and negotiating contracts to protect your interests. Our firm ensures that your contracts are clear, enforceable, and compliant with the law.",
  },
  {
    area: "AREA 4",
    title: "Family Law",
    description:
      "Family law deals with sensitive issues such as divorce, child custody, and adoption. Our experienced lawyers offer compassionate legal support to help you navigate these challenging times with ease.",
  },
];

const OurServices = () => {
  return (
    <Box py={10} px={7} w={"1200px"} mx="auto"> 
    {/* 1200px width to adjutst the sizing */}
     <Flex justify="space-between" alignItems="center" mb={8}>
        <Box>
          <Text fontSize="sm" color="black" fontWeight="bold" textTransform="uppercase">
            Explore All Practice Areas
          </Text>
          <Heading
              as="h2"
              size="2xl"
              color={"red.600"}
              fontWeight="bold"
              lineHeight="1.0"
            >
            Our Specializations
              
            </Heading>
          {/* <Heading fontSize="3xl" color="red.600" mt={2}>
          </Heading> */}
        </Box>
        <Text color="gray.600" maxW="300px" fontSize="sm">
          Our legal experts provide top-notch services in various areas of law. We are committed to delivering quality legal solutions tailored to your needs.
        </Text>
      </Flex>

    
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        {services.map((service, index) => (
          <GridItem
            key={index}
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="md"
            p={5}
            boxShadow="sm"
            bg="white"
            position="relative"
          >
           
            <Badge
              position="absolute"
              top={-3}
              left={4}
              px={3}
              py={1}
              bg="gray.100"
              color="red.600"
              borderRadius="md"
              fontSize="xs"
              textTransform="uppercase"
            >
              {service.area}
            </Badge>

            <Heading fontSize="xl" color="#1a202c" mt={4}>
              {service.title}
            </Heading>

            <Text mt={2} color="gray.600" fontSize="sm">
              {service.description}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
