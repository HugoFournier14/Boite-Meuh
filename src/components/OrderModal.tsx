import React, { useState } from 'react';
import { X, Check, Phone, Calendar, Users, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { SHOP_INFO } from '../data/fromagerieData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialServiceType,
}) => {
  const [serviceType, setServiceType] = useState<string>(initialServiceType || 'plateaux-fromages');
  const [guestCount, setGuestCount] = useState<number>(6);
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('11h30');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>(['doux-equilibre']);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const serviceOptions = [
    { id: 'plateaux-fromages', label: 'Plateau de Fromages', hint: 'Dégustation & buffets' },
    { id: 'planches-mixtes', label: 'Planche Mixte Fromage & Charcuterie', hint: 'L’accord apéritif gourmand' },
    { id: 'offres-raclette', label: 'Formule Raclette / Fondue', hint: 'Meules coupées & charcuterie' },
    { id: 'coffrets-cadeaux', label: 'Coffret Cadeau Gourmand', hint: 'Terroir & douceurs normandes' },
  ];

  const preferenceOptions = [
    { id: 'doux-equilibre', label: 'Équilibré (Doux & Moelleux)' },
    { id: 'caractere', label: 'De Caractère & Affinés' },
    { id: 'normandie-only', label: '100% Normandie (Camembert, Livarot...)' },
    { id: 'chevre-brebis', label: 'Avec Chèvre & Brebis' },
    { id: 'sans-lait-de-vache', label: 'Sans lait de vache' },
    { id: 'femme-enceinte', label: 'Sélection au lait pasteurisé (grossesse)' },
  ];

  const togglePreference = (prefId: string) => {
    setSelectedPreferences((prev) =>
      prev.includes(prefId) ? prev.filter((p) => p !== prefId) : [...prev, prefId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD4] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#314A3D] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-[#E3D4BC]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">Commander un plateau</h2>
              <p className="text-xs text-[#D8CABE]">
                Préparation artisanale sur mesure à Cabourg
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#314A3D]/10 text-[#314A3D] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C241E] mb-2">
                Votre demande est bien enregistrée !
              </h3>
              <p className="text-sm text-[#635345] max-w-md mx-auto mb-6 leading-relaxed">
                Merci {clientName || 'cher gourmet'}. L’équipe de <strong>La Boîte à Meuh</strong> prépare avec amour votre sélection pour{' '}
                <strong>{guestCount} personnes</strong> le {date || 'prochainement'} à {timeSlot}.
              </p>

              <div className="bg-[#EFE8DD] p-4 rounded-2xl max-w-md mx-auto mb-6 text-left border border-[#E2D5C6]">
                <p className="text-xs font-semibold text-[#314A3D] uppercase tracking-wider mb-1">
                  Besoin d’une confirmation immédiate pour aujourd’hui ?
                </p>
                <p className="text-xs text-[#524438] mb-3">
                  Pour les commandes du jour ou pour toute question spécifique, contactez-nous directement par téléphone :
                </p>
                <a
                  href={`tel:${SHOP_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#314A3D] text-white text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SHOP_INFO.phone}</span>
                </a>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-full bg-[#2C241E] text-white text-xs font-semibold hover:bg-black transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type de prestation */}
              <div>
                <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-2.5">
                  1. Choisissez votre prestation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setServiceType(opt.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        serviceType === opt.id
                          ? 'bg-white border-[#B87333] shadow-xs ring-1 ring-[#B87333]/20'
                          : 'bg-[#F4EEE6] border-[#E8DFD4] hover:bg-white/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-[#2C241E]">{opt.label}</span>
                        {serviceType === opt.id && <Check className="w-3.5 h-3.5 text-[#B87333]" />}
                      </div>
                      <span className="text-[11px] text-[#7A6B5E] block mt-0.5">{opt.hint}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Nombre de convives */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#2C241E] uppercase tracking-wider">
                    2. Nombre de convives
                  </label>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#314A3D] text-white">
                    {guestCount} {guestCount > 1 ? 'personnes' : 'personne'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                    className="w-full accent-[#314A3D] cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#7A6B5E] mt-1">
                  <span>2 pers. (tête-à-tête)</span>
                  <span>10 pers.</span>
                  <span>20+ pers. (buffet)</span>
                </div>
              </div>

              {/* Préférences fromagères */}
              <div>
                <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-2">
                  3. Vos envies & profil gustatif
                </label>
                <div className="flex flex-wrap gap-2">
                  {preferenceOptions.map((pref) => {
                    const isChecked = selectedPreferences.includes(pref.id);
                    return (
                      <button
                        type="button"
                        key={pref.id}
                        onClick={() => togglePreference(pref.id)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                          isChecked
                            ? 'bg-[#314A3D] text-white border-[#314A3D]'
                            : 'bg-white text-[#524438] border-[#E0D5C7] hover:bg-[#F4EEE6]'
                        }`}
                      >
                        {pref.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date & Heure de retrait */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-1.5">
                    4. Date de retrait à Cabourg
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-1.5">
                    Créneau horaire
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D]"
                  >
                    <option value="10h00">Matinée : 10h00</option>
                    <option value="11h30">Midi : 11h30 - 12h30</option>
                    <option value="16h30">Après-midi : 16h30 - 17h30</option>
                    <option value="18h30">Soirée apéro : 18h30 - 19h15</option>
                  </select>
                </div>
              </div>

              {/* Coordonnées de contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8DFD4]">
                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-1.5">
                    Votre Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Émilie Duval"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-1.5">
                    Téléphone (pour confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C241E] uppercase tracking-wider mb-1.5">
                  Remarques ou fromages préférés (optionnel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex : Nous adorons le Livarot bien fait et le Comté fruité..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E0D5C7] text-xs text-[#2C241E] focus:outline-hidden focus:border-[#314A3D] resize-none"
                />
              </div>

              {/* Footer Buttons */}
              <div className="pt-4 border-t border-[#E8DFD4] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] text-[#7A6B5F]">
                  <Phone className="w-3.5 h-3.5 text-[#314A3D]" />
                  <span>Besoin d'un conseil ? {SHOP_INFO.phone}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-[#6B5A4D] hover:bg-[#EFE9E0] transition-colors cursor-pointer"
                  >
                    Annuler
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#B87333] hover:bg-[#A36227] text-white text-xs font-bold shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    Transmettre ma demande
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
