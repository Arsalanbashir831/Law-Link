"use client";

import React, { useState, useContext } from "react";
import {
  Box,
  Input,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";
import { AuthContext } from "@/services/AuthProvider";
import { BASE_URL } from "@/Constants";
import FiltersModal from "./FiltersModal";

const Search = ({ userType, setFilteredPosts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { token } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValues, setInputValues] = useState({
    searchQuery: "",
  });

  // Move useColorModeValue hook calls to the top level
  const bg = useColorModeValue("gray.50", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");
  const iconColor = useColorModeValue("gray.500", "gray.300");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    const payload = {
      prompt: inputValues.searchQuery,
    };

    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/aiSearchPost`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Search results:", data);
      setFilteredPosts(data.posts); // Update filtered posts in Page component
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const handleApplyFilters = async (filters) => {
    const payload = {
      lawType: filters.services,
    };

    try {
      const response = await fetch(`${BASE_URL}api/v1/lawyer/aiSearchPost`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Filter results:", data);
      setFilteredPosts(data.posts); 
    } catch (error) {
      console.error("Error during filter:", error);
    }
  };

  const handleClear = () => {
    setFilteredPosts(null); 
    setInputValues({
      searchQuery: "",
    });
  };

  return (
    <Box p={6} boxShadow="lg" bg={bg} borderRadius="lg" mb={6}>
      <HStack spacing={4} width="full">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IconButton
              ml={6}
              icon={<FiSearch />}
              aria-label="Search icon"
              variant="unstyled"
              fontSize="lg"
              color={iconColor}
              pointerEvents="none"
            />
          </InputLeftElement>
          <Input
            name="searchQuery"
            placeholder={`Search for ${userType === "lawyer" ? "lawyers" : "clients"}, services...`}
            value={inputValues.searchQuery}
            onChange={handleChange}
            focusBorderColor="red.500"
            bg={inputBg}
            borderRadius="full"
            pl={10}
            pr={10}
            fontSize="lg"
            _placeholder={{ color: placeholderColor }}
          />
          <InputRightElement>
            {inputValues.searchQuery && (
              <IconButton
                icon={<FiX />}
                aria-label="Clear search"
                variant="unstyled"
                onClick={handleClear}
                color={iconColor}
              />
            )}
          </InputRightElement>
        </InputGroup>
        <IconButton
          icon={<FiFilter />}
          aria-label="Filters"
          onClick={onOpen}
          colorScheme="red"
          variant="solid"
          borderRadius="full"
          fontSize="lg"
        />
        <Button colorScheme="red" onClick={handleSearch} borderRadius="full" px={8} fontSize="lg">
          Search
        </Button>
      </HStack>

      <FiltersModal
        isOpen={isOpen}
        onClose={onClose}
        userType={userType}
        applyFilters={handleApplyFilters} 
      />
    </Box>
  );
};

export default Search;
