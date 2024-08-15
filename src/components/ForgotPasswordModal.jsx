import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { OTPModal } from './OTPModal';
export const ForgotPasswordModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  const handleEmailSubmit = () => {
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setIsOTPModalOpen(true);
  };

  return (
    <>
      <Text color="red.500" cursor="pointer" onClick={onOpen}>
        Forgot password?
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reset Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleEmailSubmit}>
              Send OTP
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {isOTPModalOpen && <OTPModal isOpen={isOTPModalOpen} onClose={() => setIsOTPModalOpen(false)} />}
    </>
  );
};
