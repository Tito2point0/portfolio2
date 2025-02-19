"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";
import { GlowingEffect } from "../components/ui/glowingEffect"; // Import glowing effect

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="relative">
      {/* Glowing Effect Applied */}
      <GlowingEffect
  glow={true}
  borderWidth={15}  // ✅ Increase thickness
  spread={30}      // ✅ Expand glow range
  blur={30}         // ✅ Make glow more prominent
  proximity={250}   // ✅ Make glow appear even from far away
  variant="black"   // ✅ Ensure glow is white
  className="absolute inset-[-15px] w-[calc(100%+30px)] h-[calc(100%+30px)] z-[5] opacity-100"
  disabled={false}
/>


      {/* Navbar Content */}
      <div className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-white">
              Jason Vasquez <span className="text-blue-500">Portfolio</span>
            </a>
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
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
