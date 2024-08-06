import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HireLawyer from '@/components/HireLawyer'
import LegalGPTSection from '@/components/LegalGPTSection'

import React from 'react'

const LandingPage = () => {
  return (
  <>
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