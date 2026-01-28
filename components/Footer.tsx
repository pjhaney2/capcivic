'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/capcivic-logo.png"
              alt="CapCivic"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} CapCivic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
