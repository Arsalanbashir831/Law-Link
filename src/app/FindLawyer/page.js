"use client";
import LawyerCard from "@/components/client/LawyerCard";
import ClientNav from "@/components/ClientNav";
import Search from "@/components/Search";
import React from "react";

const page = () => {
    const lawyers = [
        {
          name: 'John Doe',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          specialization: 'Corporate Law',
          services: ['Contract Drafting', 'Business Formation', 'Mergers & Acquisitions'],
          description: 'Experienced corporate lawyer with over 10 years of practice.',
        },
        {
          name: 'Jane Smith',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          specialization: 'Family Law',
          services: ['Divorce', 'Child Custody', 'Adoption'],
          description: 'Compassionate family lawyer dedicated to helping families in need.',
        },

      ];
  return (
    <>
      <ClientNav />
      <Search/>
      {lawyers.map((data,index)=>{
        return(<>
        <LawyerCard lawyer={data}/>

        </>)
      })}
    </>
  );
};

export default page;
