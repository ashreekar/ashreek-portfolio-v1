import ExperienceCard from "./ExperienceCard";
import { experience } from "../data/experience";

function Experience() {
  return (
    <div className="p-0">
      <ul className="ml-10 border-l border-gray-200 dark:border-gray-700">
        {experience.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Experience;