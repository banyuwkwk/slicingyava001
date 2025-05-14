'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-6 py-4 bg-[#f9f5e7] transition-all duration-300 ${
        isSticky ? 'fixed top-0 w-full shadow-md z-50' : ''
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <img src="/logos/yava2.png" alt="YAVA Logo" width={80} height={30} />
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium text-black">
        <li>
          <a href="#" className="text-red-600">
            Lontar Sugar
          </a>
        </li>
        <li className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            Our Foods <span className="ml-1">&#9662;</span>
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md min-w-[150px] py-2 z-10">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-red-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  Product 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-red-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  Product 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-red-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  Product 3
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Ingredients
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            Company
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            YAVAKataMereka
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black">
            News & Event
          </a>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="flex items-center space-x-2 text-black">
        <span>ID</span>
        <button className="bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1">
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;