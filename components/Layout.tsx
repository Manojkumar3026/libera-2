import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-libera-cream dark:bg-libera-darkBg">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-libera-rose to-libera-coral text-white py-2 px-4 text-center text-sm font-medium overflow-hidden whitespace-nowrap relative z-50">
        <div className="animate-marquee inline-block">
          <span className="mx-4">Get Flat 15% Off Today! Code: LIBERA15</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Free Shipping Across India</span>
          <span className="mx-4">•</span>
          <span className="mx-4">No Cost EMI Available</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Get Flat 15% Off Today! Code: LIBERA15</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-libera-cream/90 dark:bg-libera-darkBg/95 backdrop-blur-md border-b border-libera-rose/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Typographic Logo */}
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 group">
               <div className="relative">
                 <Heart className="w-8 h-8 text-libera-rose fill-libera-rose transform group-hover:scale-110 transition-transform duration-300" />
                 <div className="absolute inset-0 bg-libera-orchid opacity-20 blur-lg rounded-full animate-pulse"></div>
               </div>
               <span className="font-serif text-3xl font-bold tracking-tight text-libera-charcoal dark:text-white">
                 LIBERA
               </span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-wider font-medium hover:text-libera-rose transition-colors duration-200 ${
                      isActive ? 'text-libera-orchid font-bold' : 'text-libera-charcoal dark:text-gray-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-libera-rose/10 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-libera-rose" /> : <Moon className="w-5 h-5 text-libera-charcoal" />}
              </button>

              <button className="bg-libera-charcoal text-white px-6 py-2 rounded-full font-medium hover:bg-libera-rose transition-all shadow-lg hover:shadow-libera-rose/30 flex items-center gap-2 transform hover:-translate-y-0.5">
                <ShoppingBag size={18} /> Buy Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2"
              >
                {isDark ? <Sun className="w-5 h-5 text-libera-rose" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-libera-charcoal dark:text-white p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-libera-cream dark:bg-libera-darkBg border-b border-gray-200 dark:border-gray-700 animate-in slide-in-from-top-5">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-libera-rose/10 text-libera-rose'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button className="w-full mt-4 bg-libera-charcoal text-white px-6 py-3 rounded-full font-medium shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-libera-charcoal text-white pt-20 pb-8 rounded-t-[3rem] mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                 <Heart className="w-6 h-6 text-libera-rose fill-libera-rose" />
                 <span className="font-serif text-2xl font-bold text-white">LIBERA</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafted with love, trusted for comfort. We are dedicated to providing drug-free, gentle relief for women everywhere.
              </p>
              <div className="flex gap-4 pt-2">
                 <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-libera-rose cursor-pointer transition-all hover:scale-110">
                    <span className="sr-only">Facebook</span>F
                 </div>
                 <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-libera-rose cursor-pointer transition-all hover:scale-110">
                    <span className="sr-only">Instagram</span>I
                 </div>
                 <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-libera-rose cursor-pointer transition-all hover:scale-110">
                    <span className="sr-only">Twitter</span>T
                 </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-libera-rose">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><NavLink to="/about" className="hover:text-libera-rose transition-colors flex items-center gap-2">About Us</NavLink></li>
                <li><NavLink to="/how-it-works" className="hover:text-libera-rose transition-colors">How it Works</NavLink></li>
                <li><NavLink to="/support" className="hover:text-libera-rose transition-colors">Support & Manuals</NavLink></li>
                <li><NavLink to="/why-libera" className="hover:text-libera-rose transition-colors">Reviews</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-libera-rose">Legal & Certs</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-libera-mint" /> CDSCO Approved</li>
                <li><a href="#" className="hover:text-libera-rose transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-libera-rose transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-libera-rose transition-colors">Warranty Info</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-libera-rose">Contact Us</h4>
              <p className="text-gray-400 text-sm mb-2">Need a hand? We're here.</p>
              <p className="text-gray-400 text-sm">support@libera.com</p>
              <p className="text-gray-400 text-sm mt-4">+91 123 456 7890</p>
              <div className="mt-6">
                <span className="px-4 py-2 bg-libera-mint/10 text-libera-mint border border-libera-mint/30 rounded-lg text-xs font-semibold tracking-wider">
                  SECURE PAYMENT
                </span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500 font-medium tracking-wide">
            © {new Date().getFullYear()} LIBERA. All rights reserved. • Designed for Her.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;