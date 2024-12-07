"use client";

import * as React from "react";

const Navbar = () => {
  return (
    <div className="bg-black">

      <nav>
        <div>
          <span>PopScore</span>
        </div>
        <div>
          <span>Movies</span>
          <span>Series</span>
        </div>
        <div>
          <span>Avatar</span>
        </div>
      </nav>
    </div>
    // <nav className="flex-column mx-auto max-w-7xl items-center justify-between bg-black">
    //   {/* <!-- Left Side: Logo --> */}
    //   <div className="text-2xl font-bold">PopScore</div>

    //   {/* <!-- Middle: Navigation Links --> */}
    //   <div className="flex space-x-8">
    //     <a href="#movies" className="text-lg transition hover:text-gray-300">
    //       Movies
    //     </a>
    //     <a href="#series" className="text-lg transition hover:text-gray-300">
    //       Series
    //     </a>
    //     <a href="#search" className="text-lg transition hover:text-gray-300">
    //       Search
    //     </a>
    //   </div>

    /* <!-- Right Side: Profile Avatar --> */
    /* <div>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile Avatar"
          className="h-10 w-10 rounded-full border-2 border-gray-700 transition hover:border-gray-400"
        />
       </div> */
    // </nav>
  );
};

export default Navbar;
