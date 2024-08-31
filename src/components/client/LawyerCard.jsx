import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  Button,
  Icon,
  Flex,
  VStack,
  useDisclosure,
  Badge,
  useColorModeValue,
  Divider,
  Collapse,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { FaUserTie, FaGavel, FaPhone, FaEllipsisH, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useChatContext } from "@/services/ChatProvider";
import ViewProfileModal from "../ViewProfileModa";

const LawyerCard = ({ lawyer }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setSelectedLawyer } = useChatContext();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleContactClick = (path) => {
    setSelectedLawyer(lawyer);
    router.push(path);
  };

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="20px"
        overflow="hidden"
        boxShadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        p={6}
        mb={6}
        width="100%"
        maxW="480px"
        mx="auto"
        transition="all 0.3s"
        _hover={{ boxShadow: "2xl", transform: "translateY(-5px)" }}
        bgGradient="linear(to-r, white, gray.50)"
        borderColor="gray.200"
      >
        <VStack align="start" spacing={1} mb={3}>
          <HStack display={"flex"} justifyContent={"space-between"} width="100%" spacing={4}>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="black" flex={1}>
              {lawyer.user?.username}
            </Text>
            <Image
              borderRadius="full"
              boxSize={{ base: "60px", md: "80px" }}
              src={lawyer.user?.profile_pic || "https://bit.ly/dan-abramov"}
              alt={lawyer.user?.username}
              objectFit="cover"
              border="1px solid"
              ml={4}
              _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease" }}
            />
          </HStack>
        </VStack>

        <Flex align="center" mb={4} wrap="wrap">
          <VStack mt={2} align="start" spacing={1}>
            <HStack>
              <Text fontSize="lg" fontWeight={"bold"} color="red.700">
                {lawyer?.post_title}
              </Text>
            </HStack>
          </VStack>
        </Flex>

        <Box mb={4}>
          <Collapse startingHeight={45} in={showFullDescription}>
            <Text fontSize="sm" color="gray.700">
              {lawyer?.post_description}
            </Text>
          </Collapse>
          {lawyer?.post_description?.length > 100 && (
            <IconButton
              size="md"
              variant="ghost"
              colorScheme="red"
              icon={<FaEllipsisH />}
              aria-label="Toggle Description"
              onClick={handleToggleDescription}
              _hover={{ bg: "red.100" }}
            />
          )}
        </Box>

        <HStack spacing={2} mb={4} wrap="wrap">
          {lawyer.lawType.map((service, index) => (
            <Badge
              key={index}
              size="md"
              variant="subtle"
              colorScheme="red"
              borderRadius="full"
              px={3}
              py={1}
              textTransform="uppercase"
              _hover={{ bg: "red.600", color: "white" }}
            >
              {service}
            </Badge>
          ))}
        </HStack>
        <Flex alignItems="center" mb={4}>
          <HStack spacing={1}>
            <Tooltip label={`${lawyer?.user?.avgRating} / 5`} aria-label="Average Rating">
              <HStack>
                {Array.from({ length: Math.floor(lawyer?.user?.avgRating) }).map((stars, i) => (
                  <Icon key={i} as={FaStar} color="yellow.400" boxSize={4} />
                ))}
                {lawyer?.user?.avgRating % 1 !== 0 && (
                  <Icon as={FaStarHalfAlt} color="yellow.400" boxSize={4} />
                )}
              </HStack>
            </Tooltip>
            <Text fontSize="sm" color="gray.600">
              ({lawyer?.user?.ratingCount} {lawyer?.user?.ratingCount > 1 ? "ratings" : "rating"})
            </Text>
          </HStack>
        </Flex>

        <Divider borderColor="gray.300" mb={4} />

        <Flex justifyContent="space-between" wrap="wrap">
          <Button
            size="sm"
            colorScheme="red"
            borderRadius="full"
            onClick={onOpen}
            _hover={{ bg: "red.700" }}
            leftIcon={<Icon as={FaUserTie} />}
          >
            View Profile
          </Button>
          <Button
            size="sm"
            colorScheme="green"
            borderRadius="full"
            _hover={{ bg: "green.700" }}
            leftIcon={<Icon as={FaPhone} />}
            onClick={() => handleContactClick("/Chats")}
          >
            Contact Lawyer
          </Button>
        </Flex>
      </Box>
      <ViewProfileModal isOpen={isOpen} onClose={onClose} lawyer={lawyer} />
    </>
  );
};

export default LawyerCard;
