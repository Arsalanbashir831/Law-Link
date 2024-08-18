"use client";
import LawyerCard from "@/components/client/LawyerCard";
import NavbarGlobal from "@/components/NavbarGlobal";
import Search from "@/components/Search";
import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

const page = () => {
  const clientNavData = [
    { id: 1, label: 'Find Lawyer', value: '/FindLawyer' },
    { id: 2, label: 'Legal GPT', value: '/LegalGpt' },
    { id: 3, label: 'Chats', value: '/Chats' },
    { id: 4, label: 'Orders', value: '/Orders' },
  ];

  const lawyers = [
    {
      name: 'John Doe',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specialization: 'Corporate Law',
      services: ['Contract Drafting', 'Business Formation', 'Mergers & Acquisitions'],
      description: 'Experienced corporate lawyer with over 10 years of practice.',
    },
    {
      name: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specialization: 'Family Law',
      services: ['Divorce', 'Child Custody', 'Adoption'],
      description: 'Compassionate family lawyer dedicated to helping families in need.',
    },
  ];

  return (
    <>
      <NavbarGlobal navData={clientNavData} username="Arsalan Bashir" avatarUrl="path-to-avatar.jpg" />
      <Search />
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {lawyers.map((data, index) => (
            <LawyerCard key={index} lawyer={data} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default page;
