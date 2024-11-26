import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiCommercialAirplane } from "react-icons/gi";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">
          <GiCommercialAirplane className='w-10 h-10'/></Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/destination">
                Destination
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/hola">
                hola
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:text-blue-500" to="/contact">
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