"use client";
import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();
export const ChatProvider = ({ children }) => {
  const [selectedLawyer, setSelectedLawyer] = useState(null); 

  return (
    <ChatContext.Provider value={{ selectedLawyer, setSelectedLawyer }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);
