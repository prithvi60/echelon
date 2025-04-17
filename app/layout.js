import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmoothScroll from "@/components/UI/SmoothScroll";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "VBCC 3D",
  description: "Generated by VBCC 3D app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {/* <NavBar /> */}
        {children}
        {/* <SmoothScroll />
        <Toaster />
        <Footer /> */}
      </body>
    </html>
  );
}
