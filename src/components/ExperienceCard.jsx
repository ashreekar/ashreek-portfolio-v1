function ExperienceCard({ data }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white dark:bg-white/5 transition">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {data.role}
        </h3>
        <span className="text-sm text-gray-500">{data.date}</span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {data.company}
      </p>

      <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
        {data.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;