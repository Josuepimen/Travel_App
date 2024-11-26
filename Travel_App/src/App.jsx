import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./Components/Navbar/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Travel from "./Components/Travel";

function App() {
  return (
    <Router >
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;