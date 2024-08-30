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
} from "@chakra-ui/react";
import { FaUserTie, FaGavel, FaPhone, FaEllipsisH } from "react-icons/fa";
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
        {/* Lawyer Header */}
        <VStack align="start" spacing={1} mb={3}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="black">
            {lawyer.user?.username}
          </Text>
        </VStack>

        <Flex align="center" mb={4} wrap="wrap">
          <Image
            borderRadius="full"
            boxSize={{ base: "60px", md: "80px" }}
            src={lawyer.user?.profile_pic || "https://bit.ly/dan-abramov"}
            alt={lawyer.user?.username}
            objectFit="cover"
            border="3px solid"
            borderColor="red.600"
            mr={4}
            _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease" }}
          />
          <VStack mt={2} align="start" spacing={1}>
            <HStack>
              {/* <Icon as={FaUserTie} color="red.600" boxSize={5} /> */}
              <Text fontSize="lg" fontWeight={"bold"} color="gray.700">
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
