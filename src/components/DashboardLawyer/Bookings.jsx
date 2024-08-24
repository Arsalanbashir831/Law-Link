import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Search from "../Search";

const Bookings = () => {
  const userType = "lawyer"; 

  return (
    <Box p={5}>
      <Heading size="lg" mb={4} mt={3}>
        Bookings
      </Heading>
      <Search userType={userType} />
      <Heading size="md" m={5}>
        Current Bookings
      </Heading>
      
    </Box>
  );
};

export default Bookings;
