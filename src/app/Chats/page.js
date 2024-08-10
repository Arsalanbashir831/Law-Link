import ChatBox from '@/components/ChatBox'
import ChatSidebar from '@/components/ChatSidebar'
import ClientNav from '@/components/ClientNav'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
   <>
    <ClientNav/>
    <Flex>
    <ChatSidebar/>
      <ChatBox/>
    </Flex>
  
   </>
  )
}

export default page