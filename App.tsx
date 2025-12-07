import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Menu, X, ChevronRight, Facebook, Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Magazines from './pages/Magazines';
import MagazineView from './pages/MagazineView';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Submissions from './pages/Submissions';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SpeedInsights />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50 selection:bg-rose-200">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/magazines" element={<Magazines />} />
              <Route path="/magazines/:id" element={<MagazineView />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/team" element={<Team />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
};

export default App;