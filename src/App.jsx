import React, { useState, useEffect } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && localStorage.theme) {
    return localStorage.theme;
  }
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
      bg-white dark:bg-gray-900 text-black dark:text-white
      transition-colors duration-500 ease-in-out"
    >
      <h1 className="text-3xl font-bold mb-6">Simple Theme Toggle Test</h1>
      <button
        onClick={toggleTheme}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default App;
