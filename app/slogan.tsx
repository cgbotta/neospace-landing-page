import React, { useState, useEffect } from "react";

const RotatingSlogan = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["data", "spreadsheets", "reports", "analytics"];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 400);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-4xl md:text-5xl font-bold text-center mb-8">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <span>Take back control of your</span>
        <div className="w-[320px] inline-block text-center">
          <span
            className={`
              text-blue-600 
              transition-opacity duration-500
              ${isVisible ? "opacity-100" : "opacity-0"}
            `}
          >
            {words[currentWord]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RotatingSlogan;
