"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const HireLawyerSection = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("black", "white");
  const highlightColor = useColorModeValue("red.600", "#FFC107");
  const experienceBgColor = useColorModeValue("#1A202C", "#1A202C");
  const buttonBgColor = useColorModeValue("#D3B18D", "#D3B18D");
  const buttonTextColor = useColorModeValue("white", "black");

  return (
    <Box
      bg={bgColor}
      p={10}
      borderRadius="md"
      boxShadow="lg"
      w="100%"
      maxW="1400px"
      mx="auto"
      minH="600px"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        h="full"
      >
        <VStack align="flex-start" spacing={4} maxW="600px">
          <Heading as="h2" size="xl" color={"red.600"}>
            Hire Lawyer
          </Heading>
          <Text fontSize="md" color={textColor}>
            Navigating the complexities of legal issues can be daunting, but
            hiring a lawyer online has never been easier or more efficient.
            Imagine having access to top-tier legal professionals right at your
            fingertips, ready to provide expert advice and representation
            tailored to your unique situation.
          </Text>
          <HStack spacing={8} mt={4} flexWrap="wrap">
            <VStack align="flex-start" spacing={2}>
              <HStack>
                <Box
                  as="span"
                  color={highlightColor}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  ✔
                </Box>
                <Text color={textColor}>Expertise</Text>
              </HStack>
              <HStack>
                <Box
                  as="span"
                  color={highlightColor}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  ✔
                </Box>
                <Text color={textColor}>Results-Oriented</Text>
              </HStack>
            </VStack>
            <VStack align="flex-start" spacing={2}>
              <HStack>
                <Box
                  as="span"
                  color={highlightColor}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  ✔
                </Box>
                <Text color={textColor}>Client-Centric Approach</Text>
              </HStack>
              <HStack>
                <Box
                  as="span"
                  color={highlightColor}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  ✔
                </Box>
                <Text color={textColor}>Personalized Service</Text>
              </HStack>
            </VStack>
          </HStack>
          <HStack spacing={4} mt={6}>
            <Button
              bg={buttonBgColor}
              color={buttonTextColor}
              size="md"
              _hover={{ bg: highlightColor }}
            >
              Practicing Area
            </Button>
            <Button variant="link" colorScheme="black" fontWeight="bold">
              Book an appointment
            </Button>
          </HStack>
        </VStack>

        {/* Image and Badge */}
        <Box
          position="relative"
          mt={{ base: 10, md: 0 }}
          textAlign="center"
          flexShrink={0}
          w="320px"
          h="420px"
        >
          <Box position="absolute" top="-30px" right="50px">
            <Badge
              bg={highlightColor}
              color="black"
              fontSize="sm"
              px={4}
              py={1}
              borderRadius="lg"
              boxShadow="md"
            >
              <Text color="white">99% Rate of success</Text>
            </Badge>
          </Box>
          <Box
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            position="relative"
            w="full"
            h="full"
          >
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lawyer Image"
              objectFit="cover"
              w="full"
              h="full"
              borderRadius="50px"
            />
            <Box
              position="absolute"
              bottom="-10px"
              left="50%"
              transform="translateX(-50%)"
              bg={experienceBgColor}
              px={6}
              py={2}
              borderRadius="md"
              boxShadow="lg"
              w="auto"
              textAlign="center"
            >
              <Text fontSize="sm" color="white">
                15 Years of experience
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HireLawyerSection;
