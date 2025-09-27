/* 
=== SISTEMA DE MÚLTIPLAS IMAGENS ===

Para projetos com múltiplas imagens, basta adicionar mais itens no array "images":

COMO FUNCIONA:
- O ProjectCard.jsx sempre mostra a primeira imagem (images[0]) como thumbnail
- O PortfolioModal.tsx cria um carrossel com todas as imagens do array
- Para projetos com apenas 1 imagem, use: images: [imagemUnica]
- Para projetos com múltiplas imagens, use: images: [imagem1, imagem2, imagem3...]

*/

// Caminhonete - Múltiplas imagens
import caminhonete1 from '../images/projects/caminhonete1.jpg';
import caminhonete2 from "../images/projects/caminhonete2.jpg";
import caminhonete3 from "../images/projects/caminhonete3.jpg";
import caminhonete4 from "../images/projects/caminhonete4.jpg";
import caminhonete5 from "../images/projects/caminhonete5.jpg";
import caminhonete6 from "../images/projects/caminhonete6.jpg";
import caminhonete7 from "../images/projects/caminhonete7.jpg";
import caminhonete8 from "../images/projects/caminhonete8.jpg";
import caminhonete9 from "../images/projects/caminhonete9.jpg";
import caminhonete10 from "../images/projects/caminhonete10.jpg";
import caminhonete11 from "../images/projects/caminhonete11.jpg";

// Envelopamento caminhão - Múltiplas imagens
import envelopamentoCaminhao1 from "../images/projects/caminhaoA1.jpg";
import envelopamentoCaminhao2 from "../images/projects/caminhaoA2.jpg";
import envelopamentoCaminhao3 from "../images/projects/caminhaoA3.jpg";
import envelopamentoCaminhao4 from "../images/projects/caminhaoA4.jpg";

// Van escolar envelopada - Multiplas imagens
import vanEscolar1 from "../images/projects/van1.jpg";
import vanEscolar2 from "../images/projects/van2.jpg";
import vanEscolar3 from "../images/projects/van3.jpg";
import vanEscolar4 from "../images/projects/van4.jpg";
import vanEscolar6 from "../images/projects/van6.jpg";

// Sorveteria envelopamento - Multiplas imagens
import sorveteria1 from "../images/projects/sorvete1.jpg";
import sorveteria2 from "../images/projects/sorvete2.jpg";
import sorveteria3 from "../images/projects/sorvete3.jpg";
import sorveteria4 from "../images/projects/sorvete4.jpg";

// Sala infantil - multiplas imagens
import salaInfantil1 from "../images/projects/sala1.jpg";
import salaInfantil2 from "../images/projects/sala2.jpg";
import salaInfantil3 from "../images/projects/sala3.jpg";

// Quiosque faixada - multiplas imagens
import quiosque1 from "../images/projects/quiosque2.jpg";
import quiosque3 from "../images/projects/quiosque3.jpg";
import quiosque4 from "../images/projects/quiosque4.jpg";
import quiosque2 from "../images/projects/quiosque5.jpg";

// Prateleira envelopada - multiplas imagens
import prateleira1 from "../images/projects/prateleira1.jpg";
import prateleira2 from "../images/projects/prateleira2.jpg";
import prateleira3 from "../images/projects/prateleira3.jpg";
import prateleira4 from "../images/projects/prateleira4.jpg";
import prateleira5 from "../images/projects/prateleira5.jpg";
import prateleira6 from "../images/projects/prateleira6.jpg";
import prateleira7 from "../images/projects/prateleira7.jpg";

// Placas movimentação - Multiplas imagens
import placas from "../images/projects/placas1.jpg";
import placas2 from "../images/projects/placas2.jpg";
import placas3 from "../images/projects/placas3.jpg";

// Caminhonete envelopamento - Múltiplas imagens
import caminhoneteB1 from "../images/projects/caminhoneteB1.jpg";
import caminhoneteB2 from "../images/projects/caminhoneteB2.jpg";
import caminhoneteB3 from "../images/projects/caminhoneteB3.jpg";
import caminhoneteB4 from "../images/projects/caminhoneteB4.jpg";

