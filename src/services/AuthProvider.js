"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Load token and user from local storage initially
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); 
  }, []);

  useEffect(() => {
    
    if (loading) return;

    const protectedRoutes = [
      "/FindLawyer",
      "/LegalGpt",
      "/Chats",
      "/Orders",
      "/Booking",
      "/profile",
    ];

    if (!token) {
      if (protectedRoutes.includes(pathname) || pathname === "/dashboard") {
        router.push("/auth");
      }
    } else if (user) {
      if (user?.type === "lawyer" && pathname !== "/dashboard") {
        router.push("/dashboard");
      } else if (user?.type === "client" && pathname === "/dashboard") {
        router.push("/FindLawyer");
      }
    }
  }, [token, user, pathname, router, loading]); 
  const login = (userData, userToken) => {
    localStorage.setItem("token", userToken);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setToken(userToken);

    if (userData.type === "lawyer") {
      router.push("/dashboard");
    } else if (userData.type === "client") {
      router.push("/FindLawyer");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    router.push("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {!loading && children} 
    </AuthContext.Provider>
  );
};
