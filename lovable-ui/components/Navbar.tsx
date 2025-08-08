import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4">
      {/* Logo & main navigation */}
      <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
        <a
          href="/"
          className="flex items-center gap-3 text-2xl sm:text-3xl font-display font-bold text-black hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          {/* SOCH logo - innovation and creativity */}
          <img
            src="https://images.pexels.com/photos/390426/pexels-photo-390426.png"
            alt="SOCH Logo - Innovation & Creativity"
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain filter drop-shadow-md"
          />
          <span className="bg-gradient-to-r from-orange-600 via-red-500 to-green-600 bg-clip-text text-transparent font-extrabold tracking-wide">
            SOCH
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-display font-medium text-black/80">
          <a href="#" className="hover:text-black transition-all duration-200 hover:scale-105 relative group">
            Developers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-black transition-all duration-200 hover:scale-105 relative group">
            Business
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-black transition-all duration-200 hover:scale-105 relative group">
            Tutorials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="hover:text-black transition-all duration-200 hover:scale-105 relative group">
            Showcase
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-2 sm:gap-4 text-sm">
        <a
          href="#"
          className="text-black/80 hover:text-black transition-colors hidden sm:block"
        >
          Sign In
        </a>
        <a
          href="#"
          className="px-3 py-2 sm:px-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md border border-orange-200"
        >
          Start Building
        </a>
      </div>
    </nav>
  );
}
