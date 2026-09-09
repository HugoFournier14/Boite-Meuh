import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Navigation,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { SHOP_INFO, OPENING_HOURS } from '../data/fromagerieData';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SHOP_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
  };

  // Check if store is currently open (simple client-side helper)
  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const hours = now.getHours() + now.getMinutes() / 60;

    // Monday closed
    if (day === 1) return false;
    // Sunday open only morning (9:00 - 13:00)
    if (day === 0) return hours >= 9.0 && hours <= 13.0;
    // Tue - Fri: 9:00 - 13:00 and 15:30 - 19:30
    // Sat: 9:00 - 13:00 and 15:00 - 19:30
    const morningOpen = hours >= 9.0 && hours <= 13.0;
    const afternoonStart = day === 6 ? 15.0 : 15.5;
    const afternoonOpen = hours >= afternoonStart && hours <= 19.5;

    return morningOpen || afternoonOpen;
  };

  const openStatus = isCurrentlyOpen();

  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'La Boîte à Meuh, 1 Avenue du Commandant Bertaux Levillain, 14390 Cabourg'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5EFEB] text-[#2C241E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#314A3D]/10 text-[#314A3D] text-xs font-semibold uppercase tracking-wider mb-3">
            Infos Pratiques & Accès
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241E] tracking-tight mb-4">
            Nous trouver à Cabourg
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D4F] leading-relaxed">
            Située au cœur de la station balnéaire, la fromagerie vous accueille avec le sourire pour vous faire goûter et partager l’amour des bons produits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordinates & Hours Table */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D7C8] shadow-xs">
              <div className="flex items-center justify-between pb-5 border-b border-[#EFE8DD] mb-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C241E]">
                    {SHOP_INFO.name}
                  </h3>
                  <p className="text-xs text-[#7A6B5E] font-medium">
                    Fromagerie Cabourgeaise
                  </p>
                </div>

                {/* Live Status Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    openStatus
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      openStatus ? 'bg-emerald-600 animate-pulse' : 'bg-stone-500'
                    }`}
                  />
                  <span>{openStatus ? 'Ouvert maintenant' : 'Fermé actuellement'}</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#314A3D]/10 text-[#314A3D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#8C7A6D] uppercase tracking-wider block">
                      Adresse
                    </span>
                    <p className="text-sm font-semibold text-[#2C241E] leading-snug">
                      {SHOP_INFO.address}
                    </p>
                    <p className="text-xs text-[#7A6B5E] mt-0.5">
                      Proche commerces & front de mer
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-[#F5EFEB]">
                  <div className="w-9 h-9 rounded-xl bg-[#B87333]/10 text-[#B87333] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-[#8C7A6D] uppercase tracking-wider block">
                      Téléphone
                    </span>
                    <div className="flex items-center justify-between mt-0.5">
                      <a
                        href={`tel:${SHOP_INFO.phoneClean}`}
                        className="text-base font-bold text-[#2C241E] hover:text-[#B87333] transition-colors"
                      >
                        {SHOP_INFO.phone}
                      </a>
                      <button
                        onClick={copyToClipboard}
                        className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#6B5A4D] hover:bg-[#EFE9E0] text-xs transition-colors flex items-center gap-1 cursor-pointer"
                        title="Copier le numéro"
                      >
                        {copiedPhone ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span className="text-[10px]">{copiedPhone ? 'Copié' : 'Copier'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-[#F5EFEB]">
                  <div className="w-9 h-9 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0 mt-0.5">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-[#8C7A6D] uppercase tracking-wider block">
                      Réseaux Sociaux
                    </span>
                    <a
                      href={SHOP_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1877F2] hover:underline mt-0.5"
                    >
                      <span>Page Facebook officielle</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Itinéraire Button */}
              <div className="mt-6 pt-5 border-t border-[#EFE8DD]">
                <a
                  id="contact-btn-itinerary"
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#314A3D] hover:bg-[#25392F] text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-98"
                >
                  <Navigation className="w-4 h-4 text-[#E6BA7E]" />
                  <span>Obtenir l’itinéraire (Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D7C8] shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <Clock className="w-4 h-4 text-[#314A3D]" />
                <h4 className="font-serif text-lg font-bold text-[#2C241E]">
                  Horaires d’ouverture
                </h4>
              </div>

              <div className="divide-y divide-[#F5EFEB]">
                {OPENING_HOURS.map((oh) => {
                  const isToday = new Date().toLocaleDateString('fr-FR', { weekday: 'long' }).toLowerCase().startsWith(oh.day.toLowerCase().slice(0, 3));
                  return (
                    <div
                      key={oh.day}
                      className={`py-2.5 flex items-center justify-between text-xs ${
                        isToday ? 'font-bold bg-[#FAF7F2] -mx-2 px-2 rounded-lg' : 'text-[#5C4D42]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {oh.day}
                        {isToday && (
                          <span className="text-[10px] text-[#B87333] uppercase tracking-wider font-semibold">
                            (Aujourd’hui)
                          </span>
                        )}
                      </span>
                      {oh.isClosed ? (
                        <span className="text-red-700/80 font-medium">Fermé</span>
                      ) : (
                        <span className="text-right text-[#2C241E]">
                          {oh.morning} &bull; {oh.afternoon}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-[#8C7A6D] mt-3 italic">
                * Horaires susceptibles d’être étendus lors des vacances scolaires et des week-ends fériés normands.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed + Message Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Maps Embed Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E3D7C8] shadow-xs">
              <div className="p-4 bg-[#FAF7F2] border-b border-[#E3D7C8] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2C241E]">
                  <MapPin className="w-4 h-4 text-[#314A3D]" />
                  <span>Cabourg, Normandie</span>
                </div>
                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#314A3D] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Agrandir le plan</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-[#E5E3DF]">
                <iframe
                  title="Carte Google Maps - La Boîte à Meuh Cabourg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.124174826848!2d-0.11874282307525333!3d49.293306671394334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a7114948ce769%3A0xe9f798e1694aa2b2!2s1%20Av.%20du%20Commandant%20Bertaux%20Levillain%2C%2014390%20Cabourg!5e0!3m2!1sfr!2sfr!4v1709900000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Quick Contact / Inquiry Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E3D7C8] shadow-xs">
              <h4 className="font-serif text-xl font-bold text-[#2C241E] mb-2">
                Une question sur un fromage ou une commande spéciale ?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B5A4D] mb-5">
                Envoyez-nous un petit mot ou appelez-nous pour connaître les arrivages de saison (fromages de chèvre printaniers, truffe d’hiver, etc.).
              </p>

              {messageSent ? (
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#314A3D]/20 text-center">
                  <CheckCircle2 className="w-8 h-8 text-[#314A3D] mx-auto mb-2" />
                  <p className="text-sm font-bold text-[#2C241E]">
                    Merci pour votre message !
                  </p>
                  <p className="text-xs text-[#6B5A4D] mt-1">
                    Nous vous répondrons dans les plus brefs délais. À très vite à Cabourg !
                  </p>
                  <button
                    onClick={() => setMessageSent(false)}
                    className="mt-3 text-xs text-[#314A3D] font-semibold underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#2C241E] uppercase tracking-wider mb-1">
                        Votre nom
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex. Julien"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#2C241E] uppercase tracking-wider mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="ex. 06..."
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#2C241E] uppercase tracking-wider mb-1">
                      Votre message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Bonjour, avez-vous du Comté 36 mois ou du camembert fermier en ce moment ?"
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D] resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-[#7A6B5F]">
                      Réponse rapide par notre équipe
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C241E] hover:bg-black text-white text-xs font-bold transition-all active:scale-98 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Envoyer</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
