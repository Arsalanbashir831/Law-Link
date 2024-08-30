import LegalGpt from "@/components/client/LegalGpt";
import ClientNav from "@/components/ClientNav";
import NavbarGlobal from "@/components/NavbarGlobal";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
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

      <LegalGpt />
    </>
  );
};

export default page;
