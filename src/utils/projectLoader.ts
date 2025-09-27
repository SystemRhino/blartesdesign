/**
 * Utilitário para carregar automaticamente projetos da pasta /images/projects
 * e gerar dados dinamicamente baseados nos nomes dos arquivos
 */

// Interface para um item de projeto
export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  images?: string[]; // Campo opcional para múltiplas imagens
  description: string;
  tags: string[];
}

/**
 * Converte o nome do arquivo em um título formatado
 * Exemplo: "faixada_predio.jpg" -> "Faixada Predio"
 */
export function formatProjectTitle(filename: string): string {
  // Remove a extensão do arquivo
  const nameWithoutExtension = filename.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
  
  // Substitui underscores e hifens por espaços
  const withSpaces = nameWithoutExtension.replace(/[_-]/g, ' ');
  
  // Converte primeira letra de cada palavra para maiúscula
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Determina a categoria baseada no nome do arquivo ou palavras-chave
 */
export function determineCategory(filename: string): string {
  const lowercaseFilename = filename.toLowerCase();
  
  if (lowercaseFilename.includes('faixada') || lowercaseFilename.includes('fachada') || 
      lowercaseFilename.includes('letras') || lowercaseFilename.includes('letreiro')) {
    return 'Letras Caixa';
  }
  
  if (lowercaseFilename.includes('envelopamento') || lowercaseFilename.includes('veiculo') ||
      lowercaseFilename.includes('carro') || lowercaseFilename.includes('frota')) {
    return 'Envelopamento';
  }
  
  if (lowercaseFilename.includes('placa') || lowercaseFilename.includes('sinalizacao') ||
      lowercaseFilename.includes('direcional')) {
    return 'Placas';
  }
  
  if (lowercaseFilename.includes('banner') || lowercaseFilename.includes('lona') ||
      lowercaseFilename.includes('outdoor')) {
    return 'Banners';
  }
  
  if (lowercaseFilename.includes('cartao') || lowercaseFilename.includes('card') ||
      lowercaseFilename.includes('visita')) {
    return 'Cartões';
  }
  
  if (lowercaseFilename.includes('panfleto') || lowercaseFilename.includes('folder') ||
      lowercaseFilename.includes('flyer')) {
    return 'Panfletos';
  }
  
  // Categoria padrão
  return 'Outros';
}

/**
 * Gera tags baseadas no nome do arquivo e categoria
 */
export function generateTags(filename: string, category: string): string[] {
  const tags: string[] = [];
  const lowercaseFilename = filename.toLowerCase();
  
  // Tags baseadas na categoria
  switch (category) {
    case 'Letras Caixa':
      tags.push('LED', 'Acrílico', 'Fachada');
      break;
    case 'Envelopamento':
      tags.push('Vinil', 'Veículos', 'Identidade');
      break;
    case 'Placas':
      tags.push('ACM', 'Sinalização', 'Direcional');
      break;
    case 'Banners':
      tags.push('Lona', 'Grande Formato', 'Impressão Digital');
      break;
    case 'Cartões':
      tags.push('Papel Especial', 'Acabamento', 'Verniz UV');
      break;
    case 'Panfletos':
      tags.push('Folder', 'Couché', 'Dobra');
      break;
    default:
      tags.push('Design', 'Personalizado', 'Premium');
  }
  
  // Tags adicionais baseadas no nome do arquivo
  if (lowercaseFilename.includes('premium') || lowercaseFilename.includes('luxo')) {
    tags.push('Premium');
  }
  
  if (lowercaseFilename.includes('led')) {
    tags.push('LED');
  }
  
  if (lowercaseFilename.includes('corporativo') || lowercaseFilename.includes('empresa')) {
    tags.push('Corporativo');
  }
  
  return tags.slice(0, 3); // Limita a 3 tags
}

/**
 * Gera uma descrição padrão baseada na categoria e título
 */
export function generateDescription(title: string, category: string): string {
  const descriptions = {
    'Letras Caixa': `${title} - Letras caixa em LED com acabamento premium e alta durabilidade.`,
    'Envelopamento': `${title} - Projeto completo de envelopamento com material de alta qualidade.`,
    'Placas': `${title} - Sistema de sinalização profissional com acabamento diferenciado.`,
    'Banners': `${title} - Material gráfico de alto impacto para divulgação eficiente.`,
    'Cartões': `${title} - Cartões de visita com acabamento especial e materiais premium.`,
    'Panfletos': `${title} - Material promocional com design impactante e alta qualidade de impressão.`,
    'Outros': `${title} - Projeto personalizado desenvolvido com atenção aos detalhes.`
  };
  
  return descriptions[category] || descriptions['Outros'];
}

/**
 * Simula o carregamento de arquivos da pasta /images/projects
 * Em um ambiente real, isso seria substituído por uma função que lê o sistema de arquivos
 */
export function getProjectFiles(): string[] {
  // Esta é uma simulação. Em um ambiente real com Node.js, você usaria:
  // import { readdirSync } from 'fs';
  // return readdirSync('/images/projects').filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
  
  // Simulação de arquivos na pasta
  return [
    'faixada_predio.jpg',
    'envelopamento_frota-comercial.jpg',
    'sinalizacao_shopping-center.png',
    'campanha_evento-corporativo.jpg',
    'identidade_visual-startup.png',
    'material_promocional-loja.jpg',
    'letras-caixa_restaurante.jpg',
    'banner_inauguracao-loja.png',
    'placas_direcionais-hospital.jpg',
    'cartoes_visita-advogado.jpg'
  ];
}

/**
 * Carrega e processa todos os projetos automaticamente
 */
export function loadProjectsFromFolder(): ProjectItem[] {
  const files = getProjectFiles();
  
  return files.map((filename, index) => {
    const title = formatProjectTitle(filename);
    const category = determineCategory(filename);
    const tags = generateTags(filename, category);
    const description = generateDescription(title, category);
    
    // Para a simulação, usamos imagens do Unsplash
    // Em um ambiente real, seria: `/images/projects/${filename}`
    const imageMap: { [key: string]: string } = {
      'faixada_predio.jpg': 'https://images.unsplash.com/photo-1522948079727-8d129da44f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0ZXJwcmVzcyUyMHByaW50aW5nJTIwZGVzaWdufGVufDF8fHx8MTc1NjA2NTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'envelopamento_frota-comercial.jpg': 'https://images.unsplash.com/photo-1699079184537-60ec4962456d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwd3JhcCUyMGNhciUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNjU0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'sinalizacao_shopping-center.png': 'https://images.unsplash.com/photo-1643393770776-364544582aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduYWdlJTIwYmFubmVyJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1NjA2NTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'campanha_evento-corporativo.jpg': 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwZ3JhcGhpYyUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNjU0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'identidade_visual-startup.png': 'https://images.unsplash.com/photo-1579642984744-4dd0fe83c38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwcHJpbnRpbmd8ZW58MXx8fHwxNzU2MDUwODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'material_promocional-loja.jpg': 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHByaW50aW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'letras-caixa_restaurante.jpg': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbGVkJTIwc2lnbnxlbnwxfHx8fDE3NTYwNjU0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'banner_inauguracao-loja.png': 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBhZHZlcnRpc2luZyUyMHNpZ258ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'placas_direcionais-hospital.jpg': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHNpZ25hZ2V8ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'cartoes_visita-advogado.jpg': 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBsYXd5ZXJ8ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    };
    
    return {
      id: index + 1,
      title,
      category,
      image: imageMap[filename] || 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHByaW50aW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU2MDY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description,
      tags
    };
  });
}

/**
 * Obtém as categorias únicas dos projetos carregados
 */
export function getProjectCategories(projects: ProjectItem[]): string[] {
  const categories = ['Todos', ...new Set(projects.map(project => project.category))];
  return categories;
}