import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Input, Select, HStack, Button } from '@chakra-ui/react';
import { LawyerTypeState, SearchState } from '@/atoms/SearchState';

const Search = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(SearchState);
  const [lawyerType, setLawyerType] = useRecoilState(LawyerTypeState);

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
    <Box p={4} boxShadow="md" bg="red.600">
      <HStack spacing={4}>
        <Input
          name="searchQuery"
          background="white"
          placeholder="Search for lawyers..."
          value={inputValues.searchQuery}
          onChange={handleChange}
          focusBorderColor="white"
        />
        <Select
          name="lawyerType"
          width={300}
          placeholder="Select lawyer type"
          value={inputValues.lawyerType}
          onChange={handleChange}
          focusBorderColor="white"
          background="white"
        >
          <option value="All">All</option>
          <option value="Criminal">Criminal</option>
          <option value="Corporate">Corporate</option>
          <option value="Family">Family</option>
          <option value="Immigration">Immigration</option>
          <option value="Intellectual Property">Intellectual Property</option>
          <option value="Labor">Labor</option>
          <option value="Real Estate">Real Estate</option>
        </Select>
        <Button
          bg="white"
          color="red.500"
          onClick={handleSearch}
          width={100}
          padding={5}
        >
          Search
        </Button>
      </HStack>
    </Box>
  );
};

export default Search;
