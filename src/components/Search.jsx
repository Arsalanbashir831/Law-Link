import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Input, HStack, Button, IconButton, useDisclosure } from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';
import { LawyerTypeState, SearchState } from '@/atoms/SearchState';
import FiltersModal from './FiltersModal'; 

const Search = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(SearchState);
  const [lawyerType, setLawyerType] = useRecoilState(LawyerTypeState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputValues, setInputValues] = useState({
    searchQuery,
    lawyerType,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    setSearchQuery(inputValues.searchQuery);
    setLawyerType(inputValues.lawyerType);
    console.log(`Searching for ${inputValues.searchQuery} with lawyer type ${inputValues.lawyerType}`);
  };

  return (
    <Box p={6} boxShadow="lg" bg="white" borderRadius="md" mb={6}>
      <HStack spacing={4} width="full">
        <Input
          name="searchQuery"
          placeholder="Search for lawyers..."
          value={inputValues.searchQuery}
          onChange={handleChange}
          focusBorderColor="red.500"
          bg="gray.100"
          borderRadius="md"
        />
        <IconButton
          icon={<FiFilter />}
          aria-label="Filters"
          onClick={onOpen}
          colorScheme="red"
          variant="outline"
          borderRadius="md"
        />
        <Button
          colorScheme="red"
          onClick={handleSearch}
          width={120}
          padding={6}
          borderRadius="md"
        >
          Search
        </Button>
      </HStack>

      <FiltersModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Search;
