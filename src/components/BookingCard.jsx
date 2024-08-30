// "use client";
// import React from "react";
// import {
//   Box,
//   Text,
//   HStack,
//   VStack,
//   Badge,
//   Icon,
//   Button,
//   Avatar,
//   useColorModeValue,
//   Flex,
//   Spacer,
//   IconButton,
//   Divider,
//   useDisclosure,
//   Tooltip,
// } from "@chakra-ui/react";
// import {
//   FaDollarSign,
//   FaMapMarkerAlt,
//   FaInfoCircle,
//   FaBookmark,
//   FaStar,
// } from "react-icons/fa";
// import ReviewModal from "./ReviewModal";

// const BookingCard = ({ booking, buttonType = "Details", isLawyer = false }) => {
//   const bgColor = useColorModeValue("orange.50", "gray.700");
//   const textColor = useColorModeValue("black", "white");
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   console.log("is rated", booking.isRatedBooking);

//   const handleButtonClick = () => {
//     if (buttonType === "Review") {
//       onOpen();
//     } else {
//       console.log("Details clicked");
//     }
//   };

//   return (
//     <>
//       <Box
//         borderWidth="1px"
//         borderRadius="20px"
//         overflow="hidden"
//         boxShadow="lg"
//         bg={bgColor}
//         p={5}
//         w="300px"
//         m={4}
//       >
//         <VStack align="start" spacing={3} w="full">
//           <HStack justify="space-between" w="full">
//             <Text fontSize="sm" color="gray.500">
//               {new Date(booking?.bookingDate).toLocaleDateString("en-US", {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//               })}
//             </Text>
//             <Avatar
//               src={booking?.profile || "https://bit.ly/dan-abramov"}
//               name={booking?.lawyerName || booking?.clientName}
//               size="lg"
//               border="2px solid"
//               borderColor="white"
//             />
//           </HStack>

//           <HStack spacing={3} w="full">
//             <VStack align="start" spacing={0} flex={1}>
//               <Text fontSize="md" fontWeight="bold" color={textColor}>
//                 {booking?.lawyerName || booking?.clientName}
//               </Text>
//               <Text fontSize="sm" fontWeight="bold" color={textColor}>
//                 {booking?.description || "Law Firm Name"}
//               </Text>
//             </VStack>
//           </HStack>

//           <Divider />

//           <HStack spacing={2} w="full" wrap="wrap">
//             {booking?.services?.map((tag, index) => (
//               <Badge bg={"red.600"} key={index} borderRadius="md" px={2} py={1}>
//                 <Text color={"white"}>{tag}</Text>
//               </Badge>
//             ))}
//           </HStack>

//           <Divider />

//           <Flex align="center" w="full" mt={4}>
//             <Text fontSize="lg" fontWeight="bold" color={textColor}>
//               <Icon as={FaDollarSign} color="gray.500" mr={1} />
//               {booking?.amount}/hr
//             </Text>
//             <Spacer />
//             <Text fontSize="sm" color="gray.500">
//               <Icon as={FaMapMarkerAlt} color="gray.500" mr={1} />
//               {booking?.location || "San Francisco, CA"}
//             </Text>
//           </Flex>

//           <Flex align="center" w="full" mt={4}>
//             {isLawyer ? (
//               <>
//               <HStack w="full" spacing={5}>
//                 <Button
//                   onClick={handleButtonClick}
//                   colorScheme="red"
//                   leftIcon={<FaInfoCircle />}
//                 >
//                   Details
//                 </Button>
//                 {booking.isRatedBooking && (
//                   <Tooltip label="Reviewed by the client" placement="top">
//                     <Badge colorScheme="yellow" ml={10}>
//                       <FaStar />
//                     </Badge>
//                   </Tooltip>
//                 )}
//               </HStack>
//               </>
//             ) : (
//               <Tooltip
//                 label={booking.isRatedBooking ? "Review already added" : ""}
//                 placement="top"
//               >
//                 <Button
//                   onClick={handleButtonClick}
//                   isDisabled={booking.isRatedBooking}
//                   colorScheme={booking.isRatedBooking ? "gray" : "red"}
//                   leftIcon={<FaStar />}
//                 >
//                   {booking.isRatedBooking ? "Review Added" : "Add Review"}
//                 </Button>
//               </Tooltip>
//             )}
//           </Flex>
//         </VStack>
//       </Box>
//       {!isLawyer && (
//         <ReviewModal
//           isOpen={isOpen}
//           onClose={onClose}
//           lawyerId={booking.lawyerId}
//         />
//       )}
//     </>
//   );
// };

