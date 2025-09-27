import React, { useState } from "react";
import { Link } from "react-router-dom";
import enmaxLogo from "../assets/images/logos/enmax-logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About Us", href: "/about", isRoute: true },
    { name: "Solutions", href: "/solutions", isRoute: true },
    { name: "Workarea", href: "/workarea", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  return (
    <nav className="bg-white shadow-xl fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={enmaxLogo}
                  alt="Enmax Engineering India Pvt Ltd"
                  className="h-12 w-14 object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                  Enmax Engineering
                </div>
                <div className="text-sm text-gray-600 -mt-1 font-medium">
                  India Pvt Ltd
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:text-orange-600 p-2 rounded-lg transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-lg">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 hover:bg-orange-50 block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
