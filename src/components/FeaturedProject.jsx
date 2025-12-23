import { Link } from "react-router-dom";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function FeaturedProject() {
  const featured = projects.slice(0, 2); // 👈 only 2 projects

  return (
    <section className="flex flex-col gap-8 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
          featured projects
        </h2>

        <Link
          to="/projects"
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition"
        >
          <span>view more</span>
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </section>
  );
}

export default FeaturedProject;