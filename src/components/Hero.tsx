import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SHOP_INFO } from '../data/fromagerieData';

interface HeroProps {
  onDiscoverClick: () => void;
  onFindUsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onFindUsClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      aria-label="Accueil de la Fromagerie La Boîte à Meuh"
    >
      {/* Background Image with warm gourmet grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=2000&q=85"
          alt="Sélection de fromages affinés et ambiance de la fromagerie La Boîte à Meuh"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
        />
        {/* Multi-layered soft gradient overlay: warm bronze, deep norman green tint, and dark bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1613] via-[#1A1613]/65 to-[#1A1613]/40" />
        <div className="absolute inset-0 bg-[#314A3D]/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(20,16,13,0.65)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Subtle artisanal location tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-[#F5EFE6] text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-xs"
        >
          <MapPin className="w-3.5 h-3.5 text-[#E6BA7E]" />
          <span>Cabourg • Côte Fleurie • Normandie</span>
          <span className="w-1 h-1 rounded-full bg-[#E6BA7E]" />
          <span className="text-[#E6BA7E] font-semibold">Artisan Fromager</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FAF7F2] tracking-tight leading-[1.08] mb-4 text-balance drop-shadow-sm"
        >
          La Boîte à Meuh
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E8DDD0] font-normal tracking-wide max-w-3xl mx-auto mb-6 drop-shadow-xs"
        >
          Fromagerie Cabourgeaise – L’âme du fromage normand
        </motion.p>

        {/* Descriptive micro-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="text-sm sm:text-base md:text-lg text-[#D6C7B7] max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Plus de 100 fromages affinés à cœur, nos 4 AOP normandes emblématiques, 
          notre teurgoule artisanale mijotée maison et les trésors de nos petits producteurs locaux.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto"
        >
          {/* Primary CTA Button */}
          <button
            id="hero-btn-discover"
            onClick={onDiscoverClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B87333] hover:bg-[#A36227] text-white text-base font-semibold shadow-lg shadow-[#B87333]/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Découvrir nos fromages</span>
            <ArrowRight className="w-4 h-4 text-[#FDEBD0]" />
          </button>

          {/* Secondary CTA Button */}
          <button
            id="hero-btn-find-us"
            onClick={onFindUsClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 text-[#FAF7F2] text-base font-medium backdrop-blur-md border border-white/25 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#E6BA7E]" />
            <span>Nous trouver</span>
          </button>
        </motion.div>

        {/* Feature badges row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#314A3D]/80 flex items-center justify-center text-[#E6BA7E] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#FAF7F2]">100+ Références</p>
              <p className="text-[11px] text-[#C5B5A5]">Affinage sur mesure</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#314A3D]/80 flex items-center justify-center text-[#E6BA7E] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#FAF7F2]">AOP Normandes</p>
              <p className="text-[11px] text-[#C5B5A5]">100% lait cru fermier</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#314A3D]/80 flex items-center justify-center text-[#E6BA7E] shrink-0">
              <span className="font-serif text-sm font-bold text-[#E6BA7E]">T</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#FAF7F2]">Teurgoule Maison</p>
              <p className="text-[11px] text-[#C5B5A5]">Recette ancestrale</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#314A3D]/80 flex items-center justify-center text-[#E6BA7E] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#FAF7F2]">Cœur de Cabourg</p>
              <p className="text-[11px] text-[#C5B5A5]">Av. Cdt Bertaux Levillain</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <button
        onClick={onDiscoverClick}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Faire défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
