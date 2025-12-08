import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Magazines', path: '/magazines' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Team', path: '/team' },
  { name: 'Submissions', path: '/submissions' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7] border-b border-gray-900 h-20 flex items-center transition-all"
    >
      <div className="w-full flex items-center justify-between h-full pl-6 pr-6 lg:pr-0">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group pl-2">
          <img src="/icons/udaan-logo.svg" alt="UDAAN Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`h-full flex items-center px-8 text-xs font-bold uppercase tracking-widest border-l border-gray-900 hover:bg-gray-900 hover:text-white transition-all ${
                location.pathname === link.path ? 'bg-primary text-white border-l-primary' : 'text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Closing border for the layout */}
          <div className="w-6 h-full border-l border-gray-900 bg-texture"></div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-900 hover:text-primary transition-colors border border-gray-900 rounded-none hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

    {/* Mobile Drawer */}
    <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-full bg-[#FDFBF7] border-b border-gray-900 z-40 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`p-6 text-center font-serif text-2xl border-b border-gray-900 last:border-none hover:bg-gray-100 ${
                    location.pathname === link.path ? 'text-primary font-black italic' : 'text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;