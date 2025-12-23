import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects.js";

function ProjectsPage() {
    const featured = projects; 
  return (
    <div className='dark:bg-black p-1'>
         <section className="flex flex-col gap-8 mt-8 mx-auto w-full lg:w-11/20 px-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
          my projects.
        </h2>
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </section>
    </div>
  )
}

export default ProjectsPage