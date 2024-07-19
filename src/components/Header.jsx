import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 rounded-xl w-[95vw] fixed left-[50%] top-5 -translate-x-1/2 z-50">
      <div className="flex justify-between items-center">
        <Link to="/home">
          <img
            src="logo.png"
            alt="Logo"
            className="w-8 sm:w-10 hover:scale-110 transition-transform cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link to="/rechner" className="hover:text-blue-200 transition-colors">
            Rechner
          </Link>
          <Link to="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link
            to="/settings"
            className="hover:text-blue-200 transition-colors"
          >
            Settings
          </Link>
        </nav>

        <button className="hidden md:block hover:text-blue-200 transition-colors">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <Link
            to="/rechner"
            className="block py-2 hover:text-blue-200 transition-colors"
          >
            Rechner
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-blue-200 transition-colors"
          >
            About
          </Link>
          <Link
            to="/settings"
            className="block py-2 hover:text-blue-200 transition-colors"
          >
            Settings
          </Link>
          <button className="block py-2 hover:text-blue-200 transition-colors">
            Login
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
