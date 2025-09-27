"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Copy, Check, Share2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

import { type ProjectItem } from "../utils/projectLoader";

interface ShareModalProps {
  item: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ item, isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  // Gera o link direto para o projeto
  const projectUrl = `${window.location.origin}#portfolio-${item.id}`;
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(projectUrl);
      setCopied(true);
      toast.success("Link copiado para a área de transferência!");
      
      // Reset do estado após 2 segundos
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Erro ao copiar o link");
    }
  };

  const handleShareWhatsApp = () => {
    const message = `Confira este trabalho incrível da BlarteseDesign: ${item.title}\n\n${projectUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleShareTwitter = () => {
    const message = `Confira este trabalho incrível da BlarteseDesign: ${item.title}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(projectUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[90vw] bg-gray-900 border-gray-700 text-white" aria-describedby="share-modal-description">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div 
              className="p-2 rounded-full"
              style={{ backgroundColor: "#0267DE" }}
            >
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-white">
                Compartilhar Projeto
              </DialogTitle>
              <DialogDescription id="share-modal-description" className="text-gray-400 text-sm">
                Envie este link para seus contatos
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Informações do projeto */}
          <div className="flex gap-4 p-4 bg-gray-800 rounded-lg">
            <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden shrink-0">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Badge 
                className="text-black mb-2 text-xs"
                style={{ backgroundColor: "#04CFBC" }}
              >
                {item.category}
              </Badge>
              <h4 className="font-bold text-white truncate">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>

          {/* Campo de link */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white">
              Link do Projeto
            </label>
            <div className="flex gap-2">
              <Input
                value={projectUrl}
                readOnly
                className="bg-gray-800 border-gray-600 text-white flex-1"
              />
              <Button
                onClick={handleCopyLink}
                className="shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: copied ? "#04CFBC" : "#0267DE",
                  color: copied ? "black" : "white"
                }}
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Botões de compartilhamento social */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-white">
              Compartilhar em
            </label>
            <div className="grid grid-cols-3 gap-3">
              <Button
                onClick={handleShareWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white p-3 h-auto flex flex-col gap-1"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">W</span>
                </div>
                <span className="text-xs">WhatsApp</span>
              </Button>
              
              <Button
                onClick={handleShareFacebook}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 h-auto flex flex-col gap-1"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">f</span>
                </div>
                <span className="text-xs">Facebook</span>
              </Button>
              
              <Button
                onClick={handleShareTwitter}
                className="bg-black hover:bg-gray-800 text-white p-3 h-auto flex flex-col gap-1 border border-gray-600"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">X</span>
                </div>
                <span className="text-xs">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Botão de fechar */}
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}