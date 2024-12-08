"use client";

import * as React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-inherit text-white py-3 px-6 shadow-none">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side: Logo */}
        <div className="text-3xl font-bold text-white">
          PopScore
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex space-x-8 bg-orange-400 px-5 py-3 rounded-full">
          <Link href='/movies' className="text-lg hover:text-gray-300 transition">
            Movies
          </Link>
          <Link href='/shows' className="text-lg hover:text-gray-300 transition">
            Shows
          </Link>
          <Link href='/movies' className="text-lg hover:text-gray-300 transition">
            Search
          </Link>
        </div>

        {/* Right Side: Profile Avatar */}
        <div>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-700 hover:border-gray-400 transition"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
