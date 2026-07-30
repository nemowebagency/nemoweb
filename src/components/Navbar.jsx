import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/servizi', label: 'Servizi' },
    { path: '/contatti', label: 'Contatti' },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const hero = document.querySelector('[data-navbar-hero]');
    if (!hero) {
      setOverHero(false);
      return;
    }

    setOverHero(true);

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0, rootMargin: '-64px 0px 0px 0px' }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const transparent = overHero;

  const linkBase =
    "relative inline-block px-1 py-2 text-base font-medium text-slate-900 after:absolute after:-bottom-0.5 after:left-0 after:block after:h-0.5 after:w-0 after:bg-[#ff7351] after:transition-[width] after:duration-300 after:ease-out after:content-[''] hover:after:w-full";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        transparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-slate-200 bg-white/95 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            src="/Logo%20Nero.png"
            alt="Logo Nemo Web Agency"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkBase}${
                location.pathname === link.path
                  ? ' font-semibold after:w-full'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/richiedi-preventivo" className="btn-primary !py-2 !text-sm">
            Richiedi un preventivo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-2 text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-16 z-40 h-[calc(100vh-4rem)] bg-white shadow-lg transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full space-y-4 overflow-y-auto bg-white px-4 pb-8 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-[#ff7351]/10 text-[#ff7351]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/richiedi-preventivo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary mt-4 block w-full text-center"
          >
            Richiedi un preventivo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
