"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  useBreakpointValue,
  SlideFade,
  ScaleFade,
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1533638978312-8a4eaa2fbeaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 4",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pxValue = useBreakpointValue({ base: 4, md: 8 });
  const plValue = useBreakpointValue({ base: 4, md: 16 });


  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 1000);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const getTextForImage = (index) => {
    switch (index) {
      case 0:
        return {
          heading: "Welcome to Your Trusted Law Firm",
          description:
            "Navigating the complexities of legal matters with dedication and expertise. We're here to protect your rights and provide clear guidance every step of the way.",
        };
      case 1:
        return {
          heading: "Expert Legal Solutions for Your Peace of Mind",
          description:
            "Whether you're facing a legal challenge or need proactive advice, our experienced attorneys offer personalized solutions to help you achieve the best possible outcome.",
        };
      case 2:
        return {
          heading: "Comprehensive Legal Services Tailored to You",
          description:
            "From business law to personal matters, our team offers a full range of legal services designed to meet your unique needs and circumstances.",
        };
      case 3:
        return {
          heading: "Your Advocate in Times of Need",
          description:
            "When life presents legal challenges, you need a strong advocate by your side. Our firm is committed to standing up for you and ensuring your voice is heard.",
        };
      default:
        return { heading: "", description: "" };
    }
  };

  const text = getTextForImage(currentImageIndex);

  // Move useBreakpointValue hook calls to the top level of the component
  const paddingX = useBreakpointValue({ base: 4, md: 8 });
  const paddingLeft = useBreakpointValue({ base: 4, md: 16 });
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const descriptionFontSize = useBreakpointValue({ base: "md", md: "md" });
const router = useRouter()
  return (
    <Box position="relative" width="100%" height="600px" overflow="hidden">
      {images.map((image, index) => (
        <Box
          key={image.id}
          as="section"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url(${image.src})`}
          transition="opacity 1s ease-in-out"
          opacity={index === currentImageIndex ? 1 : 0}
          zIndex={index === currentImageIndex ? 1 : 0}
        >
          {index === currentImageIndex && (
            <SlideFade in={true} offsetX="-20px" offsetY="0px">
              <Flex
                direction="column"
                justify="center"
                align="flex-start"
                height="100%"
                w={"50%"}
                mt={"150px"}
                p={4}
                ml={"100px"}
                bg="rgba(0, 0, 0, 0.5)"
                px={pxValue}
                textAlign="left"
                pl={plValue}
              >
                <Text fontSize={headingFontSize} fontWeight="500" color="white" mb={4}>
                  {text.heading}
                </Text>
                <Text fontSize={descriptionFontSize} color="white" mb={6}>
                  {text.description}
                </Text>
                <Stack direction="row" spacing={4}>
                  <ScaleFade in={true} initialScale={0.8}>
                    <Button onClick={()=>router.push('/auth')}  bg="#9D152D" color="white" _hover={{ bg: "red.700" }} size="md">
                      HIRE NOW
                    </Button>
                  </ScaleFade>
                  <ScaleFade in={true} initialScale={0.8}>
                    <Button onClick={()=>router.push('/auth')} bg="black" color="white" _hover={{ bg: "gray.800" }} size="md">
                      LEARN MORE
                    </Button>
                  </ScaleFade>
                </Stack>
              </Flex>
            </SlideFade>
          )}
        </Box>
      ))}

      <IconButton
        aria-label="Previous Slide"
        icon={<FaChevronLeft />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        bg="black"
        color="white"
        _hover={{ bg: "#9D152D" }}
        zIndex="10"
        onClick={handlePrev}
      />

      <IconButton
        aria-label="Next Slide"
        icon={<FaAngleRight />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        bg="black"
        color="white"
        _hover={{ bg: "#9D152D" }}
        zIndex="10"
        onClick={handleNext}
      />
    </Box>
  );
};

export default Hero;
