/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UniversSection } from './components/UniversSection';
import { GallerySection } from './components/GallerySection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (serviceType?: string) => {
    setSelectedServiceType(serviceType);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#E8DCCB] selection:text-[#1F1914]">
      {/* Top Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero
          onDiscoverClick={() => scrollToSection('univers')}
          onFindUsClick={() => scrollToSection('contact')}
        />

        {/* Section 2: Notre univers */}
        <UniversSection
          onExploreServices={() => scrollToSection('services')}
        />

        {/* Section 3: Galerie photo */}
        <GallerySection />

        {/* Section 4: Services & commandes */}
        <ServicesSection
          onOpenOrderModal={handleOpenOrderModal}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Section 5: Infos pratiques & contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        initialServiceType={selectedServiceType}
      />
    </div>
  );
}
