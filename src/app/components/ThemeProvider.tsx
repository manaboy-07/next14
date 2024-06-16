//This code examples is based on notes in serveraction.txt and also check app layout .tsx
"use client";
import { createContext, useContext } from "react";
type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};
const defaultTheme: Theme = {
  colors: {
    primary: "fff",
    secondary: "000",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

//go check app layout
