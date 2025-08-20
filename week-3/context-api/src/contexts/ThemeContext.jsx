import { useState, createContext, useContext } from 'react';

const defaultValue = "dark";

/**
 * createContext returns a context object
 * The context object contains a Provider and a Consumer component.
 * The Provider component is used to provide the context value to its children.
 * The Consumer component is used to consume the context value.
 */

// context
export const ThemeContext = createContext(null);

// provider component
export const ThemeProvider = ({ children, defaultTheme }) => {
    const [theme, setTheme] = useState(defaultTheme || "dark");
    
    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }

    return (
        <ThemeContext value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext>
    );
}

/**
 * This is a custom hook that wraps the useContext hook for ThemeContext.
 * It provides a convenient way to access the theme context values.
 * If the hook is used outside of a ThemeProvider, it throws an error.
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}