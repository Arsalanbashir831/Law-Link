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
  Input,
  useColorModeValue,
} from '@chakra-ui/react';

const FiltersModal = ({ isOpen, onClose, userType, applyFilters }) => {
  const [cost, setCost] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [lawyerType, setLawyerType] = useState('');
  const [clientCaseType, setClientCaseType] = useState('');
  const [severity, setSeverity] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

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

  const clientCaseTypes = [
    "Civil",
    "Criminal",
    "Family",
    "Corporate",
    "Immigration",
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
    const filters = {
      lawyerType,
      cost,
      services: selectedServices,
      clientCaseType,
      date: selectedDate,
      time: selectedTime,
      severity,
    };
    applyFilters(filters); 
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter {userType === 'client' ? 'Clients' : 'Lawyers'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="start">
            {userType === 'client' && (
              <>
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
              </>
            )}

            {userType === 'lawyer' && (
              <>
                <Box width="full">
                  <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                    Case Type
                  </Text>
                  <Select
                    placeholder="Select case type"
                    value={clientCaseType}
                    onChange={(e) => setClientCaseType(e.target.value)}
                    focusBorderColor="red.500"
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    borderRadius="md"
                  >
                    {clientCaseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Select>
                </Box>

                <Box width="full">
                  <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                    Severity of Case
                  </Text>
                  <Slider
                    value={severity}
                    onChange={setSeverity}
                    min={0}
                    max={10}
                    step={1}
                    focusThumbOnChange={false}
                    colorScheme="red"
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                      <Box color="red.500">{severity}</Box>
                    </SliderThumb>
                  </Slider>
                </Box>

                <Box width="full">
                  <HStack spacing={4} width="full">
                    <Box width="full">
                      <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                        Date
                      </Text>
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        focusBorderColor="red.500"
                        bg={useColorModeValue('gray.100', 'gray.700')}
                        borderRadius="md"
                      />
                    </Box>
                    <Box width="full">
                      <Text fontWeight="bold" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
                        Time
                      </Text>
                      <Input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        focusBorderColor="red.500"
                        bg={useColorModeValue('gray.100', 'gray.700')}
                        borderRadius="md"
                      />
                    </Box>
                  </HStack>
                </Box>
              </>
            )}
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
