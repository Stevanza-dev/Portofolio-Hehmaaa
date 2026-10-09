import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navItems = ["Home", "About", "Services", "Experience", "Work", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled to the very bottom
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection("contact");
        return;
      }

      const sections = [...navItems].map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY + 120; // Offset for the fixed navbar

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // If at the very top
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-page/80 px-6 backdrop-blur-md sm:px-10 lg:px-28">
      <a 
        href="#home" 
        className="flex items-center gap-3 text-xl font-bold tracking-[-0.08em]" 
        onClick={() => setIsOpen(false)}
      >
        <img src={logo} alt="HEHMAAA Logo" className="h-8 w-8 object-contain" />
        HEHMAAA
      </a>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 text-[12px] text-muted sm:flex">
        {navItems.map((item) => {
          const isActive = activeSection === item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-300 hover:text-white ${
                isActive ? "text-accent font-medium" : ""
              }`}
            >
              {item}
            </a>
          );
        })}
      </div>

      {/* Mobile Toggle */}
      <button
        className="text-white sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-20 border-b border-white/10 bg-page/95 px-6 py-6 shadow-xl backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col gap-5 text-base font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors duration-300 hover:text-white ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
