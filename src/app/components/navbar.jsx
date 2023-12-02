"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickPage = (pathname) => {
    router.push(pathname);
    // Close the menu on mobile after clicking a link
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-2xl">Event Hunt</div>

          {/* Responsive Menu Button */}
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation Links - Hidden on mobile, visible on larger screens */}
          <ul className="hidden lg:flex space-x-10">
            <li>
              <button
                className="font-bold text-gray-700 hover:text-black"
                onClick={() => onClickPage("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="font-bold text-gray-700 hover:text-black"
                onClick={() => onClickPage("/discovery")}
              >
                Discovery
              </button>
            </li>
            <li>
              <button
                className="font-bold text-gray-700 hover:text-black"
                onClick={() => onClickPage("/about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="font-bold text-gray-700 hover:text-black"
                onClick={() => onClickPage("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Responsive Menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full max-h-screen overflow-y-auto bg-white z-10 transition-opacity duration-300 opacity-100">
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <button
                    className="font-bold text-gray-700 hover:text-black"
                    onClick={() => onClickPage("/")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="font-bold text-gray-700 hover:text-black"
                    onClick={() => onClickPage("/discovery")}
                  >
                    Discovery
                  </button>
                </li>
                <li>
                  <button
                    className="font-bold text-gray-700 hover:text-black"
                    onClick={() => onClickPage("/about")}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="font-bold text-gray-700 hover:text-black"
                    onClick={() => onClickPage("/contact")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Register and Sign In Buttons */}
          <div className="flex flex-row lg:flex">
            <button className="text-blue-500 font-normal bg-transparent border border-blue-500 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 hover:border-blue-600 hover:text-white">
              Register
            </button>
            <button className="text-white font-normal bg-blue-500 px-4 py-2 rounded-md ml-4 transition duration-300 ease-in-out hover:bg-blue-600">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
