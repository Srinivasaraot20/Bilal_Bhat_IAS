import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/ui/footer';

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
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}