// export default BookingCard;


// BookingCard.js
"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Badge,
  Button,
  Avatar,
  useColorModeValue,
  Flex,
  Spacer,
  Icon,
  Divider,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { FaDollarSign, FaMapMarkerAlt, FaInfoCircle, FaStar } from "react-icons/fa";
import ReviewModal from "./ReviewModal";
import BookingDetailsModal from "./DashboardLawyer/BookingDetailsModal";


const BookingCard = ({ booking, buttonType = "Details", isLawyer = false }) => {
  const bgColor = useColorModeValue("orange.50", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    if (buttonType === "Review") {
      onOpen();
    } else {
      setIsDetailsOpen(true);
    }
  };

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="20px"
        overflow="hidden"
        boxShadow="lg"
        bg={bgColor}
        p={5}
        w="300px"
        m={4}
      >
        <VStack align="start" spacing={3} w="full">
          <HStack justify="space-between" w="full">
            <Text fontSize="sm" color="gray.500">
              {new Date(booking?.bookingDate).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>
            <Avatar
              src={booking?.profile || "https://bit.ly/dan-abramov"}
              name={booking?.lawyerName || booking?.clientName}
              size="lg"
              border="2px solid"
              borderColor="white"
            />
          </HStack>

          <HStack spacing={3} w="full">
            <VStack align="start" spacing={0} flex={1}>
              <Text fontSize="md" fontWeight="bold" color={textColor}>
                {booking?.lawyerName || booking?.clientName}
              </Text>
              <Text fontSize="sm" fontWeight="bold" color={textColor}>
                {booking?.description || "Law Firm Name"}
              </Text>
            </VStack>
          </HStack>

          <Divider />

          <HStack spacing={2} w="full" wrap="wrap">
            {booking?.services?.map((tag, index) => (
              <Badge bg={"red.600"} key={index} borderRadius="md" px={2} py={1}>
                <Text color={"white"}>{tag}</Text>
              </Badge>
            ))}
          </HStack>

          <Divider />

          <Flex align="center" w="full" mt={4}>
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              <Icon as={FaDollarSign} color="gray.500" mr={1} />
              {booking?.amount}/hr
            </Text>
            <Spacer />
            <Text fontSize="sm" color="gray.500">
              <Icon as={FaMapMarkerAlt} color="gray.500" mr={1} />
              {booking?.location || "San Francisco, CA"}
            </Text>
          </Flex>

          <Flex align="center" w="full" mt={4}>
            {isLawyer ? (
              <HStack w="full" spacing={5}>
                <Button onClick={handleButtonClick} colorScheme="red" leftIcon={<FaInfoCircle />}>
                  Details
                </Button>
                {booking.isRatedBooking && (
                  <Tooltip label="Reviewed by the client" placement="top">
                    <Badge colorScheme="yellow" ml={10}>
                      <FaStar />
                    </Badge>
                  </Tooltip>
                )}
              </HStack>
            ) : (
              <Tooltip
                label={booking.isRatedBooking ? "Review already added" : ""}
                placement="top"
              >
                <Button
                  onClick={handleButtonClick}
                  isDisabled={booking.isRatedBooking}
                  colorScheme={booking.isRatedBooking ? "gray" : "red"}
                  leftIcon={<FaStar />}
                >
                  {booking.isRatedBooking ? "Review Added" : "Add Review"}
                </Button>
              </Tooltip>
            )}
          </Flex>
        </VStack>
      </Box>

      {isLawyer && (
        <BookingDetailsModal
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          booking={booking}
        />
      )}

      {!isLawyer && (
        <ReviewModal isOpen={isOpen} onClose={onClose} lawyerId={booking.lawyerId} />
      )}
    </>
  );
};

export default BookingCard;
