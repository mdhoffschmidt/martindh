import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import useDarkMode from "../hooks/darkMode";

export default function DarkModeButton() {
    const [darkMode, setDarkMode] = useDarkMode();

    let darkModeIcon ;
    if (darkMode) {
        darkModeIcon = <SunIcon className="darkModeIcon"/>;
    } else {
        darkModeIcon = <MoonIcon className="darkModeIcon"/>;
    }

    return (
        <button onClick={setDarkMode}>
            { darkModeIcon }
        </button>
    );
}