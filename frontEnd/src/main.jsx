import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Collections from "./pages/Collections.jsx";
import Play from "./pages/Play.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/collections/:id" element={<Collections/>} />
      <Route path="/play/:id" element={<Play/>} />
    </Routes>
  </BrowserRouter>
);
