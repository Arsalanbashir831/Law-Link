"use client";

import React, { useState } from "react";
import {
  Flex,
  SimpleGrid,
  Box,
  Spinner,
  VStack,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import LawyerCard from "@/components/client/LawyerCard";
import NavbarGlobal from "@/components/NavbarGlobal";
import Search from "@/components/Search";
import { useLawyerContext } from "@/services/LawyerPostProvider";

const Page = () => {
  const { lawyers, loading } = useLawyerContext();
  const [filteredPosts, setFilteredPosts] = useState(null);

  const clientNavData = [
    { id: 1, label: "Find Lawyer", value: "/FindLawyer" },
    { id: 2, label: "Legal GPT", value: "/LegalGpt" },
    { id: 3, label: "Chats", value: "/Chats" },
    { id: 4, label: "Bookings", value: "/Bookings" },
    { id: 5, label: 'Posts', value: 'client_posting' },
  ];

  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 3 });


  const isNoResults =
    filteredPosts !== null && filteredPosts?.length === 0;

  return (
    <>
      <NavbarGlobal
        navData={clientNavData}
        avatarUrl="path-to-avatar.jpg"
        isLanding={false}
      />
      <Box px={6} py={4} bg="gray.50" minHeight="80vh">
        <VStack spacing={4} align="start" mb={4}>
          <Heading size="lg" color="red.600">
            Search Your Legal Advisor through AI
          </Heading>
        </VStack>
        <Box p={2} mb={2}>
          <Search userType={"client"} setFilteredPosts={setFilteredPosts} />
        </Box>

        {loading ? (
          <Flex justify="center" align="center" minHeight="50vh">
            <Spinner size="xl" color="red.500" />
          </Flex>
        ) : (
          <>
            <VStack spacing={2} align="start" mb={4}>
              <Heading size="md" color="red.600">
                Find Your Ideal Lawyer
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Browse through our list of top-rated lawyers and find the right one for your needs.
              </Text>
            </VStack>

            {isNoResults ? (
            
              <Flex justify="center" align="center" minHeight="40vh">
                <Text fontSize="lg" color="gray.500">
                  No results found. Please adjust your search criteria or try a different query.
                </Text>
              </Flex>
            ) : (
            
              <SimpleGrid columns={gridColumns} spacing={4}>
                {(filteredPosts && filteredPosts.length > 0
                  ? filteredPosts
                  : lawyers
                )?.map((data, index) => (
                  <LawyerCard key={index} lawyer={data} />
                ))}
              </SimpleGrid>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Page;
