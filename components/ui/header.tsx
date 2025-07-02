"use client";
import { useState } from 'react';
import { Home, User, GraduationCap, FileText, Search, Shield, Calendar } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'Officer Profile', icon: User },
  { href: '/resources', label: 'Education Hub', icon: GraduationCap },
  { href: '/mock-tests', label: 'Submit Request', icon: FileText },
  { href: '/track-request', label: 'Track Request', icon: Search },
  { href: '/login', label: 'Officer Login', icon: Shield },
  { href: '/admin/dashboard', label: 'Department Login', icon: Calendar },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BB</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Bilal Bhat IAS</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Side Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/30" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay"></div>
          {/* Drawer */}
          <nav className="relative w-80 max-w-full h-full bg-white shadow-xl flex flex-col p-0 animate-slide-in-left">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-lg font-semibold">Navigation</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 rounded hover:bg-gray-100">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
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
      )}
      <style jsx global>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
} 
