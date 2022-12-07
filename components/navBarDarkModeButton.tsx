import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useDarkMode } from "../hooks/useDarkMode";


export const DarkModeButton = () => {
    const { darkMode, setDarkModeOrNot } = useDarkMode();
    return (
        <button onClick={ () => setDarkModeOrNot() }>
            { 
                (darkMode) ?
                <SunIcon className="darkModeIcon"/> :
                <MoonIcon className="darkModeIcon"/>
            }
        </button>
    );
}
