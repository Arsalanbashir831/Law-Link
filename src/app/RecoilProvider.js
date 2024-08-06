'use client'
import React from 'react'
import {
    RecoilRoot,
  } from 'recoil';
export const RecoilProvider = ({children}) => {
  return (
   <RecoilRoot>
   {children}
   </RecoilRoot>
  )
}
