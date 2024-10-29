import React, { useState, useEffect } from 'react';
import { useLawyerContext } from '@/services/LawyerPostProvider';
import LawyerList from './LawyerList';


const CollaborationLawyer = () => {
  const { lawyers, loading } = useLawyerContext();

  const handleCollaborate = (lawyerId) => {
    console.log(`Collaborate with lawyer ID: ${lawyerId}`);
  
  };

  return (
    <LawyerList lawyers={lawyers} loading={loading} onCollaborate={handleCollaborate} />
  );
};

export default CollaborationLawyer;
