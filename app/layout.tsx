import { Rubik } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

// components
import NavBar from './components/nav/nav';
import Footer from './components/footer/footer';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colosseum Combat',
  description:
    'Discover Colosseum Combat, a full stack martial arts gym that utilizes the new Server Components of Next 13.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
