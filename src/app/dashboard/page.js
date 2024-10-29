"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

import CreatePost from "@/components/DashboardLawyer/CreatePost";
import PersonalData from "@/components/DashboardLawyer/PersonalData";
import ChatBox from "@/components/DashboardLawyer/Chat";
import Sidebar from "@/components/DashboardLawyer/Sidebar";
import Bookings from "@/components/DashboardLawyer/Bookings";
import AuthPage from "../auth/page";
import CollaborationLawyer from "@/components/DashboardLawyer/CollaborationLawyer";

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState("Personal Data");

  const renderContent = () => {
    switch (selectedTab) {
      case "Create Post":
        return <CreatePost />;
      case "Chat Box":
        return <ChatBox />;
      case "Bookings":
        return <Bookings />;
      case "Collaboration":
        return <CollaborationLawyer />;
        case "Logout":
          return <AuthPage/>
      default:
        return <PersonalData />;
    }
  };

  return (
    <Flex>
      <Sidebar onSelect={setSelectedTab} />
      <Box flex="1" p={5}>
        {renderContent()}
      </Box>
    </Flex>
  );
};

export default DashboardPage;
