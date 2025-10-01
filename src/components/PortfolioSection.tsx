"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Eye, ExternalLink } from "lucide-react";
import PortfolioModal from "./PortfolioModal";
import projects from '../data/projects.js';
import { type ProjectItem } from "../utils/projectLoader";

interface PortfolioSectionProps {
  onShowMore: () => void;
  limitItems?: number; // Propriedade opcional para limitar número de itens
}

export default function PortfolioSection({ onShowMore, limitItems }: PortfolioSectionProps) {
  // Usar projetos do arquivo /data/projects.js (convertendo para formato ProjectItem)
  const portfolioItems = useMemo(() => {
    return projects.map(project => ({
      id: project.id,
      title: project.name,
      category: project.tags[0] || 'Design', // Usar primeira tag como categoria
      image: project.images[0], // Primeira imagem como principal
      images: project.images, // Array completo de imagens para o modal
      description: `${project.name} - Projeto desenvolvido com materiais de alta qualidade e atenção aos detalhes.`,
      tags: project.tags
    } as ProjectItem));
  }, []);
  
  // Gerar categorias dinamicamente baseadas nos projetos
  const categories = useMemo(() => {
    const uniqueCategories = ['Todos', ...new Set(portfolioItems.map(item => item.category))];
    return uniqueCategories;
  }, [portfolioItems]);
  
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: ProjectItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === selectedCategory,
        );

  // Aplicar limite de itens se especificado
  const displayedItems = limitItems ? filteredItems.slice(0, limitItems) : filteredItems;

  return (
    <section
      id="portfolio"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-2 h-32 bg-[#04CFBC] rotate-12 opacity-20" />
      <div className="absolute bottom-10 right-10 w-32 h-2 bg-[#04CFBC] opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0267DE] text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wide uppercase mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Trabalhos que{" "}
            <span style={{ color: "#04CFBC" }}>Inspiram</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada projeto é único e desenvolvido com atenção aos
            detalhes para superar expectativas
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "text-black shadow-lg"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              style={
                selectedCategory === category
                  ? {
                      backgroundColor: "#0267DE",
                      boxShadow:
                        "0 4px 6px -1px rgba(2, 103, 222, 0.25)",
                      color: "white",
                    }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => handleItemClick(item)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Hover Actions */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0.8 }}
                        animate={{
                          scale:
                            hoveredItem === item.id ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex gap-3">
                          <motion.button
                            className="text-white p-2.5 rounded-full transition-colors duration-300"
                            style={{ backgroundColor: "#0267DE" }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#0456C7")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#0267DE")
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              handleItemClick(item);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Eye className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-grow flex flex-col">
                      <Badge
                        className="text-black mb-3 text-xs transition-colors duration-300"
                        style={{ backgroundColor: "#04CFBC" }}
                      >
                        {item.category}
                      </Badge>
                      <h3
                        className="font-bold text-white mb-2 line-clamp-2 transition-colors group-hover:duration-300"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "#04CFBC")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "white")
                        }
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 2 && (
                          <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded">
                            +{item.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ver Todos os Trabalhos Button - sempre visível quando há limite de itens */}
        {limitItems && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
          <motion.button
            onClick={onShowMore}
            className="bg-transparent border-2 font-bold px-8 py-4 rounded-full transition-all duration-300"
            style={{
              borderColor: "#04CFBC",
              color: "#04CFBC",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#04CFBC";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "transparent";
              e.currentTarget.style.color = "#04CFBC";
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos os trabalhos
          </motion.button>
          </motion.div>
        )}

        {/* Modal de detalhes do portfólio */}
        <PortfolioModal 
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}