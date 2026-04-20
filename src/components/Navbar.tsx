import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <img src={logo} alt="Fittingz Logo" className="w-8 h-8 object-contain" />
           <div className="text-2xl font-black tracking-tight">
             <span className="text-primary">Fitt</span><span className="text-black">ingz</span>
           </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary/70 hover:text-primary transition-all font-semibold text-sm relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="https://fittingz.vercel.app/login"
            className="text-primary font-bold text-sm tracking-wide hover:opacity-70 transition-opacity"
          >
            Log In
          </a>
          <a 
            href="https://fittingz.vercel.app/register"
            className="bg-primary hover:opacity-90 text-white font-bold py-2.5 px-7 rounded-lg transition-all shadow-md text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={isOpen ? "heroicons:x-mark" : "heroicons:bars-3"} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 transition-all duration-300 shadow-xl overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary font-bold text-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-6 border-t border-gray-50">
            <a 
              href="https://fittingz.vercel.app/login"
              className="text-primary font-bold text-lg"
            >
              Log In
            </a>
            <a 
              href="https://fittingz.vercel.app/register"
              className="bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
