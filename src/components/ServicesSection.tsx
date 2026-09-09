import React from 'react';
import { ShoppingBag, MessageSquare, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_OFFERS, SHOP_INFO } from '../data/fromagerieData';

interface ServicesSectionProps {
  onOpenOrderModal: (serviceType?: string) => void;
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenOrderModal,
  onContactClick,
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF7F2] text-[#2C241E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#314A3D]/10 text-[#314A3D] text-xs font-semibold uppercase tracking-wider mb-3">
            Sur Mesure & Convivialité
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight mb-4">
            Services & créations sur commande
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D4F] leading-relaxed max-w-2xl mx-auto">
            Pour vos apéritifs cabourgeais, dîners en famille ou réceptions sur la Côte Fleurie, 
            nous composons des plateaux et coffrets gourmands prêts à déguster, préparés le jour même.
          </p>

          {/* Primary Action Buttons Bar as requested in prompt */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              id="services-btn-order"
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B87333] hover:bg-[#A36227] text-white text-sm font-semibold shadow-md shadow-[#B87333]/20 transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#FDEBD0]" />
              <span>Commander un plateau</span>
            </button>

            <button
              id="services-btn-contact"
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3EBE0] text-[#2C241E] text-sm font-semibold border border-[#D9CEC1] transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#314A3D]" />
              <span>Nous contacter</span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8DFD4] shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative aspect-16/9 overflow-hidden bg-[#EBE3D7]">
                  <img
                    src={offer.imageUrl}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  {offer.badge && (
                    <span className="absolute top-3.5 left-3.5 bg-[#314A3D] text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                      {offer.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3.5 right-3.5 bg-black/70 backdrop-blur-xs text-white text-xs font-medium px-3 py-1 rounded-full">
                    {offer.estimatedPrice}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs font-semibold text-[#B87333] uppercase tracking-wider mb-1">
                    {offer.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C241E] mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-[#635345] leading-relaxed mb-5">
                    {offer.description}
                  </p>

                  <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#EBE3D7] mb-6">
                    <p className="text-xs font-semibold text-[#314A3D] uppercase tracking-wider mb-2">
                      Détails de la formule :
                    </p>
                    <ul className="space-y-2">
                      {offer.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#44382F]">
                          <Check className="w-3.5 h-3.5 text-[#314A3D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-[#7A6B5E] italic">
                    <span className="font-semibold text-[#2C241E]">Idéal pour :</span> {offer.recommendedFor}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#F5EFEB] mt-2">
                <button
                  onClick={() => onOpenOrderModal(offer.id)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#314A3D] text-[#2C241E] hover:text-white border border-[#E0D5C7] hover:border-[#314A3D] text-xs font-bold transition-all duration-150 cursor-pointer group-hover:border-[#314A3D]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Commander cette formule</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-70 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#314A3D] text-[#FAF7F2] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#E6BA7E] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                Conseils personnalisés & commandes express à Cabourg
              </h4>
              <p className="text-xs sm:text-sm text-[#D8CABE] max-w-xl leading-relaxed">
                Vous hésitez sur les quantités ou les accords vins/cidres ? Passez à la boutique ou appelez-nous au{' '}
                <a href={`tel:${SHOP_INFO.phoneClean}`} className="underline text-[#E6BA7E] font-medium">
                  {SHOP_INFO.phone}
                </a>. Nous préparons vos plateaux avec le plus grand soin.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenOrderModal()}
            className="shrink-0 px-6 py-3 rounded-full bg-[#B87333] hover:bg-[#A36227] text-white text-xs sm:text-sm font-semibold shadow-md transition-transform active:scale-98 cursor-pointer"
          >
            Personnaliser mon plateau
          </button>
        </div>
      </div>
    </section>
  );
};
