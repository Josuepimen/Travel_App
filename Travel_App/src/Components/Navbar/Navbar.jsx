import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaPlaneDeparture } from "react-icons/fa";
import 'animate.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-950 shadow-md fixed top-0 left-0 w-full z-50 animate__animated animate__fadeInDown">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-100">
          <Link to="/">
            <FaPlaneDeparture className='w-10 h-10 animate__animated animate__bounceIn' />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-100 hover:text-blue-500 animate__animated animate__fadeIn">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-100 hover:text-blue-500 animate__animated animate__fadeIn" to="/destination">
                Destination
              </Link>
            </li>
            <li>
              <Link className="text-gray-100 hover:text-blue-500 animate__animated animate__fadeIn" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-100 focus:outline-none animate__animated animate__pulse"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden animate__animated animate__fadeInDown">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <Link to="/" className="text-gray-100 hover:text-blue-500 animate__animated animate__fadeIn">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-100 hover:text-blue-500 animate__animated animate__fadeIn" to="/destination">
                Destination
              </Link>
            </li>
            <li>
              <Link className="text-gray-100 hover:text-blue-500 animate__animated animate__fadeIn" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;