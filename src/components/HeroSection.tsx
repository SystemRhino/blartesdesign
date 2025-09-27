"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onViewPortfolio?: () => void;
}

export default function HeroSection({ onViewPortfolio }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHByaW50aW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Produção gráfica BlarteseDesign"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
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
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
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
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
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
            </span>
            <br />
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
            Transformamos suas ideias em materiais gráficos de
            impacto. Especialistas em placas, lonas,
            envelopamento e muito mais.
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0456C7")
              }
              onMouseLeave={(e) =>
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "#0267DE" }}
              >
                500+
              </div>
              <div className="text-gray-400 text-sm">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "#0267DE" }}
              >
                5 Anos
              </div>
              <div className="text-gray-400 text-sm">
                de Experiência
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "#0267DE" }}
              >
                100%
              </div>
              <div className="text-gray-400 text-sm">
                Satisfação
              </div>
            </div>
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