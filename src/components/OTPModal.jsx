import React, { useState, useRef } from 'react';
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
  HStack,
  useDisclosure,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export const OTPModal = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input box
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    console.log('OTP submitted:', otpValue);
    // Add your OTP verification logic here
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" color="red.600">Enter OTP</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel textAlign="center" fontWeight="bold">
              Please enter the 6-digit code sent to your email
            </FormLabel>
            <HStack justify="center" spacing={4} mt={4}>
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  textAlign="center"
                  fontSize="2xl"
                  width="50px"
                  height="50px"
                  borderColor="red.500"
                  focusBorderColor="red.600"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !otp[index] && index > 0) {
                      inputRefs.current[index - 1].focus();
                    }
                  }}
                />
              ))}
            </HStack>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleSubmit} size="lg">
            Verify OTP
          </Button>
          <Button variant="ghost" onClick={onClose} size="lg">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
