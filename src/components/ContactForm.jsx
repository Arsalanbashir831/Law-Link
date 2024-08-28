"use client";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const ContactUs = () => {
  const underlineColor = useColorModeValue("#9D152D", "#9D152D");
  const inputBgColor = useColorModeValue("rgba(255, 255, 255, 0.15)", "rgba(0, 0, 0, 0.25)");
  
  return (
    <Box
      position="relative"
      backgroundImage="url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      py={{ base: "15", md: "24" }}
      px={{ base: "6", md: "12", lg: "24" }}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        alignItems="center"
      >
        <GridItem color="white">
          <Heading as="h2" size="xl" mb={6} color="red.600">
            Contact Us
          </Heading>
          <Box w="450px" h="2px" bg={underlineColor} mt={1} mb={6} right={0} />
          <Text mb={4}>
            Our platform offers a seamless and secure way to get legal
            assistance from experienced professionals. Whether youre dealing
            with a complex legal issue or need straightforward advice, our
            experts are here to help.
          </Text>
          <Text mb={4}>
            With our online service, you can connect with top-rated lawyers,
            receive personalized advice, and handle your legal matters with
            confidence. Dont wait—take control of your legal needs today!
          </Text>
        </GridItem>

        <GridItem>
          <form>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
              <FormControl isRequired mb={4}>
                <Input
                  placeholder="Your Name*"
                  bg={inputBgColor}
                  borderColor="#9D152D"
                  borderWidth="1px"
                  color="white"
                  _placeholder={{ color: "white" }}
                />
              </FormControl>

              <FormControl isRequired mb={4}>
                <Input
                  placeholder="Your Mail*"
                  bg={inputBgColor}
                  borderColor="#9D152D"
                  borderWidth="1px"
                  color="white"
                  _placeholder={{ color: "white" }}
                />
              </FormControl>

              <FormControl mb={4}>
                <Input
                  placeholder="Phone"
                  bg={inputBgColor}
                  borderColor="#9D152D"
                  borderWidth="1px"
                  color="white"
                  _placeholder={{ color: "white" }}
                />
              </FormControl>

              <FormControl mb={4}>
                <Input
                  placeholder="Subject"
                  bg={inputBgColor}
                  borderColor="#9D152D"
                  borderWidth="1px"
                  color="white"
                  _placeholder={{ color: "white" }}
                />
              </FormControl>
            </Grid>

            <FormControl isRequired mb={4}>
              <Textarea
                placeholder="Your Message.."
                bg={inputBgColor}
                borderColor="#9D152D"
                borderWidth="1px"
                color="white"
                _placeholder={{ color: "white" }}
              />
            </FormControl>

            <Button
              bg="#9D152D"
              size="lg"
              width="full"
              _hover={{ bg: "#9d9d9d", color: "white" }}
            >
              <Text color="white">SEND MESSAGE</Text>
            </Button>
          </form>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ContactUs;
