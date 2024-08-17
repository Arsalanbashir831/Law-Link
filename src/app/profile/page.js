"use client";
import NavbarGlobal from "@/components/NavbarGlobal";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import ChangePassword from "@/components/ChangePassword";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

const ProfilePage = () => {
  const [selectedOption, setSelectedOption] = useState("profile");

  const clientNavData = [
    { id: 1, label: 'Find Lawyer', value: '/FindLawyer' },
    { id: 2, label: 'Legal GPT', value: '/LegalGpt' },
    { id: 3, label: 'Chats', value: '/Chats' },
    { id: 4, label: 'Orders', value: '/Orders' },
  ];

  const user = {
    name: "Arsalan Bashir",
    username: "arsalan.bashir",
    dob: "1990-05-15",
    cnic: "12345-6789012-3",
    contactNumber: "+92 300 1234567",
    avatarUrl: "https://example.com/path-to-avatar.jpg",
  };

  return (
    <>
      <NavbarGlobal
        navData={clientNavData}
        username="Arsalan Bashir"
        avatarUrl="path-to-avatar.jpg"
      />
      <Flex>
        <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <Box flex="1" p={6}>
          {selectedOption === "profile" ? (
            <Profile user={user} />
          ) : (
            <ChangePassword />
          )}
        </Box>
      </Flex>
    </>
  );
};

export default ProfilePage;
