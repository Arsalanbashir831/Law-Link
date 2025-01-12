"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  Heading,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHeart, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const LegalGPTSection = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("#1A202C", "#1A202C");
  const highlightColor = useColorModeValue("#B08968", "#B08968");
  const statTextColor = useColorModeValue("gray.700", "white");
  const buttonHoverBgColor = useColorModeValue("red.700", "#9d7e61");
const router = useRouter()
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });

  return (
    <Box
      bg={bgColor}
      p={{ base: 6, md: 10 }}
      maxW="100%"
      mx="auto"
      boxShadow="lg"
      ref={ref}
      
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
      >
        <Box
          textAlign="center"
          mb={{ base: 6, md: 0 }}
          w={{ base: "100%", md: "45%" }}
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us Image"
            objectFit="cover"
            borderRadius="md"
            w="full"
            h="auto"
            maxH="360px"
          />

          <HStack spacing={8} mt={6} justify="center">
            <VStack align="center" spacing={0}>
              <Icon as={FaHeart} color={"red.600"} boxSize={5} />
              <Text fontWeight="bold" fontSize="lg" color={statTextColor}>
                {inView && (
                  <CountUp start={0} end={2700} duration={2.5} separator="," />
                )}
              </Text>
              <Text fontSize="sm" color={statTextColor}>
                Trusted Clients
              </Text>
              <Text fontSize="xs" color={textColor}>
                Individual and Commercial
              </Text>
            </VStack>
            <VStack align="center" spacing={0}>
              <Icon as={FaStar} color={"red.600"} boxSize={5} />
              <Text fontWeight="bold" fontSize="lg" color={statTextColor}>
                {inView && <CountUp start={0} end={84} duration={2.5} suffix="%" />}
              </Text>
              <Text fontSize="sm" color={statTextColor}>
                Win Rate
              </Text>
              <Text fontSize="xs" color={textColor}>
                Current Case Win Rate
              </Text>
            </VStack>
          </HStack>
        </Box>

        <VStack
          align="flex-start"
          spacing={4}
          w={{ base: "100%", md: "50%" }}
          pl={{ md: 10 }}
        >
          <Text fontSize="xl" color={"red.600"} fontWeight="bold">
            Legal GPT
          </Text>
          <Heading as="h2" size="xl" color={headingColor} lineHeight="1.2">
            Legal Assistance Just a Click Away!
          </Heading>
          <Text fontSize="md" color={textColor} lineHeight="1.6">
            Add your case study and get AI-powered legal advice tailored to your
            specific situation. Our advanced AI system analyzes your case
            details and provides you with reliable and accurate legal
            guidance.
          </Text>
          <Button onClick={()=>router.push('/auth')}
            bg={"red.600"}
            color="white"
            size="md"
            _hover={{ bg: buttonHoverBgColor }}
            rightIcon={<FaStar />}
          >
            Learn More
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default LegalGPTSection;
