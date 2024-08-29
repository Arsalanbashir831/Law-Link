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
import { motion } from "framer-motion";

const HireLawyerSection = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("black", "white");
  const highlightColor = useColorModeValue("orange.400", "#FFC107");
  const experienceBgColor = useColorModeValue("#1A202C", "#1A202C");
  const buttonBgColor = useColorModeValue("#D3B18D", "#D3B18D");
  const buttonTextColor = useColorModeValue("white", "black");

  return (
    <Box
      bg={bgColor}
      p={{ base: 8, md: 16 }}
      borderRadius="md"
      w="100%"
      mx="auto"
      minH="600px"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        h="full"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of element is in view
        >
          <VStack align="flex-start" spacing={6} maxW="600px">
            <Text
              fontSize="sm"
              color="black"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Explore All Practice Areas
            </Text>
            <Heading
              as="h2"
              size="2xl"
              color={"red.600"}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Why Choose Us
            </Heading>
            <Text fontSize="md" color={textColor}>
              At our law firm, we pride ourselves on delivering exceptional
              legal services tailored to each client&rsquo;s unique needs. Our team of
              experienced attorneys specializes in various areas of law,
              including corporate law, family law, intellectual property, and
              civil litigation. We are committed to achieving the best possible
              outcomes through strategic planning, thorough preparation, and a
              client-centric approach. With a strong track record of success and
              a dedication to upholding justice, we ensure that your rights are
              protected and your interests are vigorously represented.
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
            <HStack spacing={6} mt={8}>
              <Button
                bg={"red.600"}
                color={buttonTextColor}
                size="md"
                _hover={{ bg: "red.700" }}
              >
                Practicing Area
              </Button>
              <Button variant="link" colorScheme="black" fontWeight="bold">
                Book an appointment
              </Button>
            </HStack>
          </VStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of element is in view
        >
          <Box
            position="relative"
            mt={{ base: 10, md: 0 }}
            textAlign="center"
            flexShrink={0}
            w="320px"
            h="480px"
          >
            <Badge
              position="absolute"
              top={1}
              left="70%"
              transform="translateX(-50%)"
              bg={highlightColor}
              color="white"
              fontSize="sm"
              px={4}
              py={1}
              borderRadius="lg"
              boxShadow="md"
            >
              99% Rate of success
            </Badge>

            <Box
              overflow="hidden"
              position="relative"
              w="full"
              h="full"
              pt={8}
              pb={4}
              borderTopLeftRadius="30px"
              borderBottomLeftRadius="30px"
            >
              <Image
                src="https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lawyer Image"
                objectFit="cover"
                w="full"
                borderTopLeftRadius="30px"
                borderBottomLeftRadius="30px"
                h="full"
              />

              <Box
                position="absolute"
                bottom={-1}
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
        </motion.div>
      </Flex>
    </Box>
  );
};

export default HireLawyerSection;
