import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return; // ignore empty input

    // Pass new task to parent component (App or Home)
    onAddTask(task);
    setTask(""); // clear input after adding
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 p-4 bg-white shadow rounded-lg"
    >
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a new task"
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Task
      </button>
    </form>
  );
}
