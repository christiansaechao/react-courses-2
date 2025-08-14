import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState(defaultTheme || "dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
