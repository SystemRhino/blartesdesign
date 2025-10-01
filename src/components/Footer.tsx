'use client';

import { motion } from 'motion/react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  ArrowUp
} from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/blartesedesign/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' }
    /*{ icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' } */
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    'Placas Personalizadas',
    'Lonas e Banners',
    'Letras Caixa',
    'Envelopamento',
    'Cartões de Visita',
    'Panfletos'
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-black text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl tracking-tight leading-tight">
                  Blartese<span className="text-pink-400">Design</span>
                </span>
                <span className="text-pink-400/70 text-xs tracking-wider">
                  GRÁFICA PREMIUM
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Especialistas em comunicação visual com mais de 5 anos transformando 
              ideias em materiais gráficos de impacto.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-pink-400">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-pink-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-pink-400">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-pink-400 transition-colors" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-pink-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Rua das Artes Gráficas, 123</p>
                  <p className="text-gray-400 text-sm">São Paulo - SP, 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(11) 93934-0489</p>
                  <p className="text-gray-400 text-sm">(11) 93934-0489</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <p className="text-gray-300">bl.arteedesign@gmail.com</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg à Sex: 8h às 18h</p>
                  <p className="text-gray-400 text-sm">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400">
                © {new Date().getFullYear()} BlarteseDesign. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Desenvolvido por <a href="https://instagram.com/ibex.dev">Ibex Dev</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="hidden md:flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Termos de Uso
                </a>
              </div>

              <Button
                onClick={scrollToTop}
                className="bg-pink-400 text-black hover:bg-pink-500 rounded-full w-12 h-12 p-0 group"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Action */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white rounded-full w-16 h-16 p-0 shadow-lg shadow-green-600/25 group"
            onClick={() => window.open('https://wa.me/5511939340489', '_blank')}
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}