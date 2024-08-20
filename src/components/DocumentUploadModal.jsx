import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Button,
  Box,
  IconButton,
  Text,
  Center,
  VStack,
  HStack,
  Image
} from '@chakra-ui/react';
import { MdDelete, MdUploadFile } from 'react-icons/md';

const DocumentUploadModal = ({
  isOpen,
  onClose,
  handleFileUpload,
  handleProfilePicUpload,
  uploadedDegree,
  uploadedProfilePic,
  handleDeleteDegree,
  handleDeleteProfilePic,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Your Documents</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            
            <FormLabel>Upload Degree Document</FormLabel>
            <Box
              borderWidth="2px"
              borderColor="gray.300"
              borderRadius="md"
              p={4}
              bg="gray.50"
              textAlign="center"
              mb={6}
            >
              {uploadedDegree ? (
                <Box>
                  <Image
                    src={URL.createObjectURL(uploadedDegree)}
                    alt="Document Preview"
                    boxSize="150px"
                    objectFit="cover"
                    m="auto"
                    mb={4}
                  />
                  <Text fontSize="md" mb={4} color="gray.600">
                    {uploadedDegree.name}
                  </Text>
                  <HStack justify="center" mt={2}>
                    <IconButton
                      icon={<MdDelete />}
                      aria-label="Delete Document"
                      onClick={handleDeleteDegree}
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                    />
                  </HStack>
                </Box>
              ) : (
                <Center>
                  <VStack spacing={3}>
                    <IconButton
                      icon={<MdUploadFile size="40px" />}
                      aria-label="Upload Document"
                      colorScheme="red"
                      variant="outline"
                      size="lg"
                      onClick={() => document.getElementById('degreeInput').click()}
                    />
                    <Text fontSize="sm" color="gray.500">
                      No file chosen
                    </Text>
                    <input
                      type="file"
                      id="degreeInput"
                      style={{ display: 'none' }}
                      onChange={handleFileUpload}
                      accept="image/*, .pdf"
                    />
                  </VStack>
                </Center>
              )}
            </Box>

           
            <FormLabel>Upload Profile Picture</FormLabel>
            <Box
              borderWidth="2px"
              borderColor="gray.300"
              borderRadius="md"
              p={4}
              bg="gray.50"
              textAlign="center"
            >
              {uploadedProfilePic ? (
                <Box>
                  <Image
                    src={URL.createObjectURL(uploadedProfilePic)}
                    alt="Profile Picture Preview"
                    boxSize="150px"
                    objectFit="cover"
                    m="auto"
                    mb={4}
                  />
                  <Text fontSize="md" mb={4} color="gray.600">
                    {uploadedProfilePic.name}
                  </Text>
                  <HStack justify="center" mt={2}>
                    <IconButton
                      icon={<MdDelete />}
                      aria-label="Delete Profile Picture"
                      onClick={handleDeleteProfilePic}
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                    />
                  </HStack>
                </Box>
              ) : (
                <Center>
                  <VStack spacing={3}>
                    <IconButton
                      icon={<MdUploadFile size="40px" />}
                      aria-label="Upload Profile Picture"
                      colorScheme="red"
                      variant="outline"
                      size="lg"
                      onClick={() => document.getElementById('profilePicInput').click()}
                    />
                    <Text fontSize="sm" color="gray.500">
                      No file chosen
                    </Text>
                    <input
                      type="file"
                      id="profilePicInput"
                      style={{ display: 'none' }}
                      onChange={handleProfilePicUpload}
                      accept="image/*"
                    />
                  </VStack>
                </Center>
              )}
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DocumentUploadModal;
