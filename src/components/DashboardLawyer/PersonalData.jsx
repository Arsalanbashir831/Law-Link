import {
  Box,
  Heading,
  Image,
  Avatar,
  Text,
  HStack,
  VStack,
  Button,
  SimpleGrid,
  Flex,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaBriefcase, FaGavel, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import AchievementModal from "./AchievementModal";
import AchievementCard from "./AchievementCard";
import SatisfiedClients from "./AvatarsClients";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / ((duration * 1000) / 10);
    const interval = setInterval(() => {
      setCount((prev) => (prev + increment >= end ? end : prev + increment));
    }, 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <Text fontSize="3xl" fontWeight="bold" color="brand.600">
      {Math.round(count)}
    </Text>
  );
};

const PersonalData = () => {
  const [achievements, setAchievements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAchievement = (achievement) => {
    setAchievements([...achievements, achievement]);
  };

  const clients = [
    { src: "https://bit.ly/dan-abramov", name: "Client 1" },
    { src: "https://bit.ly/code-beast", name: "Client 2" },
    { src: "https://bit.ly/prosper-baba", name: "Client 3" },
    { src: "https://bit.ly/ryan-florence", name: "Client 4" },
  ];

  return (
    <Box
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="2xl"
      maxW="5xl"
      mx="auto"
      mt={5}
    >
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Heading size="lg" mb={4} color="red.600">
            Degree
          </Heading>
          <Image
            src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lawyer's Degree"
            boxSize="200px"
            borderRadius="lg"
            objectFit="cover"
            boxShadow="lg"
          />
        </Box>
        <VStack align="center" spacing={5}>
          <Avatar
            size="2xl"
            src="/path-to-profile-picture.jpg"
            name="Lawyer's Name"
            borderRadius="full"
            boxShadow="lg"
          />
          <VStack align="center">
            <Heading size="xl" color="brand.700">
              Muhammad Hamza
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Crime Lawyer
            </Text>
          </VStack>
        </VStack>
      </Flex>

      <Divider my={8} borderColor="gray.300" />
      <SimpleGrid columns={3} spacing={10} mb={8}>
        <Box textAlign="center">
          <Icon as={FaBriefcase} boxSize={6} color="brand.700" mb={2} />
          <Heading size="md" color="red.600" mb={2}>
            Cases Completed
          </Heading>
          <Counter end={50} duration={2} />
        </Box>
        <Box textAlign="center">
          <Icon as={FaGavel} boxSize={6} color="brand.700" mb={2} />
          <Heading size="md" color="red.600" mb={2}>
            Cases Won
          </Heading>
          <Counter end={45} duration={2} />
        </Box>
        <Box textAlign="center">
          <Icon as={FaUsers} boxSize={6} color="brand.700" mb={2} />
          <Heading size="md" color="red.600" mb={2}>
            Satisfied Clients
          </Heading>
          <SatisfiedClients clients={clients} extraCount={11} />
        </Box>
      </SimpleGrid>

      <Divider my={8} borderColor="gray.300" />
      <Box textAlign="center" mb={5}>
        <Button
          colorScheme="red"
          onClick={() => setIsModalOpen(true)}
          size="lg"
          boxShadow="lg"
        >
          Add Career Achievement
        </Button>
      </Box>

      <VStack spacing={6}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
      </VStack>

      {isModalOpen && (
        <AchievementModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddAchievement={handleAddAchievement}
        />
      )}
    </Box>
  );
};

export default PersonalData;
