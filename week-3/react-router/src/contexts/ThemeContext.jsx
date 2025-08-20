import { useState, useContext, createContext } from 'react';

/**
 * Create context is a context object
 * Has 2 properties on it: Provider, Consumer
 * Both of these properties are components
 */
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children, defaultTheme }) => {
    // Name, Email | mock data 
    // Theme provider, and User Provider
  const [theme, setTheme] = useState(defaultTheme || "dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("This needs to be inside of a ThemeProvider");
    }

    return context;
}