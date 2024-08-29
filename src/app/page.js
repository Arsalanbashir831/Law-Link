import React from "react";
import NavbarGlobal from "@/components/NavbarGlobal";
import Hero from "@/components/Hero";
import LegalGPTSection from "@/components/LegalGPTSection";
import HireLawyer from "@/components/HireLawyer";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FootNote from "@/components/FootNote";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HireLawyerSection from "@/components/HireLawyerSection";

import HeroSection from "@/components/HeroMain";
import InfoSection from "@/components/InfoSection";
import OurServices from "@/components/Services";

const LandingPage = () => {
  const landingNavData = [
    { id: 1, label: "Home", value: "hero-section" },
    { id: 2, label: "Legal GPT", value: "legal-gpt-section" },
    { id: 3, label: "Hire Lawyer", value: "hire-lawyer-section" },
    { id: 4, label: "Specialization", value: "specialization-section" },
    { id: 5, label: "Contact Us", value: "contact-us-section" },
  ];

  return (
    <>
      <NavbarGlobal navData={landingNavData} isLanding={true} showAuthButtons />
      <div id="hero-section">
        <Hero />
      </div>
      
      <div id="legal-gpt-section">
        <LegalGPTSection />
      </div>
      <div>
        <HeroSection/>
        <InfoSection/>
      </div>
      <div id="hire-lawyer-section">
        <HireLawyerSection />
      </div>
      <div id="specialization-section">
        <OurServices/>
      </div>
      <div id="faqs-section">
        <Faq />
      </div>
      <div id="contact-us-section">
        <ContactForm />
      </div>
      <Footer />
      <FootNote />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
