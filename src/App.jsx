import ApiData from "./components/ApiData";
import TaskManager from "./components/TaskManager";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 space-y-10">
          <TaskManager />
          <ApiData /> {/* ✅ API Integration Section */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
