// src/components/LawyerList.js

import React from "react";
import { SimpleGrid, Box, Text, Spinner, Flex } from "@chakra-ui/react";
import LawyerCard from "./LawyerCard";

const LawyerList = ({ lawyers, loading, onCollaborate }) => {
  if (loading) {
    return (
      <Flex justify="center" align="center" minHeight="50vh">
        <Spinner size="xl" color="red.500" />
      </Flex>
    );
  }

  if (lawyers.length === 0) {
    return (
      <Flex justify="center" align="center" minHeight="50vh">
        <Text fontSize="lg" color="gray.500">
          No lawyers found.
        </Text>
      </Flex>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} px={4} py={6}>
      {lawyers.map((lawyer) => (
        <LawyerCard key={lawyer._id} lawyer={lawyer} onCollaborate={onCollaborate} />
      ))}
    </SimpleGrid>
  );
};

export default LawyerList;
