import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    category: string;
  };
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2"
    >
      <motion.div
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        >
          <div className="absolute bottom-4 left-4 flex space-x-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="absolute top-4 right-4"
        >
          <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
            {project.category}
          </span>
        </motion.div>
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};