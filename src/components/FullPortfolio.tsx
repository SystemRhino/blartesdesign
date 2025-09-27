"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import {
  Eye,
  ExternalLink,
  ArrowLeft,
  Search,
} from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import PortfolioModal from "./PortfolioModal";
import ShareModal from "./ShareModal";
import projects from "../data/projects.js";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  tags: string[];
}

interface FullPortfolioProps {
  onBack: () => void;
}

export default function FullPortfolio({
  onBack,
}: FullPortfolioProps) {
  // Usar projetos do arquivo /data/projects.js (convertendo para formato esperado)
  const allPortfolioItems = useMemo(() => {
    return projects.map(
      (project) =>
        ({
          id: project.id,
          title: project.name,
          category: project.tags[0] || "Design", // Usar primeira tag como categoria
          image: project.images[0], // Primeira imagem como principal
          images: project.images, // Array completo de imagens para o modal
          description: `${project.name} - Projeto desenvolvido com materiais de alta qualidade e atenção aos detalhes.`,
          tags: project.tags,
        }) as PortfolioItem,
    );
  }, []);

  // Gerar categorias dinamicamente baseadas nos projetos
  const categories = useMemo(() => {
    const uniqueCategories = [
      "Todos",
      ...new Set(
        allPortfolioItems.map((item) => item.category),
      ),
    ];
    return uniqueCategories;
  }, [allPortfolioItems]);

  const [selectedCategory, setSelectedCategory] =
    useState("Todos");
  const [hoveredItem, setHoveredItem] = useState<number | null>(
    null,
  );
  const [selectedItem, setSelectedItem] =
    useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareItem, setShareItem] =
    useState<PortfolioItem | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12); // 12 itens por página para um grid 3x4

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleShareClick = (item: PortfolioItem) => {
    setShareItem(item);
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
    setShareItem(null);
  };

  // Filtrar itens baseado na categoria e pesquisa
  const filteredItems = allPortfolioItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "Todos" ||
      item.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  // Cálculos de paginação
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    endIndex,
  );

  // Reset página quando filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, itemsPerPage]);

  // Função para gerar números de página para paginação
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(maxPagesToShow / 2);
      let start = Math.max(currentPage - half, 1);
      let end = Math.min(
        start + maxPagesToShow - 1,
        totalPages,
      );

      if (end - start + 1 < maxPagesToShow) {
        start = Math.max(end - maxPagesToShow + 1, 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <section className="min-h-screen bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Header com botão de voltar e título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white hover:text-[#04CFBC] transition-colors duration-300 group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Voltar</span>
            </motion.button>
            <div className="h-8 w-px bg-gray-600" />
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white">
                Portfólio{" "}
                <span style={{ color: "#04CFBC" }}>
                  Completo
                </span>
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Busca e Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Barra de busca */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-[#04CFBC] text-lg"
              />
            </div>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) =>
                setItemsPerPage(Number(value))
              }
            >
              <SelectTrigger className="w-full md:w-48 h-12 bg-gray-900 border-gray-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 por página</SelectItem>
                <SelectItem value="12">
                  12 por página
                </SelectItem>
                <SelectItem value="24">
                  24 por página
                </SelectItem>
                <SelectItem value="48">
                  48 por página
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filtros por categoria */}
          <div className="flex flex-wrap gap-3">
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
          </div>
        </motion.div>

        {/* Grid de projetos */}
        <AnimatePresence mode="wait">
          {currentItems.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Nenhum projeto encontrado
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Tente ajustar os filtros ou o termo de busca
                para encontrar o que procura.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    onClick={() => handleItemClick(item)}
                    className="group cursor-pointer"
                  >
                    <Card className="overflow-hidden border-0 bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="relative">
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
                                hoveredItem === item.id
                                  ? 1
                                  : 0.8,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex gap-3">
                              <motion.button
                                className="text-white p-2.5 rounded-full transition-colors duration-300"
                                style={{
                                  backgroundColor: "#0267DE",
                                }}
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
                              <motion.button
                                className="bg-white text-black p-2.5 rounded-full hover:bg-gray-100 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShareClick(item);
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <Badge
                            className="text-black mb-3 text-xs transition-colors duration-300"
                            style={{
                              backgroundColor: "#04CFBC",
                            }}
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
                          <div className="flex flex-wrap gap-1">
                            {item.tags
                              .slice(0, 2)
                              .map((tag) => (
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
          )}
        </AnimatePresence>

        {/* Paginação */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1)
                        setCurrentPage(currentPage - 1);
                    }}
                    className={`text-white hover:bg-gray-800 ${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  />
                </PaginationItem>

                {getPageNumbers().map((pageNumber, index) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(pageNumber);
                      }}
                      className={`text-white hover:bg-gray-800 ${
                        currentPage === pageNumber
                          ? "bg-[#0267DE] text-white hover:bg-[#0456C7]"
                          : ""
                      }`}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        setCurrentPage(currentPage + 1);
                    }}
                    className={`text-white hover:bg-gray-800 ${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        )}

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-2xl font-bold text-[#0267DE] mb-2">
              {totalItems}
            </div>
            <div className="text-gray-400 text-sm">
              Projetos Realizados
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-2xl font-bold text-[#04CFBC] mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-400 text-sm">
              Categorias
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-2xl font-bold text-[#C740D0] mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">
              Satisfação
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-2xl font-bold text-white mb-2">
              5⭐
            </div>
            <div className="text-gray-400 text-sm">
              Avaliação
            </div>
          </div>
        </motion.div>

        {/* Modal de detalhes do portfólio */}
        <PortfolioModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Modal de compartilhamento */}
        <ShareModal
          item={shareItem}
          isOpen={isShareModalOpen}
          onClose={handleCloseShareModal}
        />
      </div>
    </section>
  );
}