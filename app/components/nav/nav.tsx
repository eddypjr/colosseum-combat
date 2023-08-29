import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/schedule" className="text-gray-300 hover:text-white">
            Schedule
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/classes" className="text-gray-300 hover:text-white">
            Classes
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
        <div >
          <button className="text-gray-300 hover:text-white">Join Now</button>
        </div>
      </div>
    </nav>
  );
}
