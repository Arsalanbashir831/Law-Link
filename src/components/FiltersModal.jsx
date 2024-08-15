import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  HStack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  Select,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

const FiltersModal = ({ isOpen, onClose }) => {
  const [cost, setCost] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [lawyerType, setLawyerType] = useState('');

  const servicesOptions = [
    "Contract Drafting",
    "Business Formation",
    "Mergers & Acquisitions",
    "Divorce",
    "Child Custody",
    "Adoption",
    "Patent Filing",
    "Trademark Registration",
  ];

  const handleCostChange = (value) => {
    setCost(value);
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((service) => service !== value)
    );
  };

  const handleApplyFilters = () => {
    console.log(`Lawyer type: ${lawyerType}, cost: ${cost}, services: ${selectedServices.join(", ")}`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter Lawyers</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="start">
            <Box width="full">
              <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                Lawyer Type
              </Text>
              <Select
                placeholder="Select lawyer type"
                value={lawyerType}
                onChange={(e) => setLawyerType(e.target.value)}
                focusBorderColor="red.500"
                bg={useColorModeValue('gray.100', 'gray.700')}
                borderRadius="md"
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
            </Box>

            <Box width="full">
              <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                Cost (Max)
              </Text>
              <Slider
                value={cost}
                onChange={handleCostChange}
                min={0}
                max={5000}
                step={100}
                focusThumbOnChange={false}
                colorScheme="red"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="red.500">${cost}</Box>
                </SliderThumb>
              </Slider>
            </Box>

            <Box width="full">
              <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                Services
              </Text>
              <VStack spacing={2} align="start">
                {servicesOptions.map((service) => (
                  <Checkbox
                    key={service}
                    value={service}
                    onChange={handleServiceChange}
                    isChecked={selectedServices.includes(service)}
                  >
                    {service}
                  </Checkbox>
                ))}
              </VStack>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" onClick={handleApplyFilters} mr={3}>
            Apply Filters
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FiltersModal;
