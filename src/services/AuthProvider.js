'use client';

import { createContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      console.log(user);
      console.log(token);
      
      
    }
  }, []);
 
  useEffect(() => {
    const protectedRoutes = [
      '/FindLawyer',
      '/LegalGpt',
      '/Chats',
      '/Orders',
      '/Booking',
      '/profile',
    ];

    if (!token) {

      if (protectedRoutes.includes(pathname) || pathname === '/dashboard') {
        router.push('/auth');
      }
    } else if (user) {
      
      if (user?.type === 'lawyer' && pathname !== '/dashboard') {
        router.push('/dashboard'); 
      } else if (user?.type === 'client' && pathname === '/dashboard') {
        router.push('/FindLawyer'); 
      }
    }
  }, [token, user, pathname, router]);

  const login = (userData, userToken) => {
    localStorage.setItem('token', userToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setToken(userToken);
    console.log(user.username);
    console.log(userData);
    
  
    if (userData.type === 'lawyer') {
      router.push('/dashboard');
    } else if (userData.type === 'client') {
      router.push('/FindLawyer');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
    router.push('/auth');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};