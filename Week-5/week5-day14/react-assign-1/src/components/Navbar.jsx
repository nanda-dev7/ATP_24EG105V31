import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-6 py-5">
      <h1 className="text-xl font-bold text-gray-800">LOGO</h1>

      <nav>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 md:gap-10">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Signup</li>
          <li className="cursor-pointer hover:text-blue-500">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;