import React, { useState, useEffect } from 'react';
import { RiMenu2Line, RiCloseLine } from '@remixicon/react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Section detection
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Sumit
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'text-white'
                      : 'text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-blue-400 to-purple-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-yellow-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                theme === 'dark' 
                  ? 'text-white' 
                  : 'text-gray-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <RiCloseLine size={24} /> : <RiMenu2Line size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-900'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.02 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="px-3 py-2">
              <button
                onClick={toggleTheme}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;