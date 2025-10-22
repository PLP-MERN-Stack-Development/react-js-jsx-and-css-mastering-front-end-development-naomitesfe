export default function TaskCard({ task, toggleComplete, deleteTask }) {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow mb-2">
      <div
        className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.text}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
