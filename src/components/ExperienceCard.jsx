import { Link } from "react-router-dom";
import ExperienceBullet from "./ExperienceBullet";

function ExperienceCard({ item }) {
  return (
    <li className="relative ml-10 py-4">
      {/* Logo */}
      <Link
        to={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <span className="size-12 overflow-hidden rounded-full">
          <img
            src={item.image}
            alt={item.company}
            className="h-full w-full object-contain"
          />
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <time className="text-xs text-gray-500 dark:text-gray-400">
          {item.date}
        </time>

        <h2 className="font-semibold text-gray-900 dark:text-gray-100">
          {item.company}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.role}
        </p>

        <ul className="ml-4 list-disc">
          {item.points.map((point, index) => (
            <ExperienceBullet key={index} text={point} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default ExperienceCard;