"use client";
import ChatBox from "@/components/ChatBox";
import ChatSidebar from "@/components/ChatSidebar";
import ClientNav from "@/components/ClientNav";
import NavbarGlobal from "@/components/NavbarGlobal";
import { useChatContext } from "@/services/ChatProvider";
import { Flex, Box } from "@chakra-ui/react";
import React from "react";

const Page = () => {
  const clientNavData = [
    { id: 1, label: "Find Lawyer", value: "/FindLawyer" },
    { id: 2, label: "Legal GPT", value: "/LegalGpt" },
    { id: 3, label: "Chats", value: "/Chats" },
    { id: 4, label: "Bookings", value: "/Bookings" },
  ];
  const { selectedLawyer, setSelectedLawyer } = useChatContext();
  return (
    <>
      <NavbarGlobal
        navData={clientNavData}
        avatarUrl="path-to-avatar.jpg"
        isLanding={false}
      />
      <Flex>
        <ChatSidebar
          selectedLawyer={selectedLawyer}
          setSelectedLawyer={setSelectedLawyer}
        />
        <Box flex="1" height="calc(100vh - 64px)">
          <ChatBox selectedLawyer={selectedLawyer} />
        </Box>
      </Flex>
    </>
  );
};

export default Page;
