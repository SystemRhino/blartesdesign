'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { Button } from './ui/button';

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = '' }: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Endereço real do negócio
  const businessAddress = "Estr. Padre Inácio, 2013 - Jardim Sao Miguel, Cotia - SP, 06719-050";
  
  // URL do Google Maps para embed (Cotia - SP)
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2898294201973!2d-46.93605202338506!3d-23.629789378752935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa9c85f25f827%3A0x75ab299dc0785e4!2sEstr.%20Padre%20In%C3%A1cio%2C%202013%20-%20Jardim%20Sao%20Miguel%2C%20Cotia%20-%20SP%2C%2006719-050!5e0!3m2!1spt-BR!2sbr!4v1759452522020!5m2!1spt-BR!2sbr`;
  
  // URL para abrir no Google Maps
  const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(businessAddress)}`;
  
  // URL para navegação
  const navigationUrl = `https://www.google.com/maps/dir//${encodeURIComponent(businessAddress)}`;

  const handleMapLoad = () => {
    setIsLoaded(true);
  };

  const openInGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const openNavigation = () => {
    window.open(navigationUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-gray-900 rounded-2xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3 mb-2">
          <div 
            className="p-2 rounded-lg"
            style={{ backgroundColor: '#0267DE' }}
          >
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Nossa Localização</h3>
        </div>
        <p className="text-gray-400 text-sm">
          Visite nosso escritório ou utilize o mapa para chegar até nós
        </p>
      </div>

      {/* Map Container */}
      <div className="relative">
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="h-64 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                <div 
                  className="w-12 h-12 rounded-full mx-auto mb-3 animate-pulse"
                  style={{ backgroundColor: '#04CFBC' }}
                />
                {/* Pulse effect */}
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full animate-ping opacity-20"
                  style={{ backgroundColor: '#04CFBC' }}
                />
              </div>
              <p className="text-gray-400 text-sm">Carregando mapa interativo...</p>
            </div>
          </div>
        )}

        {/* Google Maps Embed */}
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="256"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleMapLoad}
          className={`transition-opacity duration-500 hover:opacity-90 ${isLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
          title="Localização BlarteseDesign"
        />

        {/* Interactive indicator */}
        {isLoaded && (
          <div className="absolute bottom-4 left-4 bg-black/80 text-white px-2 py-1 rounded text-xs backdrop-blur-sm border border-white/20">
            🗺️ Mapa Interativo
          </div>
        )}

        {/* Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="bg-black/80 hover:bg-black text-white p-2 rounded-lg backdrop-blur-sm border border-white/20"
              onClick={openInGoogleMaps}
              title="Abrir no Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="p-2 rounded-lg backdrop-blur-sm border border-[#04CFBC]/30"
              style={{ backgroundColor: '#04CFBC', color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#039A8C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#04CFBC';
              }}
              onClick={openNavigation}
              title="Como chegar"
            >
              <Navigation className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Address Information */}
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2">Endereço</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Estr. Padre Inácio, 2013, Cotia <br /> 
              São Paulo, 06719-050
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-white mb-1">Horário</h5>
              <p className="text-gray-400">
                Seg - Sex: 8h às 18h<br />
                Sáb: 8h às 12h
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Contato</h5>
              <p className="text-gray-400">
                (11) 93934-0489<br />
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800">
            <Button
              className="flex-1 font-semibold"
              style={{ backgroundColor: '#0267DE' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0456C7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0267DE';
              }}
              onClick={openNavigation}
            >
              <Navigation className="mr-2 w-4 h-4" />
              Como Chegar
            </Button>
            <Button
              variant="outline"
              className="flex-1 hover:border-[#04CFBC] hover:text-[#04CFBC] bg-[#04CFBC] text-black font-semibold"
              onClick={openInGoogleMaps}
            >
              <ExternalLink className="mr-2 w-4 h-4" />
              Ver no Maps
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}