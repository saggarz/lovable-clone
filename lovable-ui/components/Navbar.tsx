import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4">
      {/* Logo & main navigation */}
      <div className="flex items-center gap-6 lg:gap-10">
        <a
          href="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-black hover:opacity-80 transition-opacity"
        >
          {/* Simple gradient square to mimic Soch logo */}
          <span className="inline-block w-5 h-5 sm:w-6 sm:h-6 rounded-sm bg-gradient-to-br from-orange-400 via-pink-500 to-blue-500" />
          Soch
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-black/80">
          <a href="#" className="hover:text-black transition-colors">
            Developers
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Business
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Tutorials
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Showcase
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
