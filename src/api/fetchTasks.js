import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Button from "./Button";

export default function FetchTasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTasks(data.slice(0, 20)); // example pagination
    } catch (err) {
      setError("Failed to fetch tasks 😢");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?title_like=${search}`
      );
      const data = await res.json();
      setTasks(data.slice(0, 20));
    } catch (err) {
      setError("Search failed 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? <Spinner /> : "Search"}
        </Button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition dark:bg-gray-900"
          >
            <h3 className="font-semibold text-lg mb-2 dark:text-white">
              {task.title}
            </h3>
            <p
              className={`text-sm ${
                task.completed ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {task.completed ? "Completed" : "In Progress"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
