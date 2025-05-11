"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white fixed w-full z-50 shadow-md" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/navbarimage/Logo - White (1).png"
                alt="YAVA Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-200 transition">
              Lontar Sugar
            </Link>
            <Link href="/tentang" className="text-sm font-medium hover:text-gray-200 transition">
              Our Foods
            </Link>
            <Link href="/layanan" className="text-sm font-medium hover:text-gray-200 transition">
              Ingredients
            </Link>
            <Link href="/kontak" className="text-sm font-medium hover:text-gray-200 transition">
              Company
            </Link>
            <Link href="/kata-mereka" className="text-sm font-medium hover:text-gray-200 transition">
              YAVAKataMereka
            </Link>
            <Link href="/news" className="text-sm font-medium hover:text-gray-200 transition">
              News & Event
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-gray-200 transition">
              ID <span className="mx-1">|</span> EN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-orange-600 pb-4`}>
        <div className="px-4 pt-2 pb-3 space-y-2">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Lontar Sugar
          </Link>
          <Link
            href="/tentang"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Foods
          </Link>
          <Link
            href="/layanan"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Ingredients
          </Link>
          <Link
            href="/kontak"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Company
          </Link>
          <Link
            href="/kata-mereka"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            YAVAKataMereka
          </Link>
          <Link
            href="/news"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            News & Event
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            ID | EN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;