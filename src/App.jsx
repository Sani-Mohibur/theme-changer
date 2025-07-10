import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className="min-h-screen flex flex-col item-center justify-center bg-white dark:bg-gray-900 text-back dark: text-white 
    transition-colors duration-500"
    >
      <h1 className="text-3xl font-bold mb-6">Simple Theme Toggle Test</h1>
      <button
        onClick={toggleTheme}
        className="bg-blue-600 hover: bg-blue-700 text-white font-semibold px-6 py-3 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
