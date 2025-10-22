export default function Header() {
  return (
    <header className="bg-blue-950 border-b shadow-sm py-4">
      <div className=" mx-auto max-w-5xl p-4 flex justify-between">
        <h1 className="text-2xl font-bold text-white">Task Manager</h1>
        <span className="text-slate-600 text-sm text-white">MERN Week-3 Assignment</span>
      </div>
    </header>
  );
}
