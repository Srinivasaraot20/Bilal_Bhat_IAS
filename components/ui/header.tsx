"use client";
import { useState } from 'react';
import { Home, Book, GraduationCap, FileText, Users, Menu, X, LifeBuoy } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/resources', label: 'IAS Resources', icon: GraduationCap },
  { href: '/books', label: 'My Books', icon: Book },
  { href: '/mock-tests', label: 'Mock Tests', icon: FileText },
  { href: '/guidance', label: 'Get Guidance', icon: LifeBuoy },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Left: Hamburger menu (mobile only) */}
        <div className="flex-1 flex items-center">
          <button
            className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{ zIndex: 60 }}
          >
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
        </div>
        {/* Center: Logo and title */}
        <div className="flex-1 flex items-center justify-center md:justify-start space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BB</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Bilal Bhat IAS</span>
        </div>
        {/* Right: Desktop nav or empty */}
        <div className="flex-1 flex items-center justify-end">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden transition-all duration-300 ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        ></div>
        {/* Sidebar Drawer */}
        <nav
          className={`relative w-72 max-w-full h-full bg-white shadow-xl flex flex-col p-0 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          tabIndex={menuOpen ? 0 : -1}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 bg-white z-10">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 rounded hover:bg-gray-100">
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col gap-1 px-2 py-4">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-800 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 border-t text-center text-xs text-gray-500 bg-gray-50">
            IAS Officer Portal<br />Dr. Bilal Mohi-Ud-Din Bhat IAS
          </div>
        </nav>
      </div>
    </header>
  );
} 
