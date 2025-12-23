function Avatar({ image, name }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="h-9/10 w-9/10 object-contain"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center 
      rounded-full bg-gray-200 text-gray-700 
      dark:bg-gray-700 dark:text-gray-200
      text-lg font-semibold">
      {name?.[0]?.toUpperCase()}
    </div>
  );
}

export default Avatar;