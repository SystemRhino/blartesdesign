"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fundo from '../images/fundo/fundo.png';
import { useState, useEffect } from 'react';

function ResponsiveImage({ src, alt }) {
  const [objectPos, setObjectPos] = useState('30% center');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) setObjectPos('45% center');
      else if (width < 1024) setObjectPos('40% center');
      else setObjectPos('40% center');
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      className="w-full h-full object-cover opacity-40"
      style={{ objectPosition: objectPos }}
    />
  );
}
interface HeroSectionProps {
  onViewPortfolio?: () => void;
}

export default function HeroSection({ onViewPortfolio }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative h-[120vh] bg-black overflow-hidden"
    >
      <br />
      <br />
      <br />


      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <ResponsiveImage src={fundo} alt="Produção gráfica BlarteseDesign" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Geometric Elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border-2 rotate-45 opacity-20"
        style={{ borderColor: "#04CFBC" }}
      />
      <div
        className="absolute bottom-32 left-16 w-24 h-24 rounded-full opacity-10"
        style={{ backgroundColor: "#C740D0" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center" style={{gap: '4em'}}>
        <div className="w-full" style={{paddingTop: '40em', paddingBottom: '4em'}}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block bg-[#0267DE] text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wide uppercase">
              Gráfica Premium
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
          >
            Seu negócio em{" "}
            <span
              className="relative"
              style={{ color: "#04CFBC" }}
            >
              destaque
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1"
                style={{ backgroundColor: "#04CFBC" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>{" "}
            sua marca em todo{" "}
            <span className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">
              Brasil
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            Comunicação visual com mais de 5 anos transformando ideias em realidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="text-white font-bold px-8 py-4 rounded-full text-lg group transition-all duration-300"
              style={{ backgroundColor: "#0267DE" }}
              onMouseEnter={(e: { currentTarget: { style: { backgroundColor: string; }; }; }) =>
                (e.currentTarget.style.backgroundColor =
                  "#0456C7")
              }
              onMouseLeave={(e: { currentTarget: { style: { backgroundColor: string; }; }; }) =>
                (e.currentTarget.style.backgroundColor =
                  "#0267DE")
              }
              onClick={onViewPortfolio}
              size="lg"
            >
              Ver mais trabalhos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}