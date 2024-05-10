import { createContext, useState } from "react";

// 1. Creamos el contexto con createContext.
export const ThemeContext = createContext();

//2. Creamos el Provider.

export function ThemesProvider({ children }) {
  const [themes, setThemes] = useState([
    {name: 'dark', active:true},
    {name: 'light', active:false},
    {name: 'blue', active:false},
    {name: 'purple', active:false},
  ]);

  return (
    <ThemeContext.Provider
      value={{
        themes,
        setThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
