export default function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
      <span
        onClick={() => toggleComplete(task.id)}
        className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.text}
      </span>
      <button
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
