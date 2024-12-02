import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const themeSelect = () => setTheme(theme === "dark" ? "light" : "dark")
    return (
    <ThemeContext.Provider value={{theme, themeSelect}}>
        {children}
    </ThemeContext.Provider>
)}