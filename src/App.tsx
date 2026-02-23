import { BrowserRouter, Routes, Route } from "react-router";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
