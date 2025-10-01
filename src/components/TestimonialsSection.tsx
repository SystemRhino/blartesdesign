import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 2,
    name: "João Silva",
    role: "Gerente de Marketing",
    project: "Material Promocional",
    text: "Profissionalismo excepcional! Cada detalhe foi cuidadosamente pensado. Recomendo sem hesitar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "CEO",
    project: "Rebranding Corporativo",
    text: "A equipe entendeu perfeitamente nossa visão e entregou um trabalho impecável. Parceria de longo prazo!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Diretor Comercial",
    project: "Catálogo Digital",
    text: "Qualidade excepcional e prazo cumprido à risca. A comunicação foi clara desde o primeiro contato.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    }
  }
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0267DE]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0267DE] text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wide uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            O que nossos <span className="text-[#0267DE]">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 projetos entregues com excelência e satisfação garantida
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                className="absolute w-full h-full"
              >
                <Card className="h-full bg-white shadow-xl border-0 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <ImageWithFallback
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#0267DE]"
                        />
                        <Quote className="absolute -top-2 -right-2 w-8 h-8 bg-[#04CFBC] text-black p-1.5 rounded-full" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#C740D0] text-[#C740D0]" />
                        ))}
                      </div>

                      {/* Text */}
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      {/* Author Info */}
                      <div>
                        <div className="font-bold text-black text-lg mb-1">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600 mb-2">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="inline-block bg-[#0267DE] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {testimonials[currentIndex].project}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-black shadow-lg rounded-full w-12 h-12 p-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-black shadow-lg rounded-full w-12 h-12 p-0"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#0267DE] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-gray-200 pt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-black text-[#0267DE] mb-2">500+</div>
            <div className="text-gray-600 text-sm">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[#04CFBC] mb-2">5.0⭐</div>
            <div className="text-gray-600 text-sm">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[#C740D0] mb-2">100%</div>
            <div className="text-gray-600 text-sm">Recomendação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[#0267DE] mb-2">5 Anos</div>
            <div className="text-gray-600 text-sm">no Mercado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}