import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Homesection from "@/components/Homesection/Homesection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "فود کرت سورنا",
  description: "سفارش آنلاین غذا، قهوه، شیرینی، و انواع خوراکی ها",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={inter.className}>
        <Homesection />
        {children}
      </body>
    </html>
  );
}
