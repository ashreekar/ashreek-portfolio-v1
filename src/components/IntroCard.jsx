import {
    FileTextIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

function IntroCard() {
    return (
        <section className="mx-auto mt-4 w-full lg:w-11/20 px-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 rounded-3xl p-8 backdrop-blur-md bg-white/60 dark:bg-white/10">
                {/* Text */}
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
                        Hi <span>👋</span>, ashreek here.
                    </h1>

                    <h2 className="text-lg text-gray-800 dark:text-white">
                        You can call me <span className="font-semibold hover:text-gray-700 dark:hover:text-gray-200 hover:underline">aa-shr-eek</span> / <span className="font-semibold hover:text-gray-700 dark:hover:text-gray-200 hover:underline">ash</span>
                    </h2>

                    <p className="text-sm text-gray-800 dark:text-white">
                        22 years old developer from Bengaluru, KA, IN
                    </p>

                    <p className="text-gray-800 dark:text-white max-w-md">
                        Full-stack developer. Love to engineer stuffs.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
                        <a
                            href="resume.pdf"
                            target="_blank"
                            className="
    flex items-center gap-2
    rounded-xl px-4 py-2 text-sm
    bg-white
    text-gray-700 border border-gray-300
    dark:bg-gray-900
    dark:text-gray-300 dark:border-gray-600
    hover:bg-gray-100 dark:hover:bg-gray-800
  "
                        >
                            <FileTextIcon className="h-4 w-4" />
                            Resume
                        </a>

                        {[{
                            to: "https://github.com/ashreekar",
                            icon: <GitHubLogoIcon className="h-5 w-5" />,
                            label: "GitHub",
                        }, {
                            to: "https://www.linkedin.com/in/ashreek-a-r-38499a268/",
                            icon: <LinkedInLogoIcon className="h-5 w-5" />,
                            label: "LinkedIn",
                        }, {
                            to: "https://x.com/ashreek_ar",
                            icon: <TwitterLogoIcon className="h-5 w-5" />,
                            label: "Twitter",
                        }].map(({ to, icon, label }) => (
                            <Link
                                key={label}
                                to={to}
                                target="_blank"
                                aria-label={label}
                                className="rounded-xl p-2 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                            >
                                {icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="shrink-0">
                    <img
                        src="me1.jpg"
                        alt="Ashreek"
                        className="h-56 w-44 rounded-2xl object-cover bg-gray-200 dark:bg-white/10"
                    />
                </div>
            </div>
        </section>
    );
}

export default IntroCard;