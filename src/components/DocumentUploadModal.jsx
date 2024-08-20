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
  uploadedFile,
  handleDelete,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload Your Degree</ModalHeader>
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
            >
              {uploadedFile ? (
                <Box>
                  <Image
                    src={URL.createObjectURL(uploadedFile)}
                    alt="Document Preview"
                    boxSize="150px"
                    objectFit="cover"
                    m="auto"
                    mb={4}
                  />
                  <Text fontSize="md" mb={4} color="gray.600">
                    {uploadedFile.name}
                  </Text>
                  <HStack justify="center" mt={2}>
                    <IconButton
                      icon={<MdDelete />}
                      aria-label="Delete Document"
                      onClick={handleDelete}
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
                      onClick={() => document.getElementById('fileInput').click()}
                    />
                    <Text fontSize="sm" color="gray.500">
                      No file chosen
                    </Text>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: 'none' }}
                      onChange={handleFileUpload}
                      accept="image/*, .pdf"
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
