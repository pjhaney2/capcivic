'use client';

import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/images/capcivic-logo.png"
            alt="CapCivic"
            width={180}
            height={50}
            className="h-10 md:h-14 w-auto"
          />
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#services"
            className="text-gray-600 hover:text-primary-blue transition-colors duration-300 hidden md:block"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-primary-blue transition-colors duration-300 hidden md:block"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-primary-blue transition-colors duration-300 hidden md:block"
          >
            Contact
          </a>
          {/* WBE Certification Badge */}
          <Image
            src="/images/wbe-seal.jpg"
            alt="Women's Business Enterprise Certified"
            width={100}
            height={56}
            className="h-10 md:h-14 w-auto"
          />
        </div>
      </div>
    </nav>
  );
}
