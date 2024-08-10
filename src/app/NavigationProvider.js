'use client';

import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

const excludedRoutes = ['/auth','/onboarding','/FindLawyer','/LegalGpt','/Chats','/Orders','/Booking'];

const NavigationProvider = ({ children }) => {
  const pathname = usePathname();
  const shouldRenderNavbar = !excludedRoutes.some(route => pathname.startsWith(route));

  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      {children}
    </>
  );
};

export default NavigationProvider;
