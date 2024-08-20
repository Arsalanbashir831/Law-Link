import React from 'react';
import { Box, Stack, Text, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaUser, FaKey } from 'react-icons/fa';

const Sidebar = ({ selectedOption, setSelectedOption }) => {
  return (
    <Box
      w="250px"
      h="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      p={6}
      boxShadow="xl"
      position="fixed"
    >
      <Stack spacing={6}>
        <SidebarItem
          label="Profile"
          icon={FaUser}
          selected={selectedOption === "profile"}
          onClick={() => setSelectedOption("profile")}
        />
        <SidebarItem
          label="Change Password"
          icon={FaKey}
          selected={selectedOption === "password"}
          onClick={() => setSelectedOption("password")}
        />
      </Stack>
    </Box>
  );
};

const SidebarItem = ({ label, icon, selected, onClick }) => (
  <Flex
    align="center"
    p={3}
    bg={selected ? 'red.600' : 'transparent'}
    color={selected ? 'white' : 'gray.600'}
    borderRadius="lg"
    cursor="pointer"
    _hover={{ bg: selected ? 'red.700' : 'gray.700' }}
    onClick={onClick}
  >
    <Icon as={icon} mr={3} />
    <Text fontWeight="bold">{label}</Text>
  </Flex>
);

export default Sidebar;
