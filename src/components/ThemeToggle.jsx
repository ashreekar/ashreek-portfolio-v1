import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function ThemeToggle() {
    const [dark, setDark] = useState(false);
    const handleToggleTheme = () => {
        setDark(prev => !prev);
        document.getElementById("root").classList.toggle("dark")
    }

    return (
        <button
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
            {dark ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
                <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
        </button>
    );
}

export default ThemeToggle