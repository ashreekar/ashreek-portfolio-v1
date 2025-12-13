import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

function ThemeToggle({ dark, setDark }) {
    return (
        <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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