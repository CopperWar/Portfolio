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

const App = () => {
  return (
    <div className="font-dosis">
      <div className="flex w-screen h-screen">
        <div className="w-1/7 flex flex-col border-r-2 border-gray-300 min-h-0">
          <Navbar1 className=" flex-shrink-0" />
          <Navbar2 className=" flex-shrink-0" />
          <Navbar3 className=" flex-shrink-0" />
        </div>
        <div className="w-6/7">
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
    </div>
  );
};

export default App;
