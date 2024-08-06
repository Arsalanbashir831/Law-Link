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
    question: "What is Legal AI and how does it work?",
    answer: "Legal AI uses advanced machine learning algorithms to analyze legal documents, case studies, and other pertinent information. It provides insights, predictions, and guidance based on vast datasets, making it easier for users to understand their legal standing and possible outcomes."
  },
  {
    question: "How can Legal AI assist with my case?",
    answer: "Legal AI can review the details of your case, compare them with similar cases in the database, and offer advice on potential strategies and outcomes. This can help you make informed decisions and prepare more effectively for legal proceedings."
  },
  {
    question: "Why should I hire a lawyer online?",
    answer: "Hiring a lawyer online offers convenience, a broader selection of professionals, and often faster service. You can easily compare different lawyers, read reviews, and find the best fit for your needs without leaving your home or office."
  },
  {
    question: "Is online legal advice reliable?",
    answer: "Yes, online legal advice from certified professionals is reliable. Our platform ensures that all listed lawyers are verified and experienced in their fields, providing you with trustworthy and competent legal support."
  },
  {
    question: "How do I get started with hiring a lawyer online?",
    answer: "Getting started is simple. Just sign up on our platform, browse through the profiles of available lawyers, and select the one that best suits your needs. You can then schedule a consultation and begin your legal journey with expert guidance."
  }
];

const Faq = () => {
  return (
    <Box py={12} px={6} bg="gray.50">
      <Heading as="h2" size="xl" mb={6} textAlign="center" color="red.600">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} borderBottomWidth="1px" borderColor="gray.200">
            <h2>
              <AccordionButton _expanded={{ bg: 'red.600', color: 'white' }} _hover={{ bg: 'red.500' , color:'white' }}>
                <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="md" color="gray.700">
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faq;
