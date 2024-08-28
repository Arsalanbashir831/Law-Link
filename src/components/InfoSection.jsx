"use client";
import React from "react";
import { Box, Flex, Text, HStack, Image } from "@chakra-ui/react";

import Image1 from "../../public/Images/info1.png";
import Image2 from "../../public/Images/info2.png";
import Image3 from "../../public/Images/info3.png";

const InfoSection = () => {
  const infoData = [
    {
      image: Image1, 
      title: "BEST LAW FIRM",
      description: "45 Years of Experience",
    },
    {
      image: Image2, 
      title: "BEST LAW FIRM",
      description: "45 Years of Experience",
    },
    {
      image: Image3,
      title: "BEST LAW FIRM",
      description: "45 Years of Experience",
    },
  ];

  return (
    <Box bg="#f0f4fa" py={10}>
      <Flex justify="center" align="center" gap={20} wrap="wrap">
        {infoData.map((info, index) => (
          <HStack key={index} spacing={6} align="center">
            

            <Box
              borderRadius="full"
              borderWidth="1px"
              borderColor="#d1d5db"
              p={4}
              bg="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxSize="120px"
            >
              <Image src={info.image.src} alt={info.title} boxSize="80px" />
            </Box>

            <Box textAlign="left">
              <Text fontWeight="bold" fontSize="lg" color="#1a202c">
                {info.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {info.description}
              </Text>
            </Box>
          </HStack>
        ))}
      </Flex>
    </Box>
  );
};

export default InfoSection;
