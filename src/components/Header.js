import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 py-4 md:px-8">
        {/* Centered Logo */}
        <div className="flex justify-center">
          <div className="text-2xl md:text-3xl font-bold text-purple-800">Adeola Adenipekun</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center mt-4 space-x-8">
          <a href="#home" className="text-purple-800 hover:text-green-400">Home</a>
          <a href="#portfolio" className="text-purple-800 hover:text-green-400">Portfolio</a>
          <a href="#about" className="text-purple-800 hover:text-green-400">About</a>
          <a href="#services" className="text-purple-800 hover:text-green-400">Services</a>
          <a href="#contact" className="text-purple-800 hover:text-green-400">Contact</a>
        </nav>

        {/* Hamburger Menu Button for mobile */}
        <div className="absolute right-4 top-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-purple-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <a href="#home" className="text-purple-800 hover:text-green-400">Home</a>
            <a href="#about" className="text-purple-800 hover:text-green-400">About</a>
            <a href="#services" className="text-purple-800 hover:text-green-400">Services</a>
            <a href="#portfolio" className="text-purple-800 hover:text-green-400">Portfolio</a>
            <a href="#contact" className="text-purple-800 hover:text-green-400">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
