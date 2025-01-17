"use client";
import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const FootNote = () => {
  return (
    <Box bg="black" color="#9d9d9d" py={4}>
      <Text textAlign="center" fontSize="sm">
        COPYRIGHT © 2022 LAW LINKS ALL RIGHTS RESERVED | PROUDLY
        DESIGNED BY{" "}
        <Link href="#" color="maroon">
          HATIM
        </Link>
      </Text>
    </Box>
  );
};

export default FootNote;