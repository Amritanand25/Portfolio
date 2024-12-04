import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import { WorkspaceScene } from "./3d/WorkspaceScene";
import { ScrollIndicator } from "./ScrollIndicator";
import { DownloadButton } from "./ui/DownloadButton";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <ParticlesBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16 lg:mt-28 md:mt-20"
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

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative -mt-8"
          >
            <div className="relative z-10">
              <WorkspaceScene />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
      <div className="mt-6">
        <ScrollIndicator />
      </div>
    </section>
  );
};
