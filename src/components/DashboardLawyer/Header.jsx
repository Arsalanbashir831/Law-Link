
import React from "react";
import { Box, Heading, Flex, Icon, Text } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa"; 

const Header = ({ title, onBack }) => {
  return (
    <Box
      bg="red.600"
      color="white"
      p={4}
      boxShadow="md"
      borderBottom="2px solid"
      borderColor="red.700"
    //   position="sticky"
      top="0"
    //   zIndex="1000"
      mb={5}
    >
      <Flex alignItems="center" justifyContent="space-between">
    
        {onBack && (
          <Icon
            as={FaChevronLeft}
            boxSize={6}
            cursor="pointer"
            onClick={onBack}
            _hover={{ color: "red.300" }}
          />
        )}


        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          textAlign="center"
          flex="1"
          mx={onBack ? 4 : 0} 
        >
          {title}
        </Heading>

        <Box width="40px" />
      </Flex>
    </Box>
  );
};

export default Header;
