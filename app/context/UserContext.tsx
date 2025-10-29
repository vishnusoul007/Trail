"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type UserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserContextType = {
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  screen: string;
  setScreen: (screen: string) => void;
};

// 🟩 Create Context with default values
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  screen: "signin",
  setScreen: () => {},
});

// 🟦 Hook for easy use
export const useUser = () => useContext(UserContext);

// 🟨 Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [screen, setScreen] = useState("signin");

  return (
    <UserContext.Provider value={{ user, setUser, screen, setScreen }}>
      {children}
    </UserContext.Provider>
  );
};
