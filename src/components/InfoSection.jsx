import Education from "./Education";
import Experience from "./Experience";

function InfoSection({ option }) {
  return (
    <div className="p-4 mt-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
      {option === "education" ? <Education /> : <Experience />}
    </div>
  );
}

export default InfoSection;