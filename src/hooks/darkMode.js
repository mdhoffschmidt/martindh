import { useState } from "react"

export default function useDarkMode () {
    const [darkMode, setDarkMode] = useState(false);
    const setDarkModeOrNot = () => {setDarkMode(!darkMode)};
    if (darkMode) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    return [darkMode, setDarkModeOrNot]
}
