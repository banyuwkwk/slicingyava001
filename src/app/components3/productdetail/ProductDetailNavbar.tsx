// ProductDetailNavbar.tsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductDetailNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F9F5F0] px-4 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#FE8301]">
          <Image
            src="/images/logo.png"
            alt="YAVA Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="flex space-x-6 md:space-x-8 hidden md:flex">
          <li>
            <Link
              href="/lontar-sugar"
              className="text-black hover:text-[#FE8301] transition-colors"
            >
              Lontar Sugar
            </Link>
          </li>
          <li className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-black hover:text-[#FE8301] flex items-center"
            >
              Our Foods ▾
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded shadow-lg z-50 py-2">
                <ul className="space-y-1">
                  {/* Tombol Back - All Foods */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      All Foods
                    </button>
                  </li>
                  {/* Tombol Back - Granola */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      Granola
                    </button>
                  </li>
                  {/* Tombol Back - Biscuits */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      Biscuits
                    </button>
                  </li>
                  {/* Tombol Back - Bar */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      Bar
                    </button>
                  </li>
                  {/* Tombol Back - Popcorn */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      Popcorn
                    </button>
                  </li>
                  {/* Tombol Back - Puffs */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      Puffs
                    </button>
                  </li>
                  {/* Tombol Back - Cashews */}
                  <li>
                    <button
                      onClick={() => {
                        window.history.back();
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-black hover:text-[#FF4500] transition-colors w-full text-left"
                    >
                      Cashews
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {/* Other Links */}
          <li>
            <Link
              href="/ingredients"
              className="text-black hover:text-[#FE8301] transition-colors"
            >
              Ingredients
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className="text-black hover:text-[#FE8301] transition-colors"
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              href="/yavakatamereka"
              className="text-black hover:text-[#FE8301] transition-colors"
            >
              YAVAKataMereka
            </Link>
          </li>
          <li>
            <Link
              href="/news-event"
              className="text-black hover:text-[#FE8301] transition-colors"
            >
              News & Event
            </Link>
          </li>
          <li>
            <span className="text-[#FE8301]">ID</span>
            <span className="text-red-500">EN</span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="mt-2 bg-white border rounded shadow-md w-full text-xs z-50">
              <ul className="space-y-2 text-black">
                <li>
                  <Link
                    href="/lontar-sugar"
                    className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                  >
                    Lontar Sugar
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="block px-4 py-2 hover:bg-[#FEB519] transition-colors w-full text-left"
                  >
                    Our Foods ▾
                  </button>
                  {isDropdownOpen && (
                    <ul className="pl-3 mt-1 space-y-1 border-l border-gray-300">
                      {/* Tombol Back - All Foods (Mobile) */}
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          All Foods
                        </button>
                      </li>
                      {/* Tombol Back - Granola (Mobile) */}
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          Granola
                        </button>
                      </li>
                      {/* Tombol Back - Biscuits (Mobile) */}
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          Biscuits
                        </button>
                      </li>
                      {/* Tambahan tombol back untuk lainnya */}
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          Bar
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          Popcorn
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          Puffs
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            window.history.back();
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                        >
                          Cashews
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Mobile - Other Links */}
                <li>
                  <Link
                    href="/ingredients"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                  >
                    Ingredients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/yavakatamereka"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                  >
                    YAVAKataMereka
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news-event"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-[#FEB519] transition-colors"
                  >
                    News & Event
                  </Link>
                </li>
                <li>
                  <span className="block px-4 py-2">ID</span>
                  <span className="block px-4 py-2 text-red-500">EN</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProductDetailNavbar;