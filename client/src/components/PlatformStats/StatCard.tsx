import { useState, useEffect, useRef } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

interface StatCardProps {
  icon: IconDefinition;
  title: string;
  count: number;
};

export default function StatCard(props: StatCardProps) {
  const [currentCount, setCurrentCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>(null);


  useEffect(() => {
    // Set the threshold to 0.4 so that the callback function runs when the observed element is at least 40% visible
    const observerOpt = { threshold: 0.4 }

    // If the observed element becomes visible or hidden
    const observerHandle = ([entry]) => {
      if (entry.isIntersecting) return setVisible(true);
      setVisible(false);
      setCurrentCount(0);
    };

    // Initialize the observer with a callback function that will run whenever the observed element becomes visible or hidden
    if (!observer.current) observer.current = new IntersectionObserver(observerHandle, observerOpt);

    // Observe the element if the element exists
    if (ref.current) observer.current.observe(ref.current);

    // Clean up the observer when the component unmounts
    return () => {
      // Only if the element exists and observer is active
      if (ref.current && observer.current) observer.current.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    // Only do count operations if the component is visible on the screen    
    if (visible) {
      // setInteval to manage count 
      const intervalId = setInterval(() => {
        if (currentCount >= props.count) clearInterval(intervalId)
        else setCurrentCount((prevCount) => prevCount + 1)
      }, 20);

      // Clean up the interval when the component unmounts or when the target count is reached
      return () => clearInterval(intervalId);
    };
  }, [visible, currentCount, props.count]);

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 px-4 py-6 rounded-lg" ref={ref}>
      {/* SVG icon */}
      <FontAwesomeIcon icon={props.icon} className="text-indigo-500 dark:text-indigo-400 w-12 h-12 mb-3 inline-block" />

      {/* Stat */}
      <h2 className="title-font font-medium text-3xl text-gray-700 dark:text-gray-300">
        {visible
          ? <CountUp end={props.count} duration={2} className="block" />
          : <span>{currentCount}</span>
        }
      </h2>
      <p className="leading-relaxed">{props.title}</p>
    </div>
  );
}
