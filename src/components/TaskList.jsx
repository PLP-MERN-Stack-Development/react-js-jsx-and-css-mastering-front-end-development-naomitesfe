import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  if (!tasks.length) return <p className="text-gray-500 dark:text-gray-300">No tasks yet!</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
