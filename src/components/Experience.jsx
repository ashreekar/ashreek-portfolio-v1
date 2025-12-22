import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      company: "Intellisay, Sydney (Remote)",
      role: "Software Engineering",
      date: "Dec 2024",
      points: [
        "Worked on the Intellisay product",
        "Improved UI and implemented key backend features",
        "Built a user recommendation system using Node.js",
        "Integrated OpenAI APIs with React frontend",
      ],
    },
    {
      company: "Karunadu Technologies, Bangalore",
      role: "Embedded Systems Intern",
      date: "Nov 2023",
      points: [
        "Developed Arduino-based fire & smoke detection system",
        "Worked with sensors, IoT, and embedded C",
        "Gained real-world embedded systems experience",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} data={exp} />
      ))}
    </div>
  );
}

export default Experience;