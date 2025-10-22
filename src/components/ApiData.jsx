import { useEffect, useState } from "react";
import Button from "./Button";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // Fetch posts from JSONPlaceholder
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result);
        setFiltered(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  // Handle search
  useEffect(() => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, data]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Public API Data</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-3">
          {filtered.map((post) => (
            <li
              key={post.id}
              className="p-3 border rounded-lg dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between mt-6">
        <Button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          variant="secondary"
        >
          Previous
        </Button>
        <span className="text-gray-700 dark:text-gray-300">Page {page}</span>
        <Button onClick={() => setPage((p) => p + 1)} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
}
