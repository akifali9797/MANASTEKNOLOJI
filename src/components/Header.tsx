import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Anasayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Çözümler', href: '#solutions' },
  { label: 'İletişim', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3'
          : 'bg-brand-dark/40 backdrop-blur-xl py-4 lg:bg-transparent lg:backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 sm:gap-4 group">
            <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-white/70 shadow-lg shadow-black/25 transition-all duration-300 group-hover:scale-105 group-hover:ring-brand-red/40 group-hover:shadow-brand-red/20">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Manas Teknoloji logosu"
                className="h-11 w-11 object-contain p-1 sm:h-16 sm:w-16"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">MANAS</span>
              <span className="text-lg sm:text-xl font-light text-brand-red tracking-tight ml-1">TEKNOLOJİ</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-brand-gray hover:text-white transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/25 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-white/10 animate-slide-down">
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-brand-gray hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 mx-3 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 text-center"
              >
                Teklif Al
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
