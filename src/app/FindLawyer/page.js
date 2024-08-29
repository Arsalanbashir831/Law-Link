"use client";

import React, { useContext, useState } from "react";
import { Flex, SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import LawyerCard from "@/components/client/LawyerCard";
import NavbarGlobal from "@/components/NavbarGlobal";
import Search from "@/components/Search";
import { useLawyerContext } from "@/services/LawyerPostProvider";


const Page = () => {
  const { lawyers, loading } = useLawyerContext();  
  console.log(lawyers);
  
  const [filteredPosts, setFilteredPosts] = useState(null);

  const clientNavData = [
    { id: 1, label: "Find Lawyer", value: "/FindLawyer" },
    { id: 2, label: "Legal GPT", value: "/LegalGpt" },
    { id: 3, label: "Chats", value: "/Chats" },
    { id: 4, label: "Bookings", value: "/Bookings" },
  ];

  return (
    <>
      <NavbarGlobal
        navData={clientNavData}
        username="Arsalan Bashir"
        avatarUrl="path-to-avatar.jpg"
        isLanding={false}
      />
      <Search userType={"client"} setFilteredPosts={setFilteredPosts} />{" "}
  
      <Box p={4}>
        {loading ? (
          <Flex justify="center" align="center" minHeight="50vh">
            <Spinner size="xl" color="red.500" />
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {(filteredPosts && filteredPosts?.length > 0 ? filteredPosts : lawyers)?.map((data, index) => (
              <LawyerCard key={index} lawyer={data} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};

export default Page;
