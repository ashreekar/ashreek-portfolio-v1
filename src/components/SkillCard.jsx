function SkillCard({ skill }) {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-xl p-4
        border border-gray-200 dark:border-white/10
        bg-white dark:bg-neutral-900/40
        hover:bg-gray-50 dark:hover:bg-white/10
        transition
      "
    >
      <img
        src={skill.image}
        alt={skill.name}
        className="h-10 w-10"
      />

      <p className="font-medium text-gray-800 dark:text-gray-200">
        {skill.name}
      </p>
    </div>
  );
}

export default SkillCard;