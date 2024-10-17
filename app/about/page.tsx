import React from "react";

const About: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        About Us
      </h1>
      <p className="mt-3 text-xl text-gray-700 dark:text-gray-300">
        Learn more about our company and mission.
      </p>
    </main>
  );
};

export default About;
