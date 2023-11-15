"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const onClickPage = (pathname) => {
    router.push(pathname);
  };
  

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl">Event Navigator</div>
          <ul className="flex space-x-4">
            <li>
              <button className="font-bold text-white hover:text-cyan-950" onClick={() => onClickPage('/')}>Home</button>
            </li>
            <li>
              <button className="font-bold text-white hover:text-cyan-950" onClick={() => onClickPage('/about')}>About</button>
            </li>
            <li>
              <button className="font-bold text-white hover:text-cyan-950" onClick={() => onClickPage('/discovery')}>Discovery</button>
            </li>
            <li>
              <button className="font-bold text-white hover:text-cyan-950" onClick={() => onClickPage('/contact')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
