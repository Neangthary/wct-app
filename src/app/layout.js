import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Basic } from "next/font/google";

export const metadata = {
  title: "Event Hunt",
  description: "Event Navigator",
};

const basic = Basic({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={basic.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
