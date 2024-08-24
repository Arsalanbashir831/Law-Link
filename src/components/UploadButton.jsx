import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdUpload, MdRemoveRedEye } from 'react-icons/md';

const UploadButton = ({ onClick, hasFile }) => (
  <IconButton
    icon={hasFile ? <MdRemoveRedEye /> : <MdUpload />}
    aria-label={hasFile ? "Preview Document" : "Upload Document"}
    onClick={onClick}
    variant="outline"
    colorScheme="red"
    borderColor="red.500"
    _hover={{ bg: 'red.50' }}
    size="sm"
  />
);

export default UploadButton;
