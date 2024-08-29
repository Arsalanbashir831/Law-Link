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
    question: "How can I schedule a consultation with a lawyer?",
    answer: "You can schedule a consultation by logging into our portal and selecting an available time slot with your preferred lawyer. Alternatively, you can contact our office directly via phone or email to arrange an appointment."
  },
  {
    question: "Can I reschedule or cancel my consultation?",
    answer: "Yes, you can reschedule or cancel your consultation through our client portal or by contacting our office directly. Please inform us at least 24 hours before your scheduled time to avoid any cancellation fees."
  },
  {
    question: "Do you offer virtual consultations or tele-legal services?",
    answer: "Yes, we offer virtual consultations and tele-legal services for your convenience. You can select this option when booking your consultation online, allowing you to connect with our lawyers from anywhere."
  },
  {
    question: "How can I contact the firm for further assistance or questions regarding my case?",
    answer: "You can contact our firm through the contact page on our website, or by calling our office directly. Our team is available to assist you with any questions or concerns about your case or consultation."
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
