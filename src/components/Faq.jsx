import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text
} from '@chakra-ui/react';

const faqs = [
  {
    question: "How can I schedule an appointment with my doctor?",
    answer: "You can schedule an appointment by logging into our portal and selecting the available time slots. Alternatively, you can contact our clinic directly via phone or email."
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can reschedule or cancel your appointment through our portal or by contacting the clinic directly. Please do so at least 24 hours before your scheduled time."
  },
  {
    question: "Is it possible to schedule virtual or telemedicine appointments?",
    answer: "Yes, we offer virtual and telemedicine appointments for your convenience. You can select this option when scheduling your appointment online."
  },
  {
    question: "How can I contact the clinic for further assistance or questions about my appointment?",
    answer: "You can contact our clinic through the contact page on our website, or by calling our customer support team directly."
  }
];

const Faq = () => {
  return (
    <Box py={12} px={6} maxW="900px" mx="auto" mb={4}>
      <Heading as="h2" size="xl" mb={8} fontWeight="bold" color="red.600">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            borderBottom="1px solid"
            borderColor="gray.300"
            _hover={{ borderColor: 'red.400' }}
          >
            <h2>
              <AccordionButton
                _expanded={{ bg: 'red.100', color: 'red.600' }}
                paddingX="0"
                paddingY="16px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                fontSize="lg"
                fontWeight="normal"
                _hover={{ bg: 'red.50', color: 'red.600' }}
              >
                <Box textAlign="left" fontWeight="medium" fontSize="lg" flex="1">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontSize="md"
              color="gray.700"
              mt="-12px"
              ml="30px"
              bg="red.50"
              borderRadius="md"
            >
              <Text mt={3}>

              {faq.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faq;
