/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Zap, Menu, X, ChevronRight, Mail, MapPin, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import { Home } from './pages/Home';
import { Mission } from './pages/Mission';
import { Marketplace } from './pages/Marketplace';
import { Sponsors } from './pages/Sponsors';
import { Complaints } from './pages/Complaints';
import { Contact } from './pages/Contact';
import { Safety } from './pages/Safety';
import { Careers } from './pages/Careers';
import { About } from './pages/About';
import { Newsroom } from './pages/Newsroom';
import { Legal } from './pages/Legal';
import Privacy from './pages/Privacy';
import ComingSoon from './pages/ComingSoon';

// Components
import { AIChat } from './components/ai/AIChat';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggle}
      className="icon-box !w-12 !h-12 !rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Mission', href: '/mission' },
    { name: 'Safety', href: '/safety' },
    { name: 'Model', href: '/model' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Careers', href: '/careers' },
    { name: 'Complaints', href: '/complaints' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Legal', href: '/legal' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[250] transition-all duration-500 ${scrolled || isOpen ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100 dark:border-slate-900' : 'bg-transparent py-4'}`} aria-label="Main Navigation">
        <div className="section-container flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-brand/20">
              <Zap className="text-white w-5 h-5 fill-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white uppercase italic font-display leading-none">
              Spark<span className="text-brand">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                  location.pathname === link.href 
                  ? 'text-brand' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-brand hover:translate-y-[-1px]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-8 border-l border-slate-200 dark:border-slate-800 pl-8 h-8">
              <ThemeToggle />
              <Link to="/contact" className="px-10 py-4 bg-brand text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] hover:shadow-brand-glow hover:-translate-y-1 transition-all">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden space-x-2">
            <ThemeToggle />
            <button className="text-slate-900 dark:text-white p-2 relative z-[260]" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close Menu" : "Open Menu"} aria-expanded={isOpen}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="lg:hidden fixed inset-0 top-[76px] bg-white dark:bg-black z-[200] overflow-y-auto"
          >
            <div className="px-6 py-12 flex flex-col min-h-full pb-20">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link 
                      to={link.href} 
                      className={`text-2xl font-black uppercase tracking-tighter italic block py-1 ${
                        location.pathname === link.href ? 'text-brand' : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {link.name}<span className="text-brand">.</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-900"
              >
                <div className="grid grid-cols-2 gap-8 mb-10">
                   <div>
                      <h4 className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Help Desk</h4>
                      <p className="text-xs font-bold dark:text-white">help@spark.in</p>
                   </div>
                   <div>
                      <h4 className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Hub</h4>
                      <p className="text-xs font-bold dark:text-white">Ajmer Hub, India</p>
                   </div>
                </div>
                
                <Link to="/contact" className="w-full py-5 bg-brand text-white text-center rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] block shadow-lg shadow-brand/20">
                  Secure Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-16 border-t border-slate-100 dark:border-slate-900 relative z-10 transition-colors" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Content</h2>
      <div className="section-container">
        <div className="grid md:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Zap className="text-brand w-10 h-10 fill-brand group-hover:scale-110 transition-transform" />
              <span className="text-3xl font-bold dark:text-white uppercase tracking-tighter italic font-display">Spark<span className="text-brand">.</span></span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-snug mb-10 text-lg italic font-medium">
              Building a better and fairer ride marketplace in India.
            </p>
            <div className="flex gap-4">
              <div className="icon-box !w-10 !h-10 cursor-pointer">
                 <Globe className="w-5 h-5" />
              </div>
              <div className="icon-box !w-10 !h-10 cursor-pointer">
                 <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-black text-slate-900 dark:text-white text-[9px] uppercase tracking-[0.4em] mb-8 font-mono">Company</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest italic">
              <li><Link to="/about" className="hover:text-brand transition-colors">Our Story</Link></li>
              <li><Link to="/mission" className="hover:text-brand transition-colors">Goal</Link></li>
              <li><Link to="/newsroom" className="hover:text-brand transition-colors">News</Link></li>
              <li><Link to="/sponsors" className="hover:text-brand transition-colors">Partners</Link></li>
              <li><Link to="/safety" className="hover:text-brand transition-colors">Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 dark:text-white text-[9px] uppercase tracking-[0.4em] mb-8 font-mono">Help</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest italic">
              <li><Link to="/model" className="hover:text-brand transition-colors">Bidding</Link></li>
              <li><Link to="/complaints" className="hover:text-brand transition-colors">Complaints</Link></li>
              <li><Link to="/legal" className="hover:text-brand transition-colors">Legal</Link></li>
              <li><Link to="/careers" className="hover:text-brand transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-brand transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-black text-slate-900 dark:text-white text-[9px] uppercase tracking-[0.4em] mb-8 font-mono">Ajmer Hub</h4>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                 <MapPin className="w-5 h-5 text-brand flex-shrink-0 group-hover:scale-110 transition-transform" />
                 <div>
                    <span className="block font-bold dark:text-white text-base font-display tracking-tight italic">Ajmer Hub.</span>
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] font-mono">Rajasthan, India</span>
                 </div>
              </div>
              <div className="flex items-start space-x-4 group">
                 <Mail className="w-5 h-5 text-brand flex-shrink-0 group-hover:scale-110 transition-transform" />
                 <div>
                    <span className="block font-bold dark:text-white text-base font-display tracking-tight italic">help@spark.in</span>
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] font-mono">Support Email</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-slate-100 dark:bg-slate-900 mb-10" />
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.4em] gap-8 font-mono">
          <p>© 2026 Spark. All Rights Reserved.</p>
          <div className="flex space-x-10 italic opacity-60">
             <span className="text-brand">Made with love in India</span>
             <span>VERSION: 2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black selection:bg-brand selection:text-white scroll-smooth flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/model" element={<Marketplace />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}
