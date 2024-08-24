import { Box, Heading, Text, Icon, VStack, HStack } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const AchievementCard = ({ achievement }) => (
  <Box
    p={6}
    borderRadius="lg"
    boxShadow="xl"
    w="100%"
    bgGradient="linear-gradient(90deg, rgba(170,51,51,1) 3%, rgba(166,77,77,1) 89%);"
    color="white"
    _hover={{ transform: "translateY(-4px)", boxShadow: "2xl" }}
    transition="all 0.3s ease"
  >
    <HStack align="start" spacing={4}>
      <Icon as={FaTrophy} boxSize={8} color="yellow.300" />
      <VStack align="start" spacing={1}>
        <Heading size="md" color="white">
          {achievement.title}
        </Heading>
        <Text mt={2} color="gray.100">
          {achievement.description}
        </Text>
      </VStack>
    </HStack>
  </Box>
);

export default AchievementCard;
