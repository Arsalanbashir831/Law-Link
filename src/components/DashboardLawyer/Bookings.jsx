import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { BASE_URL } from "@/Constants";


const Bookings = () => {
  const [bookings , setBookings ] = useState([])
  useEffect(()=>{
   const fetchBookings = async ()=>{
    const token = localStorage.getItem('token')
    try {
      const response = await fetch(`${BASE_URL}api/v1/bookings/getLawyerBookings`,{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
      const data = await response.json()
      if (response.status===200) {
        setBookings(data)
      }
    } catch (error) {
      console.log(error);
    }
   }
   fetchBookings()
  },[])
  return (
    <Box p={5}>
      <Heading size="lg" mb={4} mt={3}>
        Bookings
      </Heading>
    
      
    </Box>
  );
};

export default Bookings;
