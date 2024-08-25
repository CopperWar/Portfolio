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
    <div className="flex flex-col h-screen w-screen font-dosis">
      {/* Main layout container */}
      <div className="flex flex-row flex-grow ">
        {/* Sidebar */}
        <div className="basis-1/7 border-r-2 border-gray-200 ">
          <Navbar1 />
          <Navbar2 />
          <Navbar3 />
        </div>

        {/* Main content */}
        <div className=" basis-6/7 flex ">
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

      {/* Footer row */}
      <div className="flex justify-center border-t-2 p-4 border-gray-200">
        {/* Footer content */}
        Chinmay Pendam
      </div>
    </div>
  );
};

export default App;
