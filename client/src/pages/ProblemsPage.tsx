import ProblemsTable, { ProblemType } from "../components/ProblemsTable";

export default function ProblemsPage() {
  const problems: ProblemType[] = [
    { title: "Two Sum", acceptance: 49.8, difficulty: "Easy", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Add Two Numbers", acceptance: 40.4, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Longest Substring Without Repeating Characters", acceptance: 33.8, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Median of Two Sorted Arrays", acceptance: 36.3, difficulty: "Hard", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Longest Palindromic Substring", acceptance: 32.4, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Zigzag Conversion", acceptance: 45.0, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Reverse Integer", acceptance: 27.5, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "String to Integer (atoi)", acceptance: 16.6, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Palindrome Number", acceptance: 53.6, difficulty: "Easy", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Regular Expression Matching", acceptance: 28.0, difficulty: "Hard", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Container With Most Water", acceptance: 54.0, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Integer to Roman", acceptance: 62.1, difficulty: "Medium", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Roman to Integer", acceptance: 58.6, difficulty: "Easy", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
    { title: "Longest Common Prefix", acceptance: 40.9, difficulty: "Easy", tags: ["Strings", "Arrays", "Linked Lists", "Trees", "Graphs", "Algorithms"] },
  ];

  return (
    <ProblemsTable problems={problems} />
  );
};

