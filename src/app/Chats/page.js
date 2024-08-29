'use client'
import ChatBox from '@/components/ChatBox'
import ChatSidebar from '@/components/ChatSidebar'
import ClientNav from '@/components/ClientNav'
import { useChatContext } from '@/services/ChatProvider'
import { Flex, Box } from '@chakra-ui/react'
import React from 'react'


const Page = () => {
  const {selectedLawyer} = useChatContext(); 
  return (
    <>
      <ClientNav />
      <Flex>
        <ChatSidebar />
        <Box flex="1" height="calc(100vh - 64px)"> 
          <ChatBox selectedLawyer={selectedLawyer} />
        </Box>
      </Flex>
    </>
  );
}

export default Page;