// Escadaria decorada - Multiplas imagens
import escadas1 from "../images/projects/escada1.jpg";
import escadas2 from "../images/projects/escada2.jpg";
import escadas3 from "../images/projects/escada3.jpg";

// Envelopamento de carro - Multiplas imagens
import carroE1 from "../images/projects/carroE1.jpg";
import carroE2 from "../images/projects/carroE2.jpg";
import carroE3 from "../images/projects/carroE3.jpg";
import carroE4 from "../images/projects/carroE4.jpg";
import carroE5 from "../images/projects/carroE5.jpg";
import carroE6 from "../images/projects/carroE6.jpg";
import carroE7 from "../images/projects/carroE7.jpg";
import carroE8 from "../images/projects/carroE8.jpg";
import carroE9 from "../images/projects/carroE9.jpg";

// Envelopamento de carro - Multiplas imagens
import saveiroA1 from "../images/projects/saveiroA1.jpg";
import saveiroA2 from "../images/projects/saveiroA2.jpg";
import saveiroA3 from "../images/projects/saveiroA3.jpg";
import saveiroA4 from "../images/projects/saveiroA4.jpg";
import saveiroA5 from "../images/projects/saveiroA5.jpg";

// Decoracao mesa mar - Multiplas imagens
import decoracao1 from "../images/projects/decoracao1.jpg";
import decoracao2 from "../images/projects/decoracao2.jpg";

// Envelopamento de geladeira - Multiplas imagens
import geladeira1 from "../images/projects/geladeira1.jpg";
import geladeira2 from "../images/projects/geladeira2.jpg";

// Latão envelopamento - Multiplas imagens
import latao1 from "../images/projects/latao1.jpg";
import latao2 from "../images/projects/latao2.jpg";

// Letreiro de empresa
import letreiroE1 from "../images/projects/letreiroE1.jpg";
import letreiroE2 from "../images/projects/letreiroE2.jpg";
import letreiroE3 from "../images/projects/letreiroE3.jpg";
import letreiroE4 from "../images/projects/letreiroE4.jpg";
import letreiroE5 from "../images/projects/letreiroE5.jpg";

// Letreiro de loja 
import loja1 from "../images/projects/lojaA1.jpg";
import loja2 from "../images/projects/lojaA2.jpg";
import loja3 from "../images/projects/lojaA3.jpg";

// Faixa loja
import faixaLoja1 from "../images/projects/lojaB1.jpg";

// Letreiro loja 
import lojaA1 from "../images/projects/lojaC1.jpg";
import lojaA2 from "../images/projects/lojaC2.jpg";
import lojaA3 from "../images/projects/lojaC3.jpg";

// Porta decorada
import porta from "../images/projects/porta1.jpg";
import porta2 from "../images/projects/porta2.jpg";

// letreiro
import letreiroA1 from "../images/projects/letreiroA1.jpg";
import letreiroA3 from "../images/projects/letreiroA3.jpg";

