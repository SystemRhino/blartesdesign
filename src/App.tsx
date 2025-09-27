import { useState, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';

import FullPortfolio from './components/FullPortfolio';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio'>('home');
  const [highlightContact, setHighlightContact] = useState(false);

  const showFullPortfolio = () => {
    setCurrentPage('portfolio');
  };

  const showHomePage = () => {
    setCurrentPage('home');
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      // Destacar a seção de contato
      setHighlightContact(true);
      
      // Scroll suave para a seção
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Remover o destaque após 3 segundos
      setTimeout(() => {
        setHighlightContact(false);
      }, 3000);
    }
  };

  if (currentPage === 'portfolio') {
    return (
      <div className="min-h-screen bg-black">
        <Header 
          currentPage="portfolio" 
          onLogoClick={showHomePage} 
          onNavigate={showHomePage}
        />
        <main>
          <FullPortfolio onBack={showHomePage} />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentPage="home" 
        onNavigate={scrollToContact} 
        onViewPortfolio={showFullPortfolio}
      />
      <main>
        <HeroSection onViewPortfolio={showFullPortfolio} />
        <ServicesSection onRequestQuote={scrollToContact} />
        <PortfolioSection onShowMore={showFullPortfolio} limitItems={6} />
        <CTASection onRequestQuote={scrollToContact} />
        <TestimonialsSection />
        <ContactSection highlightForm={highlightContact} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}