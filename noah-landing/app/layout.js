// app/layout.js
import './globals.css'; // Import global styles
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming your components are set up like this
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-[#fff7e4] text-black font-sans">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 flex items-center justify-end p-4 z-50 bg-[#fff7e4] md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-16 left-0 w-full bg-[#fff7e4] p-4 z-40 md:hidden">
            <a href="mailto:noah@noahsacre.com?subject=hey%20what's%20up" className="block py-2">Contact</a>
          </div>
        )}

        {/* Main Content (Children) */}
        <main>{children}</main>

        {/* Footer */}
        <footer id="contact" className="p-8 text-center text-sm text-gray-500">
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/speelburg/" target="_blank" rel="noopener noreferrer" className="underline">insta</a>
            <a href="https://www.youtube.com/speelburg" target="_blank" rel="noopener noreferrer" className="underline">youtube</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
