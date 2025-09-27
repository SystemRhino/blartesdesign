import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from './ProjectCard.jsx';
import PortfolioModal from './PortfolioModal';
import projects from '../data/projects.js';

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleProjectClick = (project) => {
    // Converter dados do projeto para o formato esperado pelo modal
    const modalProject = {
      id: project.id,
      title: project.name,
      image: project.images[0], // Primeira imagem como principal
      images: project.images, // Array completo de imagens
      tags: project.tags,
      category: project.tags[0] || 'Design'
    };
    
    setSelectedProject(modalProject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-2 h-32 bg-[#04CFBC] rotate-12 opacity-20" />
      <div className="absolute bottom-10 right-10 w-32 h-2 bg-[#04CFBC] opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#0267DE] text-white px-4 py-2 rounded-full font-semibold text-sm tracking-wide uppercase mb-4">
            Nossos Projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Trabalhos que{" "}
            <span style={{ color: "#04CFBC" }}>Inspiram</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada projeto é único e desenvolvido com atenção aos
            detalhes para superar expectativas
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de Portfólio */}
      <PortfolioModal
        item={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}