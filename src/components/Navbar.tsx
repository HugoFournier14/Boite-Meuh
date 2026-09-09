import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShoppingBag, MapPin, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/fromagerieData';

interface NavbarProps {
  onOpenOrderModal: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Notre Univers', href: '#univers' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Services & Commandes', href: '#services' },
    { label: 'Infos & Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD4] py-3'
          : 'bg-gradient-to-b from-[#1C1814]/80 via-[#1C1814]/40 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden"
            id="brand-logo"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'bg-[#314A3D] text-[#F5EFE6]'
                  : 'bg-[#FAF7F2] text-[#314A3D] shadow-md'
              }`}
            >
              {/* Subtle artisanal emblem: cheese / cow silhouette touch */}
              <span className="font-serif text-xl font-bold tracking-tight">M</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-semibold tracking-tight transition-colors leading-tight ${
                  isScrolled ? 'text-[#2C241E]' : 'text-white'
                }`}
              >
                La Boîte à Meuh
              </span>
              <span
                className={`text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-colors ${
                  isScrolled ? 'text-[#7D6B5D]' : 'text-[#E3D9CE]'
                }`}
              >
                Cabourg • Normandie
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#B87333] ${
                  isScrolled ? 'text-[#4A3E35]' : 'text-stone-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-button"
              href={`tel:${SHOP_INFO.phoneClean}`}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                isScrolled
                  ? 'bg-[#EFE9E0] text-[#2C241E] hover:bg-[#E4DCCE]'
                  : 'bg-white/15 text-white backdrop-blur-xs hover:bg-white/25 border border-white/20'
              }`}
              title="Appeler la fromagerie"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87333]" />
              <span>{SHOP_INFO.phone}</span>
            </a>

            <button
              id="nav-order-cta"
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#314A3D] hover:bg-[#25392F] shadow-xs transition-transform active:scale-95 duration-150 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#E3D4BC]" />
              <span>Commander un plateau</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-mobile-order-btn"
              onClick={() => onOpenOrderModal()}
              className="sm:hidden p-2 rounded-full bg-[#314A3D] text-white text-xs font-medium shadow-xs"
              aria-label="Commander un plateau"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              id="nav-toggle-mobile"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#2C241E] hover:bg-[#EFE9E0]' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu principal"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="lg:hidden mt-3 pt-4 pb-5 px-4 bg-[#FAF7F2] text-[#2C241E] rounded-2xl shadow-xl border border-[#E8DFD4] animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[#2C241E] hover:bg-[#EFE9E0] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[#E8DFD4] flex flex-col gap-2.5">
                <a
                  href={`tel:${SHOP_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#EFE9E0] text-sm font-semibold text-[#2C241E]"
                >
                  <Phone className="w-4 h-4 text-[#B87333]" />
                  <span>Appeler : {SHOP_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#314A3D] text-sm font-semibold text-white shadow-md active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4 text-[#E3D4BC]" />
                  <span>Commander un plateau</span>
                </button>

                <div className="mt-2 text-center text-xs text-[#7D6B5D] flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#314A3D]" />
                  <span>1 av. du Cdt Bertaux Levillain, Cabourg</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
