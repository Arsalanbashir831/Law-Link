import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
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
  useColorModeValue
} from '@chakra-ui/react';
import { FiFilter, FiSearch, FiX } from 'react-icons/fi';
import { LawyerTypeState, SearchState } from '@/atoms/SearchState';
import FiltersModal from './FiltersModal'; 

const Search = ({ userType }) => {
  const [searchQuery, setSearchQuery] = useRecoilState(SearchState);
  const [lawyerType, setLawyerType] = useRecoilState(LawyerTypeState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputValues, setInputValues] = useState({
    searchQuery,
    lawyerType,
  });

  const searchIconColor = useColorModeValue("gray.500", "gray.300");
  const inputBgColor = useColorModeValue("white", "gray.700");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");
  const clearIconColor = useColorModeValue("gray.500", "gray.300");
  const boxBgColor = useColorModeValue("gray.50", "gray.800");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    setSearchQuery(inputValues.searchQuery);
    setLawyerType(inputValues.lawyerType);
    console.log(`Searching for ${inputValues.searchQuery} with lawyer type ${inputValues.lawyerType}`);
  };

  const handleClear = () => {
    setInputValues({
      searchQuery: '',
      lawyerType: '',
    });
  };

  return (
    <Box p={6} boxShadow="lg" bg={boxBgColor} borderRadius="lg" mb={6}>
      <HStack spacing={4} width="full">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IconButton
              ml={6}
              icon={<FiSearch />}
              aria-label="Search icon"
              variant="unstyled"
              fontSize="lg"
              color={searchIconColor}
              pointerEvents="none"
            />
          </InputLeftElement>
          <Input
            name="searchQuery"
            placeholder={`Search for ${userType === 'lawyer' ? 'lawyers' : 'clients'}, services...`}
            value={inputValues.searchQuery}
            onChange={handleChange}
            focusBorderColor="red.500"
            bg={inputBgColor}
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
                color={clearIconColor}
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
        <Button
          colorScheme="red"
          onClick={handleSearch}
          borderRadius="full"
          px={8}
          fontSize="lg"
        >
          Search
        </Button>
      </HStack>

      <FiltersModal isOpen={isOpen} onClose={onClose} userType={userType} />
    </Box>
  );
};

export default Search;
