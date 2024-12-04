import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ParticlesBackground } from './components/ParticlesBackground';


export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 mx-auto mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60"
              alt="Amrit Anand"
              className="w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-lg animate-float"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 opacity-20"></div>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Amrit Anand
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 dark:text-gray-300">
            Full Stack Developer | React Specialist
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:amritanand.jnv25@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-300"
        >
          <p className="text-sm">Scroll Down</p>
          <div className="w-1 h-8 bg-purple-400 mx-auto mt-2 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};