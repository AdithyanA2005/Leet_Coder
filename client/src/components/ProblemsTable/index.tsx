import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";

export interface ProblemType {
  title: string;
  acceptance: number;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
};

interface ProblemsTableProps {
  problems: ProblemType[];
};

export default function ProblemsTable(props: ProblemsTableProps) {
  return (
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
      <TableHeader />

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">Title</th>
              <th scope="col" className="px-4 py-3 ">Acceptance</th>
              <th scope="col" className="px-4 py-3 ">Difficulty</th>
              <th scope="col" className="px-4 py-3 w-1/4">Tags</th>
            </tr>
          </thead>
          <tbody>
            {props.problems.map((problem, index) => (
              <TableRow
                key={index}
                title={problem.title}
                acceptance={problem.acceptance}
                difficulty={problem.difficulty}
                tags={problem.tags}
              />
            ))}
          </tbody>
        </table>
      </div>

      <TableFooter />
    </div>
  );
};

