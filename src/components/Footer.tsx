import React from 'react';
import { ArrowUp, Phone, MapPin, Facebook, Heart } from 'lucide-react';
import { SHOP_INFO } from '../data/fromagerieData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1814] text-[#FAF7F2] pt-16 pb-12 border-t border-[#332A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF7F2] text-[#314A3D] flex items-center justify-center font-serif text-lg font-bold">
                M
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {SHOP_INFO.name}
              </span>
            </div>
            <p className="font-serif italic text-sm text-[#E3D4BC]">
              {SHOP_INFO.subtitle}
            </p>
            <p className="text-xs text-[#A89889] leading-relaxed max-w-md">
              Fromagerie artisanale, crèmerie et épicerie fine au cœur de Cabourg. 
              Plus de 100 fromages affinés, 4 AOP normandes, teurgoule maison mijotée au four 
              et le goût authentique du terroir.
            </p>
          </div>

          {/* Quick Access */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-[#E6BA7E] uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-[#C7B7A6]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#univers" className="hover:text-white transition-colors">
                  Notre univers & savoir-faire
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-white transition-colors">
                  Galerie photo
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Plateaux & commandes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Horaires & contact à Cabourg
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-[#E6BA7E] uppercase tracking-wider">
              La Boutique
            </p>
            <div className="text-xs text-[#C7B7A6] space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E6BA7E] shrink-0 mt-0.5" />
                <span>{SHOP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E6BA7E] shrink-0" />
                <a href={`tel:${SHOP_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {SHOP_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Facebook className="w-3.5 h-3.5 text-[#E6BA7E] shrink-0" />
                <a
                  href={SHOP_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook La Boîte à Meuh
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7F70]">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} La Boîte à Meuh – Fromagerie Cabourgeaise. Fait avec passion en Normandie.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
