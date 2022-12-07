import { useState } from "react";


export interface QueryUseDarkMode {
    darkMode: Boolean;
    setDarkModeOrNot: () => void;
}

export const useDarkMode = (): QueryUseDarkMode => {
    
    const [darkMode, setDarkMode] = useState(false);
    const setDarkModeOrNot = () => {setDarkMode(!darkMode)};
    
    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }

    return { darkMode, setDarkModeOrNot };
}
