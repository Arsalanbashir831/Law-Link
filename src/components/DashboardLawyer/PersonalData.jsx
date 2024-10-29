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
  Tooltip,
  IconButton,
  Grid,
  Badge,
} from "@chakra-ui/react";
import { useState, useEffect, useContext, useRef } from "react";
import {
  FaBriefcase,
  FaGavel,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import AchievementModal from "./AchievementModal";
import AchievementCard from "./AchievementCard";
import SatisfiedClients from "./AvatarsClients";
import { AuthContext } from "@/services/AuthProvider";
import Header from "./Header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

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
    <Text fontSize="3xl" fontWeight="bold" color="red.600">
      {Math.round(count)}
    </Text>
  );
};

const PersonalData = () => {
  const [achievements, setAchievements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const degreeImages = [
    "https://plus.unsplash.com/premium_photo-1667239129251-ebcdf421eb3c?q=80&w=1528&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop",
  ];

  const galleryRef = useRef(null);
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      });
    }
  };

  const handleAddAchievement = (achievement) => {
    setAchievements([...achievements, achievement]);
  };

  const lawyerDetails = {
    specialties: [
      "Corporate Law",
      "Criminal Defense",
      "Family Law",
      "Contract Law",
    ],
    experience: "15+ years of legal practice",
    contact: {
      email: "lawyer@example.com",
      phone: "+1 (555) 123-4567",
    },
  };

  const clients = [
    { src: "https://bit.ly/dan-abramov", name: "Client 1" },
    { src: "https://bit.ly/code-beast", name: "Client 2" },
    { src: "https://bit.ly/prosper-baba", name: "Client 3" },
    { src: "https://bit.ly/ryan-florence", name: "Client 4" },
  ];

  // Sample data for the chart
  const chartData = [
    { month: "Jan", casesCompleted: 10, casesWon: 8 },
    { month: "Feb", casesCompleted: 12, casesWon: 9 },
    { month: "Mar", casesCompleted: 8, casesWon: 6 },
    { month: "Apr", casesCompleted: 15, casesWon: 12 },
    { month: "May", casesCompleted: 20, casesWon: 18 },
    { month: "Jun", casesCompleted: 18, casesWon: 16 },
  ];

  return (
    <>
      <Header title="Personal Data" />
      <Box
        p={6}
        bg="white"
        borderRadius="xl"
        boxShadow="2xl"
        maxW="6xl"
        mx="auto"
        mt={5}
        mb={10}
      >
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={6}
        >
          {/* Degree Gallery */}
          <VStack
            align="center"
            spacing={3}
            position="relative"
            width={{ base: "full", md: "40%" }}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
          >
            <Heading size="lg" mb={3} color="red.700">
              Degrees
            </Heading>
            <Flex
              ref={galleryRef}
              overflowX="hidden"
              w="full"
              gap={4}
              className="degree-gallery"
              p={2}
              position="relative"
            >
              {degreeImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Degree ${index + 1}`}
                  boxSize="200px"
                  borderRadius="md"
                  objectFit="cover"
                  boxShadow="md"
                  transition="all 0.3s"
                />
              ))}
            </Flex>
            <IconButton
              icon={<FaChevronLeft />}
              position="absolute"
              top="50%"
              left="-10px"
              transform="translateY(-50%)"
              aria-label="Scroll Left"
              variant="solid"
              bg="red.600"
              color="white"
              _hover={{ bg: "red.500" }}
              boxShadow="md"
              onClick={() => scrollGallery("left")}
            />
            <IconButton
              icon={<FaChevronRight />}
              position="absolute"
              top="50%"
              right="-10px"
              transform="translateY(-50%)"
              aria-label="Scroll Right"
              variant="solid"
              bg="red.600"
              color="white"
              _hover={{ bg: "red.500" }}
              boxShadow="md"
              onClick={() => scrollGallery("right")}
            />
          </VStack>

          {/* Lawyer Info */}
          <VStack
            align="center"
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
            width={{ base: "full", md: "60%" }}
          >
            <Avatar
              size="2xl"
              src={user?.profilePic || "https://bit.ly/dan-abramov"}
              name={user?.username || "Lawyer's Name"}
              borderRadius="full"
              boxShadow="lg"
            />
            <VStack align="center" spacing={0}>
              <Heading size="lg" color="gray.800">
                {user?.username || "Lawyer's Name"}
              </Heading>
              <Text fontSize="md" color="gray.600">
                {user?.type || "Lawyer Type"}
              </Text>
              <Text fontSize="md" color="gray.500">
                {lawyerDetails.experience}
              </Text>
            </VStack>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} w="full">
              {lawyerDetails.specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  colorScheme="red"
                  p={2}
                  borderRadius="md"
                  textAlign="center"
                >
                  {specialty}
                </Badge>
              ))}
            </Grid>
          </VStack>
        </Flex>

        <Divider my={8} borderColor="gray.300" />

        {/* Statistical Bar Chart */}
        <Box w="full" h="400px" mt={8}>
          <Heading size="md" color="red.700" mb={4} textAlign="center">
            Cases Completed and Cases Won (Monthly)
          </Heading>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <RechartsTooltip />
              <Bar dataKey="casesCompleted" fill="#8884d8" name="Cases Completed" />
              <Bar dataKey="casesWon" fill="#82ca9d" name="Cases Won" />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Divider my={8} borderColor="gray.300" />
      </Box>
    </>
  );
};

export default PersonalData;
