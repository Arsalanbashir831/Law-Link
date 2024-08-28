'use client';
import React, { useState, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Flex,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { BASE_URL } from '@/Constants';
import { AuthContext } from '@/services/AuthProvider';

const ReviewModal = ({ isOpen, onClose, lawyerId }) => {
  const { token } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const toast = useToast();

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleSubmitReview = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}api/v1/ratings/post`,
        {
          lawyerId: lawyerId,
          rating: rating,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log('Review submitted:', { rating, reviewText });
      toast({
        title: 'Review submitted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setRating(0);
      setReviewText('');
      onClose();
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: 'Failed to submit review.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a Review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="center" mb={4}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IconButton
                key={star}
                icon={<FaStar />}
                color={star <= rating ? 'yellow.400' : 'gray.300'}
                onClick={() => handleStarClick(star)}
                variant="ghost"
                size="lg"
                _hover={{ color: 'yellow.500' }}
                aria-label={`Rate ${star} stars`}
              />
            ))}
          </Flex>
          <Textarea
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            size="sm"
            resize="vertical"
            focusBorderColor="red.500"
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={handleSubmitReview} disabled={rating === 0}>
            Submit Review
          </Button>
          <Button variant="ghost" onClick={onClose} ml={3}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReviewModal;
