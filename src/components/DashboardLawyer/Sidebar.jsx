import { Box, VStack, HStack, Text, Divider, Icon } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { GoLaw } from "react-icons/go";
import {
  FaUser,
  FaPen,
  FaComments,
  FaCalendarCheck,
  FaSignOutAlt,
} from "react-icons/fa";
import NavigationItem from "./NavigationItem";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/services/AuthProvider";

const Sidebar = ({ onSelect }) => {
  const [activeTab, setActiveTab] = useState("Personal Data");
  const router = useRouter();
  const handleSelect = (tab) => {
    setActiveTab(tab);
    onSelect(tab);
  };
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    // localStorage.removeItem('token')
    // router.push('/auth')
    logout();
  };

  return (
    <Box
      width="250px"
      bg="brand.800"
      color="white"
      minHeight="100vh"
      p={5}
      mt={3}
      boxShadow="lg"
      borderRadius="lg"
    >
      <HStack
        spacing={3}
        cursor="pointer"
        transition="all 0.2s"
        _hover={{ color: "brand.200", transform: "scale(1.05)" }}
        mb={6}
        justify="center"
      >
        <Icon as={GoLaw} boxSize="32px" color="black" />
        <Text fontWeight="bold" fontSize="2xl" color="red.600">
          LawLink.pk
        </Text>
      </HStack>

      <Divider borderColor="red.600" mb={6} />

      <VStack spacing={5} align="start">
        <NavigationItem
          icon={FaUser}
          isActive={activeTab === "Personal Data"}
          onClick={() => handleSelect("Personal Data")}
        >
          Personal Data
        </NavigationItem>
        <NavigationItem
          icon={FaPen}
          isActive={activeTab === "Create Post"}
          onClick={() => handleSelect("Create Post")}
        >
          Create Post
        </NavigationItem>
        <NavigationItem
          icon={FaComments}
          isActive={activeTab === "Chat Box"}
          onClick={() => handleSelect("Chat Box")}
        >
          Chat Box
        </NavigationItem>
        <NavigationItem
          icon={FaCalendarCheck}
          isActive={activeTab === "Bookings"}
          onClick={() => handleSelect("Bookings")}
        >
          Bookings
        </NavigationItem>
        <NavigationItem
          icon={FaSignOutAlt}
          isActive={activeTab === "Logout"}
          onClick={() => handleLogout()}
        >
          Log Out
        </NavigationItem>
      </VStack>
    </Box>
  );
};

export default Sidebar;
