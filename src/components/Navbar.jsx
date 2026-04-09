import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow">
            <Sparkles size={18} className="text-white" />
          </div>
          <div className="text-left">
            <p
              className={`font-display font-bold leading-none text-lg tracking-tight transition-colors ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              Samrudhi Events
            </p>
            <p
              className={`font-accent text-xs tracking-widest transition-colors ${
                scrolled ? 'text-gold-500' : 'text-gold-300'
              }`}
            >
              PUNE
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`font-body text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  scrolled ? 'text-charcoal' : 'text-white'
                } ${active === link.href ? 'text-gold-500' : 'hover:text-gold-500'}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                    active === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contact')}
          className="hidden lg:inline-flex btn-gold text-sm py-2.5 px-6"
        >
          Book Now
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden transition-colors ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md px-6 pt-4 pb-6 flex flex-col gap-5 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-left font-body font-medium text-charcoal hover:text-gold-500 transition-colors py-1 border-b border-gold-100 ${
                active === link.href ? 'text-gold-500' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-gold text-sm w-full justify-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
