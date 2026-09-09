import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, Flame, HeartHandshake, CheckCircle2, ChevronRight } from 'lucide-react';
import { TERROIR_PILLARS } from '../data/fromagerieData';

interface UniversSectionProps {
  onExploreServices: () => void;
}

export const UniversSection: React.FC<UniversSectionProps> = ({ onExploreServices }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'fromages',
      title: 'Plus de 100 Fromages Affinés',
      shortTitle: '100+ Fromages',
      badge: 'Sélection d’artisan',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1000&q=80',
      description: 'Chaque meule sélectionnée à la main fait l’objet d’un affinage méticuleux. Nous suivons l’évolution des croûtes, des textures et des arômes pour vous offrir des fromages à leur pic absolu de maturité.',
      bullets: [
        'Pâtes fleuries, persillées, pressées cuites et non cuites',
        'Fromages fermiers au lait cru de petits producteurs passionnés',
        'Chèvres de saison, brebis des Pyrénées et trésors des alpages',
        'Conseils personnalisés de dégustation et découpe sur mesure',
      ],
    },
    {
      id: 'aop-normandie',
      title: 'Les 4 Trésors AOP de Normandie',
      shortTitle: '4 AOP Normandes',
      badge: 'Fierté Régionale',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&w=1000&q=80',
      description: 'L’âme de notre terroir cabourgeais réside dans nos grands classiques normands, travaillés avec le plus profond respect de la tradition fermière.',
      bullets: [
        'Camembert de Normandie AOP au lait cru, moulé à la louche manuellement',
        'Pont-l’Évêque crémeux aux effluves d’herbe fraîche et de sous-bois',
        'Livarot « Le Colonel » ceint de ses laîches naturelles pour un caractère affirmé',
        'Neufchâtel en cœur généreux du Pays de Bray à la texture fondante',
      ],
    },
    {
      id: 'teurgoule',
      title: 'La Véritable Teurgoule Artisanale',
      shortTitle: 'Teurgoule Maison',
      badge: 'Spécialité Cabourgeaise',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
      description: 'Fleuron de la gastronomie normande, notre teurgoule est préparée artisanalement et cuite très lentement pendant 5 à 6 heures dans le traditionnel plat en grès.',
      bullets: [
        'Lait entier fermier de vaches normandes sélectionné en direct',
        'Cannelle parfumée infusée longuement sans artifice',
        'Une croûte dorée caramélisée inimitable et un cœur ultra crémeux',
        'Disponible en parts gourmandes ou en jatte familiale sur commande',
      ],
    },
    {
      id: 'terroir-bio',
      title: 'Crémerie, Bio, Cidres & Épicerie Fine',
      shortTitle: 'Crémerie & Terroir',
      badge: 'Producteurs Locaux',
      icon: HeartHandshake,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
      description: 'Bien plus qu’une fromagerie, une véritable épicerie de terroir rassemblant le meilleur de la Normandie et des pépites gourmandes d’artisans amis.',
      bullets: [
        'Beurre cru de baratte au sel de mer et crème fraîche d’Isigny fermière',
        'Œufs frais de plein air et produits laitiers bio de proximité',
        'Charcuterie fine de tradition : jambon blanc à l’os, saucissons de pays',
        'Cidres fermiers médaillés, poirés effervescents et jus de pomme d’artisan',
      ],
    },
  ];

  const currentPillar = pillars[activeTab];

  return (
    <section id="univers" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#2C241E] relative overflow-hidden">
      {/* Decorative subtle texture watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE6DA]/40 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#314A3D]/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#314A3D]/10 text-[#314A3D] text-xs font-semibold uppercase tracking-wider mb-3">
            Savoir-Faire & Terroir
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight mb-5">
            Notre univers : l’amour du goût & du geste
          </h2>
          <p className="text-base sm:text-lg text-[#6E5D4F] leading-relaxed">
            À La Boîte à Meuh, nous célébrons le fromage comme une histoire d’hommes, de saisons et de pâturages. 
            Découvrez une collection vivante de plus de 100 fromages de caractère, affinés avec rigueur et bienveillance, 
            aux côtés de notre célèbre teurgoule et des délices des producteurs normands.
          </p>
        </div>

        {/* 4 Feature Cards Grid / Interactive Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#B87333] shadow-md ring-1 ring-[#B87333]/20'
                    : 'bg-[#F4EEE6] border-[#E8DFD4] hover:bg-white/80 hover:border-[#D9CEC1]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? 'bg-[#314A3D] text-[#FAF7F2]' : 'bg-white text-[#314A3D]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                  {pillar.badge}
                </div>
                <div className="font-serif text-base sm:text-lg font-bold text-[#2C241E] leading-snug line-clamp-1 sm:line-clamp-2">
                  {pillar.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Spotlight */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8DFD4] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image display */}
            <div className="lg:col-span-6 overflow-hidden rounded-2xl relative aspect-4/3 shadow-sm bg-[#EFE9E0]">
              <img
                src={currentPillar.image}
                alt={currentPillar.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#1C1814]/80 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-full">
                {currentPillar.badge}
              </div>
            </div>

            {/* Text description */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#314A3D] uppercase tracking-wider mb-2">
                <span>Pilier d'excellence</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C241E] mb-4">
                {currentPillar.title}
              </h3>

              <p className="text-sm sm:text-base text-[#5C4D42] leading-relaxed mb-6">
                {currentPillar.description}
              </p>

              <div className="space-y-3 mb-8">
                {currentPillar.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#314A3D] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#44382F] leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreServices}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#314A3D] hover:bg-[#25392F] text-white text-xs sm:text-sm font-semibold transition-all duration-150 active:scale-98 cursor-pointer"
                >
                  <span>Nos plateaux & créations</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <span className="text-xs text-[#7A6B5F] italic">
                  Conseil personnalisé en boutique à Cabourg
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Local Producers Quote / Terroir Statement */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EFE8DD] border border-[#E3D7C8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#314A3D] text-[#E7DCB9] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
              « »
            </div>
            <div>
              <p className="font-serif text-base sm:text-lg text-[#2C241E] italic font-medium">
                « Défendre les petits producteurs fermiers et faire vivre le goût authentique du lait cru au cœur de Cabourg. »
              </p>
              <p className="text-xs text-[#756455] font-medium mt-1">
                L’équipe de La Boîte à Meuh • Fromagers passionnés
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold text-[#2C241E] bg-white hover:bg-[#FAF7F2] border border-[#D9CEC1] transition-colors"
          >
            Venir nous rendre visite
          </a>
        </div>
      </div>
    </section>
  );
};