const projects = [
  {
    id: 1,
    name: "Caminhonete Personalizada",
    tags: ["Identidade", "Vinil", "Veículos"],
    images: [caminhonete1, caminhonete2, caminhonete3, caminhonete4, caminhonete5, caminhonete6, caminhonete7, caminhonete8, caminhonete9, caminhonete10, caminhonete11] // MÚLTIPLAS IMAGENS
  },
  {
    id: 2,
    name: "Envelopamento de Caminhão",
    tags: ["Identidade", "Vinil", "Veículos"],
    images: [envelopamentoCaminhao1, envelopamentoCaminhao2, envelopamentoCaminhao3, envelopamentoCaminhao4] // MÚLTIPLAS IMAGENS
  },
  {
    id: 3,
    name: "Van Escolar Envelopada",
    tags: ["Identidade", "Vinil", "Veículos"],
    images: [vanEscolar1, vanEscolar2, vanEscolar3, vanEscolar4, vanEscolar6] // MÚLTIPLAS IMAGENS
  },
  {
    id: 4,
    name: "Sorveteria Envelopada",
    tags: ["Identidade", "Vinil", "Veículos"],
    images: [sorveteria1, sorveteria2, sorveteria3, sorveteria4] // MÚLTIPLAS IMAGENS
  },
  {
    id: 5,
    name: "Sala Infantil Decorada",
    tags: ["Adesivo", "Papel de Parede", "Infantil"],
    images: [salaInfantil1, salaInfantil2, salaInfantil3] // MÚLTIPLAS IMAGENS
  },
  {
    id: 6,
    name: "Quiosque com Faixada Personalizada",
    tags: ["LED", "Acrílico", "Fachada"],
    images: [quiosque1, quiosque2, quiosque3, quiosque4] // MÚLTIPLAS IMAGENS
  },
  {
    id: 7,
    name: "Prateleira Envelopada",
    tags: ["Adesivo", "Vinil", "Móveis"],
    images: [prateleira1, prateleira2, prateleira3, prateleira4, prateleira5, prateleira6, prateleira7] // MÚLTIPLAS IMAGENS
  },
  {
    id: 8,
    name: "Placas de Sinalização e Movimentação",
    tags: ["Adesivo", "Sinalização", "Comercial"],
    images: [placas, placas2, placas3] // MÚLTIPLAS IMAGENS
  },
  {
    id: 9,
    name: "Caminhonete Envelopada",
    tags: ["Adesivo", "Vinil", "Veículos"],
    images: [caminhoneteB1, caminhoneteB2, caminhoneteB3, caminhoneteB4] // MÚLTIPLAS IMAGENS
  },
  {
    id: 10,
    name: "Escadaria Decorada",
    tags: ["Adesivo", "Vinil", "Comercial"],
    images: [escadas1, escadas2, escadas3] // MÚLTIPLAS IMAGENS
  },
  { 
    id: 11,
    name: "Envelopamento de Carro",
    tags: ["Adesivo", "Vinil", "Veículos"],
    images: [carroE1, carroE2, carroE3, carroE4, carroE5, carroE6, carroE7, carroE8, carroE9] // MÚLTIPLAS IMAGENS
  },
  { 
    id: 12,
    name: "Envelopamento de Saveiro",
    tags: ["Adesivo", "Vinil", "Veículos"],
    images: [saveiroA1, saveiroA2, saveiroA3, saveiroA4, saveiroA5] // MÚLTIPLAS IMAGENS
  },
  {
    id: 13,
    name: "Decoração Mesa Mar",
    tags: ["Adesivo", "Vinil", "Comercial"],
    images: [decoracao2, decoracao1] // MÚLTIPLAS IMAGENS
  },
  {
    id: 14,
    name: "Envelopamento de Geladeira",
    tags: ["Adesivo", "Vinil", "Comercial"],
    images: [geladeira2, geladeira1] // MÚLTIPLAS IMAGENS
  },
  {
    id: 15,
    name: "Latão Envelopado",
    tags: ["Adesivo", "Vinil", "Comercial"],
    images: [latao1, latao2] // MÚLTIPLAS IMAGENS
  },
  {
    id: 16,
    name: "Letreiro de Empresa",
    tags: ["LED", "Acrílico", "Fachada"],
    images: [letreiroE1, letreiroE2, letreiroE3, letreiroE4, letreiroE5] // MÚLTIPLAS IMAGENS
  },
  {
    id: 17,
    name: "Letreiro de Loja",
    tags: ["LED", "Acrílico", "Fachada"],
    images: [loja1, loja2, loja3] // MÚLTIPLAS IMAGENS
  },
  {
    id: 18,
    name: "Faixa de Loja",
    tags: ["Adesivo", "Vinil", "Comercial"],
    images: [faixaLoja1] // IMAGEM ÚNICA
  },
  {
    id: 19,
    name: "Letreiro Loja",
    tags: ["LED", "Acrílico", "Fachada"],
    images: [lojaA2, lojaA1, lojaA3] // MÚLTIPLAS IMAGENS
  },
  {
    id: 20,
    name: "Porta Decorada",
    tags: ["Adesivo", "Vinil", "Comercial"],
    images: [porta, porta2] // MÚLTIPLAS IMAGENS
  },
  {
    id: 21,
    name: "Letreiro",
    tags: ["LED", "Acrílico", "Fachada"],
    images: [letreiroA1, letreiroA3] // MÚLTIPLAS IMAGENS
  },
];

export default projects;