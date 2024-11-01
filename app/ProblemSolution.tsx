import React from "react";
import { Search, FileSearch, GitCompare, Database } from "lucide-react";

const ProblemSolution = () => {
  const items = [
    {
      icon: <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      problem:
        "I have been asked to get the status of a certain report but I only know who last edited it and the subject.",
      solution:
        'Reports by function and author info are searchable with natural language - as simple as "Give me report about this topic from x person"',
      title: "Natural Language Search",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      problem:
        "I am non-technical and need to know how a report was made without having to get into the fine details.",
      solution:
        "AI automatically documents queries, sources, transformations, and purpose as reports are created. We even assign searchability and documentation scores to encourage clear, findable reports.",
      title: "Auto Documentation",
    },
    {
      icon: <GitCompare className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      problem:
        "Two people make similar reports but there is a difference in how the data turns out. I am unsure if it is in how they asked for the original data or in how they transformed it.",
      solution:
        'Generate visual graphs and natural language summaries of data relationships with one click. Just highlight, right click, and "show report similarity".',
      title: "One-Click Comparisons",
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      problem:
        "I want to know if my file will fit into a downstream database but every upload I do only tells me the line that failed. This could take a while to do manually.",
      solution:
        'Right click "file ddl" to compare data definitions with target tables. AI explains compatibility issues in detail and creates files for bulk edits when needed.',
      title: "Native Format Support",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Built for Real Problems
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          We understand your data challenges because we&apos;ve lived them
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-gray-800 p-3 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Problem:
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">
                    {item.problem}
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Solution:
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 mt-2">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
