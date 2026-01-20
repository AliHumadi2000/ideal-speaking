
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'My Services', href: '#classes' },
    { name: 'Why Me', href: '#features' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'py-5'}`} style={{ backgroundColor: isScrolled ? 'white' : 'rgba(253, 252, 250, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#2c2416' }}>
              Ideal<span style={{ color: '#c9a961' }}>Speaking</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: '#2c2416' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#c9a961'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#2c2416'}
                >
                  {link.name}
                </a>
              ))}
              <button className="px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md" style={{ backgroundColor: '#2c2416', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a3f2e'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2c2416'}>
                Schedule Call
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              style={{ color: '#2c2416' }}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-xl transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-md"
              style={{ color: '#2c2416' }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#c9a961';
                e.currentTarget.style.backgroundColor = '#f9f6f1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#2c2416';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 rounded-xl font-bold" style={{ backgroundColor: '#2c2416', color: 'white' }}>
            Schedule Free Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
