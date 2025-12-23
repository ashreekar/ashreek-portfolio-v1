import EducationCard from "./EducationCard";
import { education } from "../data/education";

function Education() {
  return (
    <div className="p-0">
      <ul className="ml-10 border-l border-gray-200 dark:border-gray-700">
        {education.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Education;