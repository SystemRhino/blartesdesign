"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";
import GoogleMap from "./GoogleMap";

interface ContactSectionProps {
  highlightForm?: boolean;
}

export default function ContactSection({ highlightForm = false }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos obrigatórios
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Campos obrigatórios", {
        description: "Por favor, preencha todos os campos obrigatórios (*) antes de enviar.",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Montar mensagem formatada para WhatsApp
    const whatsappMessage = ` *SOLICITAÇÃO DE ORÇAMENTO - BlarteseDesign*

 *Cliente:* ${formData.name}
 *E-mail:* ${formData.email}
 *Telefone:* ${formData.phone}
 *Serviço:* ${formData.service || 'Não especificado'}

 *Detalhes do Projeto:*
${formData.message}

---
_Mensagem enviada através do site da BlarteseDesign_`;

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp da empresa (formato: 5511999999999)
    const whatsappNumber = "5511939340489"; // +55 11 93934-0489
    
    // Criar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    console.log("Form submitted:", formData);
    console.log("WhatsApp URL:", whatsappUrl);
    
    // Mostrar feedback e redirecionar para WhatsApp
    toast.success("Redirecionando para WhatsApp...", {
      description: "Sua mensagem foi preparada e você será redirecionado para o WhatsApp.",
      duration: 3000,
    });
    
    // Pequeno delay para mostrar o toast antes do redirecionamento
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
    
    setIsSubmitting(false);

    // Reset form após um delay adicional para garantir que o toast seja visível
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "R. Patativa, 271, Cotia",
      secondary: "Sao Paulo, 06700-287",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Telefones",
      info: "(11) 93934-0489",
      secondary: "(11) 93934-0489 (WhatsApp)",
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@blartesedesign.com",
      secondary: "orcamento@blartesedesign.com",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda à Sexta: 8h às 18h",
      secondary: "Sábado: 8h às 12h",
      color: "text-orange-500",
    },
  ];

  const services = [
    "Placas Personalizadas",
    "Lonas e Banners",
    "Letras Caixa",
    "Envelopamento Automotivo",
    "Envelopamento de Móveis",
    "Cartões de Visita",
    "Panfletos e Folders",
    "Outro (especificar na mensagem)",
  ];

  return (
    <section
      id="contato"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-[#04CFBC]/20 rotate-12" />
      <div className="absolute bottom-0 right-1/4 w-32 h-1 bg-[#04CFBC]/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-black text-[#04CFBC] px-4 py-2 rounded-full font-semibold text-sm tracking-wide uppercase mb-4">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Vamos{" "}
            <span className="text-[#04CFBC]">conversar</span>{" "}
            sobre seu projeto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em
            realidade. Conte-nos sobre seu projeto!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 border-gray-800 p-6 hover:bg-gray-800 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-full bg-gray-800 ${item.color}`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 font-semibold">
                          {item.info}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.secondary}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Quick Contact Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-3 pt-6"
              >
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                  onClick={() => {
                    const directMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da BlarteseDesign. 😊");
                    const whatsappUrl = `https://wa.me/5511939340489?text=${directMessage}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  WhatsApp Direto
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#04CFBC] text-[#04CFBC] hover:bg-[#04CFBC] hover:text-black font-semibold py-3"
                  onClick={() => {
                    window.open("tel:+5511939340489", "_self");
                  }}
                >
                  Ligar Agora
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className={`bg-gray-900 border-gray-800 p-8 transition-all duration-1000 ${
              highlightForm ? 'ring-2 ring-[#04CFBC] shadow-lg shadow-[#04CFBC]/20' : ''
            }`}>
              {highlightForm && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-[#04CFBC]/20 border border-[#04CFBC]/50 rounded-lg"
                >
                  <p className="text-[#04CFBC] text-sm font-semibold text-center">
                    📋 Preencha o formulário abaixo para solicitar seu orçamento personalizado!
                  </p>
                </motion.div>
              )}
              
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nome Completo*
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#04CFBC]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      E-mail*
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#04CFBC]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Telefone/WhatsApp*
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#04CFBC]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:border-[#04CFBC] focus:outline-none"
                    >
                      <option value="">
                        Selecione um serviço
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Mensagem*
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto, dimensões, prazo e outras informações importantes..."
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#04CFBC]"
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0267DE] text-white hover:bg-[#0456C7] font-bold py-4 text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Solicitar Orçamento
                      </div>
                    )}
                  </Button>
                </motion.div>

                <p className="text-gray-400 text-sm text-center">
                  * Campos obrigatórios. Responderemos em até 24
                  horas!
                </p>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="mt-16">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
}