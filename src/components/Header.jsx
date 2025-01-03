import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-gray-100">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Logo</h1>
      </div>
      <nav className="hidden sm:flex">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-500">Home</a></li>
          <li><a href="#" className="hover:text-gray-500">Product</a></li>
          <li><a href="#" className="hover:text-gray-500">About</a></li>
          <li><a href="#" className="hover:text-gray-500">Contact</a></li>
        </ul>
      </nav>
      <div className="sm:hidden">
        <button 
          aria-label="Toggle Menu" 
          onClick={() => setShowMenu(!showMenu)} 
          className="focus:outline-none" 
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <nav 
            className={`absolute inset-x-0 top-0 bg-white transition-transform duration-300 ease-in-out ${showMenu ? 'translate-y-0' : '-translate-y-full'}`} 
            aria-hidden={!showMenu} 
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="#" className="hover:text-gray-500">Home</a></li>
              <li><a href="#" className="hover:text-gray-500">Product</a></li>
              <li><a href="#" className="hover:text-gray-500">About</a></li>
              <li><a href="#" className="hover:text-gray-500">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;