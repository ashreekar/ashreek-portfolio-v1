import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;