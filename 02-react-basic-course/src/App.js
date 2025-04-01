import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About.jsx";
import { Posts } from "./pages/Posts.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="navbar"></div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
