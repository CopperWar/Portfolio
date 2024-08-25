import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar1 from "./components/navbar/navbar1";
import Navbar2 from "./components/navbar/navbar2";
import Navbar3 from "./components/navbar/navbar3";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Cv from "./pages/cv/cv";
import Ideas from "./pages/ideas/ideas";
import Projects from "./pages/Projects/projects";
import "./App.css"; // Import the CSS file for scrollbar styling

const App = () => {
  return (
    <div className="flex h-screen w-screen font-dosis">
      {/* Sidebar */}
      <div className="w-[14.2857142857%] border-r-2 border-gray-200 fixed top-0 bottom-0 left-0 bg-white">
        <Navbar1 />
        <Navbar2 />
        <Navbar3 />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-[14.2857142857%] overflow-auto hide-scrollbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
