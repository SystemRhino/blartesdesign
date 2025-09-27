import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ProjectCard({ project, onClick, isHovered, onHover, onHoverEnd }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden border-0 bg-gray-900 shadow-xl">
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <ImageWithFallback
              src={project.images[0]}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0.8 }}
              animate={{ scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-white p-4 rounded-full transition-colors duration-300"
                style={{ backgroundColor: "#0267DE" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm font-semibold">Ver Detalhes</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              className="text-xl font-bold text-white mb-3 transition-colors group-hover:duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#04CFBC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}