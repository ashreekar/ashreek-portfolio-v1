import EducationCard from "./EducationCard";

function Education() {
  const education = [
    {
      degree: "BE - Electrical & Electronics Engineering",
      institute: "East West Institute of Technology",
      date: "2021 – 2025",
      score: "83%",
    },
    {
      degree: "PUC (Science)",
      institute: "Sri BGS PU College, Sringeri",
      date: "2021",
      score: "93.67%",
    },
    {
      degree: "SSLC",
      institute: "Annapoorna Vidya Mandira, Agumbe",
      date: "2019",
      score: "92%",
    },
  ];

  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <EducationCard key={index} data={edu} />
      ))}
    </div>
  );
}

export default Education;