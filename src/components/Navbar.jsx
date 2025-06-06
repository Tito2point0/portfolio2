"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="relative">
      {/* Navbar Content with Highest z-index */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              Jason Vasquez <span className="text-blue-500">Portfolio</span>
            </a>
            <div
              className="w-7 h-5 relative cursor-pointer z-[9999] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
