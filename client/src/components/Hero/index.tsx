import StartButtons from "../StartButtons";

export default function Hero() {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-3 font-semibold text-indigo-500 md:mb-5 md:text-lg xl:text-xl">
          Very proud to introduce
        </p>
        <h1 className="text-black dark:text-white mb-6 text-4xl font-bold sm:text-5xl md:mb-9 md:text-6xl">
          LeetCoder - Sharpen your coding skills.
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed md:mb-12 lg:w-4/5 xl:text-lg">
          Our platform is designed to help you improve your coding skills and prepare for technical interviews. With a wide range of practice problems and resources, you'll have everything you need to succeed.
        </p>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <StartButtons />
        </div>
      </div>

      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
      </div>
    </section>
  );
};

