export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} Task Manager App — MERN Week 3 Assignment
      </p>
    </footer>
  );
}
