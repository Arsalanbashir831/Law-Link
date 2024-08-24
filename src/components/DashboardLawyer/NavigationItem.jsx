import { HStack, Text, Icon, Box } from "@chakra-ui/react";

const NavigationItem = ({ children, isActive, onClick, icon }) => (
  <HStack
    as="button"
    width="100%"
    spacing={4}
    align="center"
    bg={isActive ? "brand.50" : "transparent"}
    _hover={{ bg: "brand.100", transform: 'translateX(4px)' }}
    py={3}
    px={4}
    borderRadius="lg"
    boxShadow={isActive ? "inset 4px 0px 0px 0px red" : "none"}
    transition="all 0.3s ease"
    onClick={onClick}
  >
    <Icon as={icon} boxSize={5} color={isActive ? "red.600" : "gray.600"} />
    <Text color={isActive ? "red.600" : "gray.800"} fontWeight="semibold">
      {children}
    </Text>
  </HStack>
);

export default NavigationItem;
