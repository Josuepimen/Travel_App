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
        <Routes>
          <Route path="/" element={<Home/>} /> {/* Página de inicio vacía */}
          <Route path="/destination" element={<Travel />} /> {/* Ruta para Travel */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
