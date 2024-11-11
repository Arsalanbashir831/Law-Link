"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { BASE_URL } from "@/Constants";
import { AuthContext } from "./AuthProvider";



const LawyerContext = createContext();
export const LawyerProvider = ({ children }) => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchLawyers = async () => {
      if (!token) return;
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}api/v1/lawyer/posts/lawyer`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(" Data:", data);
        setLawyers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLawyers();
  }, [token]);

  return (
    <LawyerContext.Provider value={{ lawyers, loading }}>
      {children}
    </LawyerContext.Provider>
  );
};


export const useLawyerContext = () => useContext(LawyerContext);
