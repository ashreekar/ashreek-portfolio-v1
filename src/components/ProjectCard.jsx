import { GitHubLogoIcon } from "@radix-ui/react-icons";

function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm flex flex-col">
      {/* Image */}
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="h-40 w-full rounded-lg object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-2 flex flex-col gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>

        <p className="text-xs text-gray-600 dark:text-gray-400">
          {project.description[0]}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 mt-auto flex flex-col gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-1.5 py-0.5 text-[10px] rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 cursor-pointer text-[10px] rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              Website
            </a>
          )}
          {project["github(backend)"] && (
            <a
              href={project["github(backend)"]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 cursor-pointer py-1 text-[10px] rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              Gihub(backend)
            </a>
          )}
          {project["github(ui)"] && (
            <a
              href={project["github(ui)"]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-[10px] cursor-pointer rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              Github(ui)
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-[10px] cursor-pointer rounded-md bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-80 transition"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;