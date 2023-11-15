import Home from "./home/page";
import About from "./about/page";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Navigator",
  description: "Event Navigator",
};

export default function Page() {
  return (
    <main>
      <Home />
      <About />
    </main>
  );
}
