interface TableRowProps {
  title: string;
  acceptance: number;
  difficulty: string;
  tags: string[];
};

export default function TableRow(props: TableRowProps) {
  const getTagBg = () => {
    const bgColorArr = [
      "bg-red-200 dark:bg-red-300",
      "bg-teal-200 dark:bg-teal-300",
      "bg-cyan-200 dark:bg-cyan-300",
      "bg-blue-200 dark:bg-blue-300", 
      "bg-pink-200 dark:bg-pink-300",
      "bg-rose-200 dark:bg-rose-300",
      "bg-green-200 dark:bg-green-300",
      "bg-amber-200 dark:bg-amber-300",
      "bg-orange-200 dark:bg-orange-300",
      "bg-yellow-200 dark:bg-yellow-300",
      "bg-indigo-200 dark:bg-indigo-300",
      "bg-purple-200 dark:bg-purple-300",
    ];

    return bgColorArr[Math.floor(Math.random() * bgColorArr.length)];
  };

  return (
    <tr className="text-gray-500 dark:text-gray-100 tracking-wide border-b dark:border-gray-700">
      <td className="px-4 py-3">{props.title}</td>
      <td className="px-4 py-3">{props.acceptance}%</td>
      <td className="px-4 py-3">{props.difficulty}</td>
      <td className="px-4 py-3 ">
        <ul className="list-disc list-inside">
          {props.tags.map((tag, index) => (
            <li key={index} className={`${getTagBg()}} text-gray-700 text-[0.70rem] font-semibold inline-block mr-2 mb-2 rounded-lg px-1.5`}>
              {tag}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

