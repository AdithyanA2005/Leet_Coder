import StartButtons from "../StartButtons";

interface GetStartedProps {
  title: string;
  desc: string;
};

export default function GetStarted(props: GetStartedProps) {
  return (
    <div className="flex overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750"
          loading="lazy"
          alt="Photo by mymind"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
        <div className="flex w-full flex-col items-center sm:block">
          <div className="mb-4 sm:mb-8">
            <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">{props.title}</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 sm:text-left">{props.desc}</p>
          </div>

          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 w-full max-w-sm mb-3 sm:mb-5">
            <StartButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

