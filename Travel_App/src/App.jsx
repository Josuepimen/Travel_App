import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Navbar/Home";
import Contact from "./Components/Navbar/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Travel from "./Components/Travel";
import 'animate.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
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
