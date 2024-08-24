import { Avatar, Box, HStack, Text } from "@chakra-ui/react";

const SatisfiedClients = ({ clients, extraCount }) => {
  return (
    <HStack spacing={-2}>
      {clients.slice(0, 3).map((client, index) => (
        <Avatar
          key={index}
          size="md"
          src={client.src}
          name={client.name}
          border="2px solid white"
        />
      ))}
      {extraCount > 0 && (
        <Box
          w="48px"
          h="48px"
          borderRadius="full"
          bg="blue.100"
          border="2px solid white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="md"
          fontWeight="bold"
          color="blue.500"
        >
          +{extraCount}
        </Box>
      )}
    </HStack>
  );
};

export default SatisfiedClients;
