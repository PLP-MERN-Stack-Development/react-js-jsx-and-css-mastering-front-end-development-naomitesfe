// src/components/Header.jsx
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="bg-indigo-600 dark:bg-gray-900 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Task Manager</h1>
          <p className="text-sm text-indigo-100 dark:text-gray-300">Week-3 MERN Assignment</p>
        </div>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </Button>
      </div>
    </header>
  );
}
