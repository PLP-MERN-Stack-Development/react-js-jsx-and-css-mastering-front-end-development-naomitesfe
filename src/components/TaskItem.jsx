export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div
      className={`flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm ${
        task.completed ? "opacity-70 line-through" : ""
      }`}
    >
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4"
        />
        <span>{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        ✕
      </button>
    </div>
  );
}
