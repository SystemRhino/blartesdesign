"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoExtensa from '../images/logo/Extenso-branco.png';
interface HeaderProps {
  currentPage?: 'home' | 'portfolio';
  onLogoClick?: () => void;
  onNavigate?: () => void;
  onViewPortfolio?: () => void;
}

export default function Header({ currentPage = 'home', onLogoClick, onNavigate, onViewPortfolio }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contato", href: "#contato" },
  ];

  // Configure sua logo aqui - substitua a URL pela sua imagem de logo
  const logoConfig = {
    // Descomente e adicione o caminho da sua logo:
    // logoUrl: '/path/to/your/logo.png', // ou use uma URL externa
    logoUrl: logoExtensa, // Mantenha como null para usar o design padrão
    logoAlt: "BlarteseDesign Logo",
    showFallback: true, // Se true, mostra o design atual quando não há logo
  };

  return (
    <header
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-blue-600/20"
      style={{ borderBottomColor: "rgba(4, 207, 188, 0.2)" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between" style={{ width: 'auto' }} >
          {/* Logo */}
          <motion.div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={logoConfig.logoUrl}
              alt="Blartese Design"
              style={{ width: '150px' }} 
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={currentPage === 'home' ? item.href : '#'}
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage === 'portfolio' && onNavigate) {
                    onNavigate();
                    // Aguarda a navegação e depois faz o scroll
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-white transition-colors relative group cursor-pointer"
                style={
                  {
                    "--hover-color": "#04CFBC",
                  } as React.CSSProperties
                }
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#04CFBC")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "white")
                }
                whileHover={{ y: -2 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#04CFBC" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Ver Trabalhos Button - só aparece na home */}
            {currentPage === 'home' && onViewPortfolio && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={onViewPortfolio}
                  className="text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg cursor-pointer border-2"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "#04CFBC",
                    color: "#04CFBC",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#04CFBC";
                    e.currentTarget.style.color = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#04CFBC";
                  }}
                >
                  Ver Trabalhos
                </Button>
              </motion.div>
            )}
            
            {/* Solicitar Orçamento Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Button
              onClick={() => {
                if (currentPage === 'portfolio' && onNavigate) {
                  onNavigate();
                  // Aguarda a navegação e depois faz o scroll
                  setTimeout(() => {
                    const contactElement = document.getElementById('contato');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const contactElement = document.getElementById('contato');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
              style={{
                backgroundColor: "#0267DE",
                boxShadow:
                  "0 4px 6px -1px rgba(2, 103, 222, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#C740D0";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px -4px rgba(2, 103, 222, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#0267DE";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px -1px rgba(2, 103, 222, 0.25)";
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicite um Orçamento
            </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 pb-4 bg-black/20 backdrop-blur-sm rounded-lg p-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={currentPage === 'home' ? item.href : '#'}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  if (currentPage === 'portfolio' && onNavigate) {
                    onNavigate();
                    // Aguarda a navegação e depois faz o scroll
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  } else {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/10 cursor-pointer"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#04CFBC")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "white")
                }
              >
                {item.name}
              </a>
            ))}
            
            {/* Ver Trabalhos Button - só aparece na home */}
            {currentPage === 'home' && onViewPortfolio && (
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  onViewPortfolio();
                }}
                className="text-white font-semibold mt-4 rounded-full transition-all duration-300 cursor-pointer border-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#04CFBC",
                  color: "#04CFBC",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#04CFBC";
                  e.currentTarget.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#04CFBC";
                }}
              >
                Ver Trabalhos
              </Button>
            )}
            
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                if (currentPage === 'portfolio' && onNavigate) {
                  onNavigate();
                  // Aguarda a navegação e depois faz o scroll
                  setTimeout(() => {
                    const contactElement = document.getElementById('contato');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  const contactElement = document.getElementById('contato');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="text-white font-semibold mt-4 rounded-full transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: "#0267DE" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0456C7")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0267DE")
              }
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicite um Orçamento
            </Button>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}