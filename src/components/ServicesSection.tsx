'use client';

import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Palette, 
  Car, 
  CreditCard, 
  FileText, 
  Grid3X3, 
  Camera 
} from 'lucide-react';

const services = [
  {
    icon: Grid3X3,
    title: 'Placas Personalizadas',
    description: 'Placas em ACM, PVC e outros materiais para identificação e sinalização.',
    image: 'https://images.unsplash.com/photo-1643393770776-364544582aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduYWdlJTIwYmFubmVyJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NjA2NTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Camera,
    title: 'Lonas e Banners',
    description: 'Impressões em lona para eventos, fachadas e comunicação visual.',
    image: 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwZ3JhcGhpYyUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNjU0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Letras Caixa',
    description: 'Letras em acrílico, PVC e LED para fachadas impactantes.',
    image: 'https://images.unsplash.com/photo-1522948079727-8d129da44f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0ZXJwcmVzcyUyMHByaW50aW5nJTIwZGVzaWdufGVufDF8fHx8MTc1NjA2NTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Car,
    title: 'Envelopamento',
    description: 'Envelopamento automotivo e de móveis com materiais de alta qualidade.',
    image: 'https://images.unsplash.com/photo-1699079184537-60ec4962456d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwd3JhcCUyMGNhciUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNjU0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: CreditCard,
    title: 'Cartões de Visita',
    description: 'Cartões com acabamentos especiais e materiais exclusivos.',
    image: 'https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzU2MDUwODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: FileText,
    title: 'Panfletos',
    description: 'Impressão de panfletos, folders e materiais promocionais.',
    image: 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHByaW50aW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

interface ServicesSectionProps {
  onRequestQuote?: () => void;
}

export default function ServicesSection({ onRequestQuote }: ServicesSectionProps) {
  return (
    <section id="servicos" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0267DE] text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wide uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Soluções <span style={{ color: '#0267DE' }}>Completas</span>
            <br />
            em Comunicação Visual
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços gráficos para destacar sua marca no mercado
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${index === 0 || index === 3 ? 'lg:col-span-2' : ''} ${index === 2 ? 'lg:row-span-2' : ''}`}
            >
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative">
                  {/* Background Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-500`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <service.icon className="w-12 h-12 mb-4 text-white/90" />
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:transition-colors duration-500" style={{ '--hover-border': '#04CFBC' }} 
                       onMouseEnter={(e) => e.currentTarget.style.borderColor = '#04CFBC'}
                       onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Precisa de algo específico? Trabalhamos com projetos personalizados!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white hover:bg-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300"
            style={{ color: '#04CFBC' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.color = '#04CFBC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = '#04CFBC';
            }}
            onClick={onRequestQuote}
          >
            Solicitar Orçamento Personalizado
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}