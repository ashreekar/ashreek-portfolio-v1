import React from "react";
import {
    FileTextIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom"

function IntroCard() {
    return (
        <section className="mx-auto mt-4 w-full lg:w-1/2 px-6">
            <div
                className="
          flex flex-col-reverse md:flex-row
          items-center justify-between
          gap-10
          rounded-3xl
          p-8
          backdrop-blur-md
          bg-white/60 dark:bg-white/10
        "
            >
                {/* Text Content */}
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-3xl font- sm:text-4xl font-semibold text-gray-900 dark:text-white">
                        Hi <span className="inline-block">👋</span>, ashreek here.
                    </h1>

                    <h2 className="text-lg text-gray-600 dark:text-gray-400">
                        You can call me *
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        22 years old developer from Bengaluru, KA, IN
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 max-w-md">
                        Full-stack developer. Builds for myself and others as well.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-4">
                        {/* Resume */}
                        <a
                            href="resume.pdf"
                            target="_blank"
                            className="
                flex items-center gap-2
                rounded-xl px-4 py-2 text-sm
                bg-gray-900 text-white
                dark:bg-white dark:text-black
                hover:opacity-80 transition
              "
                        >
                            <FileTextIcon className="h-4 w-4" />
                            Resume
                        </a>

                        {/* GitHub */}
                        <a
                            href="#"
                            aria-label="GitHub"
                            className="
                rounded-xl p-2
                border border-gray-300 dark:border-white/20
                text-gray-700 dark:text-gray-300
                hover:text-black dark:hover:text-white
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
                        >
                            <GitHubLogoIcon className="h-5 w-5" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="
                rounded-xl p-2
                border border-gray-300 dark:border-white/20
                text-gray-700 dark:text-gray-300
                hover:text-black dark:hover:text-white
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
                        >
                            <LinkedInLogoIcon className="h-5 w-5" />
                        </a>

                        {/* X / Twitter */}
                        <a
                            href="#"
                            aria-label="X"
                            className="
                rounded-xl p-2
                border border-gray-300 dark:border-white/20
                text-gray-700 dark:text-gray-300
                hover:text-black dark:hover:text-white
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
                        >
                            <TwitterLogoIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="shrink-0">
                    <img src="me1.jpg" className="h-56 w-44 rounded-2xl bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-400" />
                </div>
            </div>
        </section>
    );
}

export default IntroCard;