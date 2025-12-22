function EducationCard({ data }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white dark:bg-white/5">
      <h3 className="font-semibold text-gray-900 dark:text-white">
        {data.degree}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {data.institute}
      </p>

      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>{data.date}</span>
        <span>{data.score}</span>
      </div>
    </div>
  );
}

export default EducationCard;