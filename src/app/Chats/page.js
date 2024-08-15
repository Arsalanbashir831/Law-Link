'use client'
import ChatBox from '@/components/ChatBox'
import ChatSidebar from '@/components/ChatSidebar'
import ClientNav from '@/components/ClientNav'
import { Flex, Box } from '@chakra-ui/react'
import React from 'react'

const Page = () => {
  return (
    <>
      <ClientNav />
      <Flex>
        <ChatSidebar />
        <Box flex="1" height="calc(100vh - 64px)"> 
          <ChatBox />
        </Box>
      </Flex>
    </>
  );
}

export default Page;
