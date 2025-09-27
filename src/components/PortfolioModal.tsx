"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { type ProjectItem } from "../utils/projectLoader";

interface PortfolioModalProps {
  item: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}



export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset do índice da imagem quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!item) return null;

  // Busca as imagens do projeto - agora usa diretamente do objeto project
  const images = item.images || [item.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] overflow-hidden bg-black border-gray-700 p-0" aria-describedby="portfolio-modal-description">
        {/* Hidden accessibility elements */}
        <DialogTitle className="sr-only">{item.title} - Galeria de Imagens</DialogTitle>
        <DialogDescription id="portfolio-modal-description" className="sr-only">
          Galeria de imagens do projeto {item.title}. Use as setas para navegar entre as imagens ou clique nos indicadores na parte inferior.
        </DialogDescription>
        
        <div className="relative h-full">
          {/* Título do projeto */}
          <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-4 py-2 rounded-lg">
            <h3 className="font-bold text-lg">{item.title}</h3>
          </div>

          {/* Carrossel de imagens */}
          <div className="relative h-full">
            <Carousel className="w-full h-full" onSlideChange={setCurrentImageIndex}>
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="relative w-full h-full min-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                      <ImageWithFallback
                        src={image}
                        alt={`${item.title} - Imagem ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4 bg-black/50 border-gray-600 text-white hover:bg-black/80" />
                  <CarouselNext className="right-4 bg-black/50 border-gray-600 text-white hover:bg-black/80" />
                </>
              )}
            </Carousel>

            {/* Indicador de imagem */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-[#04CFBC]"
                        : "bg-gray-400 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Contador de imagens */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}