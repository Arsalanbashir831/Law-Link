"use client";
import LawyerCard from "@/components/client/LawyerCard";
import ClientNav from "@/components/ClientNav";
import NavbarGlobal from "@/components/NavbarGlobal";
import Search from "@/components/Search";
import { BASE_URL } from "@/Constants";
import React, { useEffect } from "react";

const Page = () => {
  const clientNavData = [
    { id: 1, label: 'Find Lawyer', value: '/FindLawyer' },
    { id: 2, label: 'Legal GPT', value: '/LegalGpt' },
    { id: 3, label: 'Chats', value: '/Chats' },
    { id: 4, label: 'Orders', value: '/Orders' },
  ];
  useEffect(()=>{
    const fetchPost = async ()=>{
      try {
      const token = localStorage.getItem('userToken')
        const response = await fetch(`${BASE_URL}/api/v1/lawyer/posts`,{
          method:"GET",
          headers: {
            'Authorization': `Bearer ${token}`, // Pass the token in the Authorization header
            'Content-Type': 'application/json'  // Set the Content-Type header
          }
        })
        const data = response.json()
        if(response.ok){
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchPost()
  },[])
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
      {/* <ClientNav /> */}
      <NavbarGlobal navData={clientNavData} username="Arsalan Bashir" avatarUrl="path-to-avatar.jpg"/>
      <Search/>
      {lawyers.map((data,index)=>{
        return(<>
        <LawyerCard lawyer={data}/>

        </>)
      })}
    </>
  );
};

export default Page;
