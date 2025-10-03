import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Fotter from "./components/Fotter";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Codes from "./pages/Codes";
import Assets from "./pages/Assets";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar with responsive width */}
        <div className="w-20 sm:w-64 flex-shrink-0 h-full border-r border-gray-600">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/codes" element={<Codes />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default App;