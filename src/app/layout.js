import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Event Navigator',
  description: 'Event Navigator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />
              {/* <main className="my-0 py-16">{children}</main> */}
          <Footer />
      </body>
    </html>
  );
}
