import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-cyan-800 text-white p-4 flex items-center justify-between">
      <div className="text-lg font-semibold">Post Feed Application</div>
      <div className="space-x-6">
        <a href="#home" className="hover:text-cyan-200">
          Home
        </a>
        <a href="#about" className="hover:text-cyan-200">
          About
        </a>
        <a href="#contact" className="hover:text-cyan-200">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
