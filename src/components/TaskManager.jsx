// src/components/TaskManager.jsx
import React, { useState, useEffect } from "react";
import Button from "./Button";

const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: text.trim(), completed: false },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTaskText = (id, newText) => {
    if (newText.trim()) {
      setTasks(tasks.map(t => t.id === id ? { ...t, text: newText.trim() } : t));
    }
  };

  return { tasks, addTask, toggleTask, deleteTask, updateTaskText };
};

export default function TaskManager() {
  const { tasks, addTask, toggleTask, deleteTask, updateTaskText } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText("");
  };

  const handleEditStart = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const handleSaveEdit = (id) => {
    updateTaskText(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Tasks</h2>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
        />
        <Button type="submit">Add</Button>
      </form>

      <div className="flex gap-2 mb-4">
        <Button variant={filter==="all"?"primary":"secondary"} onClick={()=>setFilter("all")}>All</Button>
        <Button variant={filter==="active"?"primary":"secondary"} onClick={()=>setFilter("active")}>Active</Button>
        <Button variant={filter==="completed"?"primary":"secondary"} onClick={()=>setFilter("completed")}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center p-3 rounded border bg-white dark:bg-gray-700 dark:border-gray-600">
            {editingId === task.id ? (
              <div className="flex gap-2 flex-grow">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-grow px-2 py-1 rounded border dark:bg-gray-600 dark:text-white"
                />
                <Button size="sm" onClick={()=>handleSaveEdit(task.id)}>Save</Button>
                <Button size="sm" variant="secondary" onClick={()=>setEditingId(null)}>Cancel</Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 flex-grow">
                  <input type="checkbox" checked={task.completed} onChange={()=>toggleTask(task.id)} className="w-5 h-5"/>
                  <span className={task.completed?"line-through text-gray-500 dark:text-gray-400":"text-gray-900 dark:text-white"}>
                    {task.text}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="secondary" onClick={()=>handleEditStart(task)}>Edit</Button>
                  <Button size="sm" variant="danger" onClick={()=>deleteTask(task.id)}>Delete</Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-gray-600 dark:text-gray-300">{tasks.length} task(s) total</p>
    </div>
  );
}
