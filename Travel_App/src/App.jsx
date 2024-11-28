
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Navbar/Home";
import Contact from "./Components/Navbar/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Travel from "./Components/Travel";
import 'animate.css';
import './index.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); 
  };

  return (
    <Router>
      <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Travel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;