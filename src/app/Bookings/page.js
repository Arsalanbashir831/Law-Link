"use client";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Spinner,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ClientNav from "@/components/ClientNav";
import BookingCard from "@/components/BookingCard";
import axios from "axios";
import { BASE_URL } from "@/Constants";
import { AuthContext } from "@/services/AuthProvider";
import NavbarGlobal from "@/components/NavbarGlobal";

const OrderPage = () => {

  const NavData = [
    { id: 1, label: 'Find Lawyer', value: 'FindLawyer' },
    { id: 2, label: 'Legal GPT', value: 'LegalGpt' },
    { id: 3, label: 'Chats', value: 'Chats' },
    { id: 4, label: 'Bookings', value: 'Bookings' },
  ];


  const { token } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}api/v1/bookings/getClientBookings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setBookings(response.data);
        console.log("Bookings:", response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false); 
      }
    };

    if (token) fetchBookings();
  }, [token]);

  return (
    <>
      <NavbarGlobal
        navData={NavData}
        username="Arsalan Bashir"
        avatarUrl="path-to-avatar.jpg"
      />
      <Box p={8} maxW="1100px" mx="auto">
        <Heading as="h2" size="lg" mb={6} textAlign="center" color={useColorModeValue('gray.700', 'white')}>
          Your Bookings
        </Heading>

        {loading ? (
          <Center py={10}>
            <Spinner size="xl" color="red.500" />
          </Center>
        ) : bookings.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {bookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={{
                  lawyerId: booking.lawyer._id,
                  profile: booking.lawyer.profilePic,
                  lawyerName: booking.lawyer.username,
                  description: booking.lawyer.email,
                  bookingDate: booking.dateOfAppointment,
                  amount: booking.contractPrice,
                  location: "San Francisco, CA",
                  tags: ["Consultation", "Court Representation"], 
                }}
                buttonType="Review"
              />
            ))}
          </SimpleGrid>
        ) : (
          <Center py={10}>
            <Text fontSize="lg" color="gray.500">
              No bookings available.
            </Text>
          </Center>
        )}
      </Box>
    </>
  );
};

export default OrderPage;
