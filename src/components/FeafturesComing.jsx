import { Link } from "react-router-dom";

function FeaturesComing() {
  return (
    <div className="dark:bg-black min-h-screen pt-4">
      
      {/* MATCH HEADER WIDTH */}
      <section className="mx-auto w-full lg:w-11/20 px-2 sm:px-6 flex flex-col gap-10">

        {/* Header with Back Button */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              upcoming.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Projects currently under development, focused on real-time systems,
              scalability, and interactive experiences.
            </p>
          </div>

          <Link
            to="/"
            className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium
                       bg-gray-900 text-white
                       dark:bg-gray-100 dark:text-black
                       hover:opacity-90 transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Upcoming Projects */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Blogging Application */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5
                          bg-white dark:bg-neutral-900
                          hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Blogging Application
              </h3>
              <span className="text-xs px-2 py-1 rounded-full
                               bg-gray-100 dark:bg-gray-800
                               text-gray-600 dark:text-gray-400">
                in progress
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A full-stack blogging platform with authentication, markdown editor,
              comments, and content management.
            </p>
          </div>

          {/* Real-time Chat App */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5
                          bg-white dark:bg-neutral-900
                          hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Real-time Chat App
              </h3>
              <span className="text-xs px-2 py-1 rounded-full
                               bg-gray-100 dark:bg-gray-800
                               text-gray-600 dark:text-gray-400">
                building
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Instant messaging system using WebSockets with online presence,
              typing indicators, and message delivery status.
            </p>
          </div>

          {/* Video Streaming Service */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5
                          bg-white dark:bg-neutral-900
                          hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Video Streaming Service
              </h3>
              <span className="text-xs px-2 py-1 rounded-full
                               bg-gray-100 dark:bg-gray-800
                               text-gray-600 dark:text-gray-400">
                planned
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Scalable video streaming platform with adaptive playback,
              upload processing, and content delivery optimization.
            </p>
          </div>

          {/* Navigation-based Game */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5
                          bg-white dark:bg-neutral-900
                          hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Navigation-based Game
              </h3>
              <span className="text-xs px-2 py-1 rounded-full
                               bg-gray-100 dark:bg-gray-800
                               text-gray-600 dark:text-gray-400">
                concept
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              An interactive game driven by maps and navigation logic,
              blending real-world movement with gameplay mechanics.
            </p>
          </div>

        </section>

      </section>
    </div>
  );
}

export default FeaturesComing;