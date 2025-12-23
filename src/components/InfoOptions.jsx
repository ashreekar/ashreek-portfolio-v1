function InfoOptions({ option, setOption }) {
  const selectedClass =
    "h-full w-1/2 text-center p-1 rounded-md font-semibold cursor-pointer " +
    "bg-white text-gray-900 shadow-md " +
    "dark:bg-neutral-800 dark:text-gray-100";

  const unselectedClass =
    "h-full w-1/2 text-center p-1 font-semibold cursor-pointer transition " +
    "text-gray-400 hover:text-gray-600 " +
    "dark:text-gray-500 dark:hover:text-gray-300";

  return (
    <div className="flex p-1 rounded-md gap-2 bg-gray-100 dark:bg-neutral-900">
      {/* Experience */}
      <p
        className={option === "projects" ? selectedClass : unselectedClass}
        onClick={() => setOption("projects")}
      >
        Experience
      </p>

      {/* Education */}
      <p
        className={option === "education" ? selectedClass : unselectedClass}
        onClick={() => setOption("education")}
      >
        Education
      </p>
    </div>
  );
}

export default InfoOptions;