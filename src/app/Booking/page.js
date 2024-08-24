import AppointmentBooking from '@/components/Booking'
import NavbarGlobal from '@/components/NavbarGlobal';
import React from 'react'

const page = () => {
  const lawyerNavData = [
    { id: 1, label: 'Client Cases', value: '/ClientCases' },
    { id: 2, label: 'Legal GPT', value: '/LegalGpt' },
    { id: 3, label: 'Chats', value: '/Chats' },
    { id: 4, label: 'Orders', value: '/Orders' },
  ];
  
  return (
   <>
   <NavbarGlobal navData={lawyerNavData} username="Muhammad" avatarUrl="path-to-avatar.jpg"/>
    <AppointmentBooking/>
   </>
  )
}

export default page