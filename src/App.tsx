import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CV from "./pages/CV";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
      />

      <Route path="/cv" element={<CV darkMode={darkMode} />} />
    </Routes>
  );
}

export default App;
