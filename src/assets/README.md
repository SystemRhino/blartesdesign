# Pasta Assets

Esta pasta deve conter todas as imagens dos projetos.

## Estrutura esperada:

- banner_inauguracao-loja.png
- cartoes_visita-advogado.jpg  
- envelopamento_frota-comercial.jpg
- faixada_predio.jpg
- letras-caixa_restaurante.jpg
- sinalizacao_shopping-center.png

## Como usar:

1. Coloque as imagens dos projetos nesta pasta
2. Importe-as no arquivo `/data/projects.js` usando a sintaxe:
   ```javascript
   import imageName from '../assets/image-file.jpg';
   ```
3. Use as variáveis importadas no array de projetos

**Nota:** Atualmente as imagens estão sendo servidas via URLs do Unsplash para demonstração. Em produção, substitua pelas imagens reais nesta pasta.