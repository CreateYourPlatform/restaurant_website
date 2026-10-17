//this navbar is for restaurant


import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'ChefSection', href: '#chef'}
];

export default function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="restaurant-nav luxury-nav">
      <div className="luxury-nav-inner">

        {/* Logo */}
        <a
          href="#home"
          className="luxury-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          <span className="logo-main">Your Restaurant</span>
          <span className="logo-sub">FINE DINING</span>
        </a>

        {/* Desktop Navigation */}
        <div className="luxury-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Reservation */}
        <button
          className="luxury-reservation"
          onClick={() => handleNavClick('#reservation')}
        >
          Reserve a Table
        </button>

        {/* Mobile */}
        <button
          className="luxury-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`luxury-mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}

        <button
          onClick={() => handleNavClick('#reservation')}
        >
          Reserve a Table
        </button>
      </div>
    </nav>
  );
}