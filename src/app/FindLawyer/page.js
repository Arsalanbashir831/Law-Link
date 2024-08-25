"use client";
import LawyerCard from "@/components/client/LawyerCard";
import NavbarGlobal from "@/components/NavbarGlobal";
import Search from "@/components/Search";
import { BASE_URL } from "@/Constants";
import { Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Page = () => {
  const [lawyerData, setLawyerData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        const token = localStorage.getItem("userToken");
        const response = await fetch(`${BASE_URL}/api/v1/lawyer/posts`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          setLawyerData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);
  console.log(lawyerData);

  return (
    <>
      <NavbarGlobal navData={clientNavData} username="Arsalan Bashir" avatarUrl="path-to-avatar.jpg" isLanding={false} />
      <Search  userType={'client'}/>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {lawyerData.map((data, index) => (
            <LawyerCard key={index} lawyer={data} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Page;
