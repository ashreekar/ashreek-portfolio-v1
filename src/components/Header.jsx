import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function Header() {
  const [dark, setDark] = useState(false);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto w-full lg:w-1/2 px-6">
        <nav
          className="
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4 sm:gap-8
            rounded-2xl
            px-6 py-4
            backdrop-blur-md
            bg-white/60 dark:bg-white/10
            border border-gray-200/40 dark:border-white/10
          "
        >
          {/* Nav links */}
          <ul className="flex flex-col sm:flex-row items-center gap-6 text-gray-700 dark:text-gray-300">
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
              Projects
            </li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
              Blogs
            </li>
            <li className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </li>
          </ul>

          {/* Minimal theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="
              text-gray-600 dark:text-gray-300
              hover:text-black dark:hover:text-white
              transition
            "
          >
            {dark ? <SunIcon/> : <MoonIcon/>}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;