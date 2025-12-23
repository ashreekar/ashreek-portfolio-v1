import Avatar from "./Avatar";

function EducationCard({ item }) {
  return (
    <li className="relative ml-10 py-4">
      {/* Logo */}
      <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800">
        <span className="size-12 overflow-hidden rounded-full">
          <Avatar image={item.image} name={item.institute} />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        {/* Date */}
        <time className="text-xs text-gray-500 dark:text-gray-400">
          {item.date}
        </time>

        {/* Degree */}
        <h2 className="font-semibold text-gray-900 dark:text-gray-100">
          {item.degree}
        </h2>

        {/* Institute */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.institute}
        </p>

        {/* Score */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Score: {item.score}
        </p>
      </div>
    </li>
  );
}

export default EducationCard;