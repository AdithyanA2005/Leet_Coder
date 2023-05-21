import { useEffect, useState } from "react";
import { faCode, faTerminal, faUsers } from "@fortawesome/free-solid-svg-icons";
import StatCard from "./StatCard";
import axiosInstance from "../../axios";
import { toast } from "react-toastify";

interface PlatformStatsProps {
  title: string;
  desc: string;
};

export default function PlatformStats(props: PlatformStatsProps) {
  // To store stats
  const [noOfUsers, setNoOfUsers] = useState<number>(0);
  const [noOfProblems, setNoOfProblems] = useState<number>(0);
  const [noOfLanguages, setNoOfLanguages] = useState<number>(0);

  useEffect(() => {
    // Send request to API
    axiosInstance
      .get("/stats")
      .then((response) => {
        // Extract necessary data
        const { users, questions, languages} = response.data;

        // Set state variables
        setNoOfUsers(parseInt(users));
        setNoOfProblems(parseInt(questions));
        setNoOfLanguages(parseInt(languages));
      })
      .catch((error) => {
        if (error.response) toast.error(error.response.data.error);
        else toast.error("Unexpected server error");
      })
  }, []);

  return (
    <section className="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">{props.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed mx-auto md:mb-12 lg:w-2/3 xl:text-lg">{props.desc}</p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 -m-4 text-center">
          <StatCard icon={faUsers} title="Users" count={noOfUsers} />
          <StatCard icon={faCode} title="Problems" count={noOfProblems} />
          <StatCard icon={faTerminal} title="Languages" count={noOfLanguages} />
        </div>
      </div>
    </section>
  );
};

