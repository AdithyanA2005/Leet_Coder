import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-2 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              Error 404
            </p>
            <h1 className="text-gray-900 dark:text-white mb-2 text-center text-2xl font-bold sm:text-left md:text-3xl">
              Page not found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed md:mb-6 lg:w-4/5 xl:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link to="/" className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-600 hover:text-gray-700 active:text-gray-800 inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 transition duration-100 focus-visible:ring md:text-base">
              Go home
            </Link>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by @heydevn" className="absolute inset-0 h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

