"use client";

import React, { useEffect, useState, useContext } from "react";
import { Flex, SimpleGrid, Box, Spinner } from "@chakra-ui/react";
import LawyerCard from "@/components/client/LawyerCard";
import NavbarGlobal from "@/components/NavbarGlobal";
import Search from "@/components/Search";
import { BASE_URL } from "@/Constants";
import { AuthContext } from "@/services/AuthProvider";

const Page = () => {
  const [lawyerData, setLawyerData] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState(null); 
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const clientNavData = [
    { id: 1, label: "Find Lawyer", value: "/FindLawyer" },
    { id: 2, label: "Legal GPT", value: "/LegalGpt" },
    { id: 3, label: "Chats", value: "/Chats" },
    { id: 4, label: "Orders", value: "/Orders" },
  ];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}api/v1/lawyer/posts`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
        setLawyerData(data);
        console.log(lawyerData);
        
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchPost();
    }
  }, [token]);

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
            {(filteredPosts && filteredPosts?.length > 0 ? filteredPosts : lawyerData)?.map((data, index) => (
              <LawyerCard key={index} lawyer={data} />
            ))}
          </SimpleGrid>
          // <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          //   {lawyerData?.map((data, index) => (
          //     <LawyerCard key={index} lawyer={data} />
          //   ))}
          // </SimpleGrid>
        )}
      </Box>
    </>
  );
};

export default Page;
