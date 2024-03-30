import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Aman Mathur",
  description: "This is Aman's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
