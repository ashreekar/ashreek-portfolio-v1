import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

function Header() {
    const lidata = [
        {
            name: "home",
            to: "/"
        },
        {
            name: "projects",
            to: "/projects"
        },
        {
            name: "blogs",
            to: "/blogs"
        },
        {
            name: "contact",
            to: "/contact"
        }
    ]

    return (
        <header className="sticky top-0 z-50 mt-2">
            <div className="mx-auto w-full lg:w-1/2 px-6">
                <nav
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 rounded-2xl px-6 py-4 backdrop-blur-md bg-white/60 dark:bg-white/10 border border-gray-200/40 dark:border-white/10"
                >
                    {/* Nav links */}
                    <ul className="flex flex-col sm:flex-row items-center gap-6 text-gray-700 dark:text-gray-300">
                        {
                            lidata.map(item => (<Link to={item.to} className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition">
                                {item.name}
                            </Link>))
                        }
                    </ul>

                    {/* Minimal theme toggle */}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

export default Header;