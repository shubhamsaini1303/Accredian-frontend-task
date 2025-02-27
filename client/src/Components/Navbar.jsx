
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-600">
        <img src="/Images/logo.webp" className='h-[40px] w-[130px] ml-8' alt="" />
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-blue-600">For Business</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">More</a>
          <button className="bg-gray-200 px-4 py-2 rounded">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Try for free</button>
        </nav>
        
        <button onClick={toggleMenu} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      
      <motion.div 
        initial={{ x: "100%" }} 
        animate={{ x: isOpen ? "0%" : "100%" }} 
        transition={{ duration: 0.3 }} 
        className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 flex flex-col p-6">
        <button onClick={toggleMenu} className="self-end mb-4">
          <X size={28} />
        </button>
        <a href="#" className="py-2 text-lg hover:text-blue-600" onClick={toggleMenu}>For Business</a>
        <a href="#" className="py-2 text-lg hover:text-blue-600" onClick={toggleMenu}>Resources</a>
        <a href="#" className="py-2 text-lg hover:text-blue-600" onClick={toggleMenu}>About Us</a>
        <a href="#" className="py-2 text-lg hover:text-blue-600" onClick={toggleMenu}>More</a>
        <button className="bg-gray-200 px-4 py-2 rounded mt-4" onClick={toggleMenu}>Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={toggleMenu}>Try for free</button>
      </motion.div>
    </header>
  );
}
