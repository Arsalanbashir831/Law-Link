import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const AchievementModal = ({ isOpen, onClose, onAddAchievement }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = () => {
      onAddAchievement({ title, description });
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Career Achievement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="achievement-title" mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Achievement Title"
              />
            </FormControl>
            <FormControl id="achievement-description">
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Achievement Description"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleSubmit}>
              Add Achievement
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default AchievementModal;
  