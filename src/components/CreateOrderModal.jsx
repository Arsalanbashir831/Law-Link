"use client";
import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Checkbox,
  useColorModeValue,
  Icon,
  useToast,
} from "@chakra-ui/react";
import {
  FaUser,
  FaCalendarAlt,
  FaFileAlt,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";
import { BASE_URL } from "@/Constants";
import { AuthContext } from "@/services/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";


const CreateOrderModal = ({ isOpen, onClose, selectedLawyer }) => {
  const { token } = useContext(AuthContext);
  const toast = useToast();
  const router = useRouter()
  const [formData, setFormData] = useState({
    lawyerName: "",
    location: "",
    amount: "",
    bookingDate: "",
    bookingTime: "",
    services: [],
  });

  const servicesList = [
    "Consultation",
    "Court Representation",
    "Legal Documentation",
    "Contract Review",
    "Property Dispute",
  ]; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (service) => {
    setFormData((prevState) => {
      if (prevState.services.includes(service)) {
        return {
          ...prevState,
          services: prevState.services.filter((s) => s !== service),
        };
      } else {
        return { ...prevState, services: [...prevState.services, service] };
      }
    });
  };

  const handleSubmit = async () => {
    if ( !formData.location || !formData.amount || !formData.bookingDate || !formData.bookingTime || formData.services.length === 0) {
      toast({
        title: "Please fill in all fields and select at least one service.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const bookingData = {
      lawyerId: selectedLawyer?.user?._id,
      contractPrice: parseFloat(formData.amount),
      dateOfAppointment: formData.bookingDate,
      timeOfAppointment: formData.bookingTime,
      location: formData.location,
      services: formData.services,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}api/v1/bookings/addBookings`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast({
          title: "Booking created successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
        router.push('/Bookings')
      } else {
        toast({
          title: "Error creating booking.",
          description: res.data.message || "Something went wrong.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error :', error.response?.data || error.message);

      toast({
        title: "Error creating booking.",
        description: error.response?.data?.message || "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>

            <FormControl id="location" isRequired>
              <FormLabel>
                <Icon as={FaFileAlt} mr={2} />
                Location
              </FormLabel>
              <Input
                placeholder="Enter Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                focusBorderColor="red.500"
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="md"
              />
            </FormControl>

            <FormControl id="amount" isRequired>
              <FormLabel>
                <Icon as={FaDollarSign} mr={2} />
                Amount
              </FormLabel>
              <Input
                type="number"
                placeholder="Enter amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                focusBorderColor="red.500"
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="md"
              />
            </FormControl>

            <HStack spacing={4} width="full">
              <FormControl id="bookingDate" isRequired>
                <FormLabel>
                  <Icon as={FaCalendarAlt} mr={2} />
                  Booking Date
                </FormLabel>
                <Input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleInputChange}
                  focusBorderColor="red.500"
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="md"
                />
              </FormControl>

              <FormControl id="bookingTime" isRequired>
                <FormLabel>
                  <Icon as={FaClock} mr={2} />
                  Booking Time
                </FormLabel>
                <Input
                  type="time"
                  name="bookingTime"
                  value={formData.bookingTime}
                  onChange={handleInputChange}
                  focusBorderColor="red.500"
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="md"
                />
              </FormControl>
            </HStack>

            <FormControl id="services" isRequired>
              <FormLabel>Services</FormLabel>
              <VStack align="start">
                {servicesList.map((service) => (
                  <Checkbox
                    key={service}
                    value={service}
                    isChecked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  >
                    {service}
                  </Checkbox>
                ))}
              </VStack>
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateOrderModal;
