import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HireLawyer from '@/components/HireLawyer'
import LegalGPTSection from '@/components/LegalGPTSection'
import NavbarGlobal from '@/components/NavbarGlobal'

import React from 'react'

const LandingPage = () => {

  const landingNavData = [
    { id: 1, label: 'Home', value: '/' },
    { id: 2, label: 'Hire Lawyer', value: '/hire' },
    { id: 3, label: 'FAQs', value: '/faqs' },
    { id: 4, label: 'Contact Us', value: '/contact-us' },
  ];
  
  return (
  <>
  <NavbarGlobal navData={landingNavData} showAuthButtons/>
    <Hero/>
    <LegalGPTSection/>
    <HireLawyer/>
    <Faq/>
    <ContactForm/>
    <Footer/>
   
  </>
  )
}

export default LandingPage