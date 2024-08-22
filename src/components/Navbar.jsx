// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center p-4  w-full bg-inherit">
        <div className="text-xl font-bold bg-inherit">Logo</div>
        <button className="text-2xl md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`md:flex md:items-center bg-inherit md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#home" className="bg-inherit block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">
            Home
          </a>
          <a href="#about" className="bg-inherit block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">
            About
          </a>
          <a href="#services" className="bg-inherit block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">
            Services
          </a>
          <a href="#contact" className="bg-inherit block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

