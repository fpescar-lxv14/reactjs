import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const check = () => theme === "dark" 
    const themeSelect = () => setTheme( check() ? "light" : "dark")
    const getStyle = () => ({
        color: check() ? "#ccf" : "#336",
        backgroundColor: check() ? "#336" : "#ccf",
        borderRadius: ".25rem",
        border: "1px solid",
        padding: ".5rem",
    })
    return (
    <ThemeContext.Provider value={{theme, getStyle, themeSelect}}>
        {children}
    </ThemeContext.Provider>
)}