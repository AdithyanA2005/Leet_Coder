import Hero from "../components/Hero";
import PlatformStats from "../components/PlatformStats";
import GetStarted from "../components/GetStarted";

export default function HomePage() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Hero />
        <PlatformStats title="Welcome to Our Coding Platform" desc="Our platform is designed to help you improve your coding skills and prepare for technical interviews. With a vast collection of problems and support for multiple programming languages, you can test your skills and enhance your knowledge in a fun and interactive way. Join our community of like-minded individuals and take your coding skills to the next level." />
        <GetStarted title="Get Started" desc="Change your coding level. Ace your coding interview." />
      </div>
    </div>
  );
};

