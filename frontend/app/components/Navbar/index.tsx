"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  const [movieList, setMovieList] = useState<boolean>(false);
  const [showsList, setShowList] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>()


  return (
    <div className="relative bg-inherit text-white py-3 px-6 shadow-none mb-10">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Side: Logo */}
        <div className="text-3xl font-extrabold italic tracking-wide text-white">
          <Link href='/'>
            PopScore
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="absolute top-2.5 left-0 right-0 m-auto w-fit flex flex-col justify-between bg-orange-500 px-5 py-2 rounded-3xl tracking-wide italic z-10">
          <div className="space-x-8">
            <button onClick={() => { setMovieList((pv) => !pv); setShowList(false) }} className={`text-lg italic hover:text-black ${movieList ? "text-black" : "text-white"} transition font-extrabold`}>
              Movies
            </button>
            <button onClick={() => { setShowList((pv) => !pv); setMovieList(false) }} className={`text-lg italic hover:text-black ${showsList ? "text-black" : "text-white"} transition font-extrabold`}>
              Shows
            </button>
            <button className="text-lg italic hover:text-black transition font-extrabold">
              Search
            </button>
          </div>
          {/* movie dropdown */}
          {movieList && (
            <div className="top-full pt-4 pb-1 w-48">
              <ul className="space-y-2">
                <li><Link href='movies/now-playing' className="font-bold text-white hover:text-black">Now Playing</Link></li>
                <li><Link href='movies/popular' className="font-bold text-white hover:text-black">Popular</Link></li>
                <li><Link href='movies/top-rated' className="font-bold text-white hover:text-black">Top Rated</Link></li>
                <li><Link href='movies/upcoming' className="font-bold text-white hover:text-black">Upcoming</Link></li>
                <li><Link href='/movies/all' className="font-bold text-white hover:text-black">All Movies</Link></li>
              </ul>
            </div>
          )}
          {/* movie dropdown */}
          {showsList && (
            <div className="top-full pt-4 pb-1 w-48">
              <ul className="space-y-2">
                <li><Link href='shows/popular' className="font-bold text-white hover:text-black">Popular</Link></li>
                <li><Link href='shows/airing-today' className="font-bold text-white hover:text-black">Airing Today</Link></li>
                <li><Link href='shows/on-tv' className="font-bold text-white hover:text-black">On TV</Link></li>
                <li><Link href='shows/top-rated' className="font-bold text-white hover:text-black">Top Rated</Link></li>
                <li><Link href='/shows/all' className="font-bold text-white hover:text-black">All Shows</Link></li>
              </ul>
            </div>
          )}
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
