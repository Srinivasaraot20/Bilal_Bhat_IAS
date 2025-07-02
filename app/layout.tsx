import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/ui/footer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Bilal Mohi-Ud-Din Bhat IAS - IAS Journey & UPSC Resources',
  description: 'AIR-10 UPSC 2016 | Indian Forest Officer | Mentor to UPSC Aspirants | Expert guidance and resources for civil services preparation',
  keywords: 'UPSC, IAS, Civil Services, Dr. Bilal Mohi-Ud-Din Bhat IAS, UPSC preparation, mock tests, study materials',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BB</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Bilal Bhat IAS</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-blue-600 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</a>
              <a href="/books" className="text-gray-700 hover:text-blue-600 transition-colors">Books</a>
              <a href="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors">Mock Tests</a>
              <a href="/guidance" className="text-gray-700 hover:text-blue-600 transition-colors">Guidance</a>
              <a href="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors">Success Stories</a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</a>
            </nav>
            <button
              className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <nav className="flex flex-col p-4 space-y-2">
                <a href="/" className="text-blue-600 font-medium py-2">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors py-2">About</a>
                <a href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Resources</a>
                <a href="/books" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Books</a>
                <a href="/mock-tests" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Mock Tests</a>
                <a href="/guidance" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Guidance</a>
                <a href="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Success Stories</a>
                <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Blog</a>
                <a href="/login" className="text-gray-700 hover:text-blue-600 transition-colors py-2">Login</a>
              </nav>
            </div>
          )}
        </header>
        <div className="flex-1 flex flex-col pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
