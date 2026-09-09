import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/fromagerieData';
import { GalleryCategory, GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all' as GalleryCategory, label: 'Toutes les photos' },
    { id: 'fromages' as GalleryCategory, label: 'Fromages & Affinage' },
    { id: 'plateaux' as GalleryCategory, label: 'Plateaux & Buffets' },
    { id: 'terroir' as GalleryCategory, label: 'Teurgoule & Terroir' },
    { id: 'boutique' as GalleryCategory, label: 'La Boutique' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const cardWidth = mobileScrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setMobileActiveIndex(index);
    }
  };

  const scrollMobileTo = (index: number) => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.offsetWidth * 0.85;
      mobileScrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setMobileActiveIndex(index);
    }
  };

  return (
    <section id="galerie" className="py-20 lg:py-28 bg-[#F5EFEB] text-[#2C241E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B87333]/15 text-[#935323] text-xs font-semibold uppercase tracking-wider mb-3">
              Instantanés Gourmands
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight">
              La galerie de la fromagerie
            </h2>
            <p className="text-sm sm:text-base text-[#6E5D4F] mt-2 max-w-xl">
              Plongez dans l’atmosphère de La Boîte à Meuh à Cabourg : plateaux sur mesure, fromages de tradition et spécialités normandes.
            </p>
          </div>

          {/* Desktop Filter Pills */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#314A3D] text-[#FAF7F2] shadow-xs'
                    : 'bg-white text-[#57493E] hover:bg-[#EAE1D4] border border-[#E0D5C7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. MOBILE ONLY: Fluid touch carousel with swipe (takes minimal vertical space) */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-3 px-1 text-xs text-[#7A6B5E]">
            <span>Glissez pour faire défiler ({filteredItems.length} photos)</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollMobileTo(Math.max(0, mobileActiveIndex - 1))}
                disabled={mobileActiveIndex === 0}
                className="p-1.5 rounded-full bg-white text-[#2C241E] disabled:opacity-30 border border-[#E0D5C7]"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollMobileTo(Math.min(filteredItems.length - 1, mobileActiveIndex + 1))}
                disabled={mobileActiveIndex === filteredItems.length - 1}
                className="p-1.5 rounded-full bg-white text-[#2C241E] disabled:opacity-30 border border-[#E0D5C7]"
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Touch-swipeable carousel container */}
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="snap-center shrink-0 w-[82vw] max-w-[340px] bg-white rounded-2xl overflow-hidden border border-[#E3D7C8] shadow-xs active:scale-98 transition-transform cursor-pointer"
              >
                <div className="relative aspect-4/3 bg-[#EBE3D7] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {item.tag && (
                    <span className="absolute top-2.5 left-2.5 bg-[#1C1814]/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                  <span className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 text-[#2C241E] flex items-center justify-center shadow-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="p-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B87333]">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#2C241E] mt-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B5A4D] mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator Mobile */}
          <div className="flex justify-center items-center gap-1.5 mt-3">
            {filteredItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollMobileTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  mobileActiveIndex === i ? 'w-6 bg-[#314A3D]' : 'w-1.5 bg-[#D4C7B8]'
                }`}
                aria-label={`Aller à la photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 2. DESKTOP ONLY: Elegant curated grid layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E3D7C8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#EBE3D7]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1C1814]/0 group-hover:bg-[#1C1814]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#2C241E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                {item.tag && (
                  <span className="absolute top-3 left-3 bg-[#1C1814]/85 backdrop-blur-xs text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-xs">
                    {item.tag}
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#B87333] uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#2C241E] mt-1 leading-snug group-hover:text-[#314A3D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B5A4D] mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 bg-[#1C1814]">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#B87333] uppercase tracking-wider">
                  {activeModalItem.categoryLabel}
                </span>
                {activeModalItem.tag && (
                  <span className="px-2 py-0.5 rounded-full bg-[#314A3D]/10 text-[#314A3D] text-[11px] font-medium">
                    {activeModalItem.tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-[#5C4D42] mt-2 leading-relaxed">
                {activeModalItem.description}
              </p>
              <div className="mt-5 pt-4 border-t border-[#E3D7C8] flex items-center justify-between text-xs text-[#7A6B5F]">
                <span>La Boîte à Meuh • Cabourg</span>
                <span>Artisan Fromager & Crémier</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
