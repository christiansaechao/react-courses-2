import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("This needs to be inside of a ThemeProvider");
    }

    return context;
}