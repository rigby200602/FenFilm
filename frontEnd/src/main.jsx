import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import collection from "./data/collections.json"
import App from "./App.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Collections from "./pages/Collections.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/collections/:id" element={<Collections data={collection}/>} />
    </Routes>
  </BrowserRouter>
);
