'use client';

import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';

interface CTASectionProps {
  onRequestQuote?: () => void;
}

export default function CTASection({ onRequestQuote }: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0267DE' }}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-black/10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-black/5 transform rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-black/10 transform -rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Transforme seu visual,
              <br />
              <span style={{ color: '#04CFBC' }}>impulsione seu negócio</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Pronto para destacar sua marca? Nossa equipe está preparada para 
              transformar suas ideias em realidade visual impactante.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* WhatsApp */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const whatsappUrl = "https://wa.me/5511939340489?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento para meu projeto. 😊");
                window.open(whatsappUrl, "_blank");
              }}
            >
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm mb-3">Resposta imediata para suas dúvidas</p>
              <span className="text-white font-semibold">(11) 93934-0489</span>
            </motion.div>

            {/* Telefone */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open("tel:+5511939340489", "_self");
              }}
            >
              <Phone className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
              <p className="text-white/70 text-sm mb-3">Atendimento personalizado</p>
              <span className="text-white font-semibold">(11) 93934-0489</span>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const subject = encodeURIComponent("Solicitação de Orçamento - BlarteseDesign");
                const body = encodeURIComponent("Olá,\n\nGostaria de solicitar um orçamento para meu projeto.\n\nDetalhes do projeto:\n- Tipo de serviço: \n- Dimensões: \n- Prazo: \n- Outras informações: \n\nAguardo retorno!\n\nObrigado(a).");
                window.open(`mailto:bl.arteedesign@gmail.com?subject=${subject}&body=${body}`, "_self");
              }}
            >
              <Mail className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
              <p className="text-white/70 text-sm mb-3">Orçamentos detalhados</p>
              <span className="text-white font-semibold">bl.arteedesign@gmail.com</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="bg-black text-yellow-400 hover:bg-gray-900 font-bold px-8 py-4 rounded-full text-lg group shadow-lg"
                size="lg"
                onClick={() => {
                  const whatsappUrl = "https://wa.me/5511939340489?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento para meu projeto. 😊");
                  window.open(whatsappUrl, "_blank");
                }}
              >
                <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Falar no WhatsApp
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-yellow-400 font-bold px-8 py-4 rounded-full text-lg group bg-transparent"
                size="lg"
                onClick={() => {
                  window.open("tel:+5511939340489", "_self");
                }}
              >
                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Ligar Agora
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t-2 border-black/20 pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-black text-black mb-2">24h</div>
              <div className="text-black/70 text-sm">Resposta Garantida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-black mb-2">Grátis</div>
              <div className="text-black/70 text-sm">Orçamento</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-black mb-2">100%</div>
              <div className="text-black/70 text-sm">Personalizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-black mb-2">5⭐</div>
              <div className="text-black/70 text-sm">Avaliação</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}