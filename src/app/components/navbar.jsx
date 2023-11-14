// components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-white font-bold text-2xl">Event Navigator</a>
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="text-white">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
