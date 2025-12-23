import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      
      {/* Match Header / Page Width */}
      <section className="mx-auto w-full lg:w-11/20 px-2 sm:px-6">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Text Section */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-6xl sm:text-8xl font-bold text-gray-900 dark:text-gray-100">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Page not found.
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              The page you’re looking for doesn’t exist or has been moved.
              Let’s get you back on track.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/"
                className="px-5 py-2.5 rounded-lg text-sm font-medium
                           bg-gray-900 text-white
                           dark:bg-gray-100 dark:text-black
                           hover:opacity-90 transition"
              >
                ← Go Home
              </Link>

              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-lg text-sm font-medium
                           border border-gray-300 dark:border-gray-700
                           text-gray-700 dark:text-gray-300
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                View Projects
              </Link>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-500 pt-6">
              Lost pages happen. Good UX brings users back.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/oopsimage.jpeg"
              alt="Page not found illustration"
              className="
                max-w-55 sm:max-w-65
                rounded-xl
                border border-gray-200 dark:border-gray-800
                p-2
                opacity-90
              "
            />
          </div>

        </div>
      </section>
    </div>
  );
}

export default NotFound;