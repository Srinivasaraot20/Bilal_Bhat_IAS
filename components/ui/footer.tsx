import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center mb-2 text-blue-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /></svg>
            Srinagar, Jammu & Kashmir, India
          </div>
          <div className="flex items-center mb-2 text-blue-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            bilalbhatias@gmail.com
          </div>
          <div className="flex items-center text-blue-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6h10v7" /></svg>
            +91-XXXXXXXXXX
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Dr. Bilal</Link></li>
            <li><Link href="/resources" className="hover:underline">Education Hub</Link></li>
            <li><Link href="/mock-tests" className="hover:underline">Submit Request</Link></li>
            <li><Link href="/mock-tests" className="hover:underline">Track Request</Link></li>
            <li><Link href="/admin/dashboard" className="hover:underline">Officer Dashboard</Link></li>
            <li><Link href="/login" className="hover:underline">Department Login</Link></li>
          </ul>
        </div>
        {/* Connect With Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4 text-blue-300">
            <a href="https://www.instagram.com/bilalbhat_ias/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.25.75a1 1 0 110 2 1 1 0 010-2z" /></svg>
            </a>
            <a href="https://x.com/drbilalbhatias?s=11&t=4qh4iHNziFQJbNmqVdJ5Fg" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/drbilalbhatias/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm2 14v-7a4 4 0 00-4-4H6a4 4 0 00-4 4v7" /></svg>
            </a>
            <a href="https://www.youtube.com/results?search_query=Dr.+Bilal+Mohi-Ud-Din+Bhat+IAS" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.386.574A2.994 2.994 0 00.502 6.186C0 8.147 0 12 0 12s0 3.853.502 5.814a2.994 2.994 0 002.112 2.112C4.575 20.5 12 20.5 12 20.5s7.425 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.853 24 12 24 12s0-3.853-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="https://en.wikipedia.org/wiki/Bilal_Mohi-Ud-Din_Bhat" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center text-blue-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4a1 1 0 001 1h4m-5 8v6a2 2 0 002 2h3a2 2 0 002-2v-6m-7 0H5a2 2 0 01-2-2V5a2 2 0 012-2h7a2 2 0 012 2v6a2 2 0 01-2 2z" /></svg>
                Wikipedia Profile
              </a>
            </li>
            <li>
              <a href="https://www.tribuneindia.com/news/archive/features/kashmiri-man-from-remote-village-stands-10th-in-upsc-415469" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center text-blue-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
                Media Coverage
              </a>
            </li>
          </ul>
        </div>
        {/* Feedback & Suggestions */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Feedback & Suggestions</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-800 text-white rounded px-4 py-2 mb-2" />
            <input type="email" placeholder="Your Email" className="w-full bg-gray-800 text-white rounded px-4 py-2 mb-2" />
            <select className="w-full bg-gray-800 text-white rounded px-4 py-2 mb-2">
              <option>General Feedback</option>
              <option>Website Issue</option>
              <option>Request Guidance</option>
            </select>
            <textarea placeholder="Your message..." className="w-full bg-gray-800 text-white rounded px-4 py-2 mb-2" rows={3}></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              Send Feedback
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm px-4 max-w-7xl mx-auto w-full">
        <div>
          © 2024 Dr. Bilal Mohi-Ud-Din Bhat IAS. All rights reserved.<br />
          Dedicated to transparent governance and citizen service.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>
      </div>
    </footer>
  );
} 