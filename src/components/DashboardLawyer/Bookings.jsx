import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { BASE_URL } from "@/Constants";
import BookingCard from "../BookingCard";
import Header from "./Header";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`${BASE_URL}api/v1/bookings/getLawyerBookings`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.status === 200) {
          console.log(data);
          setBookings(data);
          console.log(bookings);
          
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <Box p={5}>
     <Header title="Bookings" />
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <Spinner size="xl" color="red.600" />
        </Box>
      ) : bookings.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {bookings.map((booking) => (
            <BookingCard
              key={booking._id}
              booking={{
                lawyerId: booking.lawyer,
                profile: booking.client.profilePic || "https://bit.ly/dan-abramov",
                lawyerName: booking.client.username,
                description: booking.client.email,
                bookingDate: booking.dateOfAppointment,
                amount: booking.contractPrice,
                location: booking.location,
                services: booking.services,
                isRatedBooking: booking.isRatedBooking,
                timeOfAppointment : booking.timeOfAppointment,
                createdAt: booking.createdAt
              }}
              buttonType="Details"
              isLawyer={true}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Text textAlign="center" mt={4} color="gray.500">
          No bookings available.
        </Text>
      )}
    </Box>
  );
};

export default Bookings;
