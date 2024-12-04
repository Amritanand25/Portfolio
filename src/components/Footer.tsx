import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8 md:px-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Amrit Anand</h3>
            <p className="mb-4">Transforming ideas into elegant solutions through code.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:amritanand.jnv25@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Developer Quote</h3>
            <blockquote className="italic">
              "Code is like humor. When you have to explain it, it's bad."
              <br />
              <span className="text-sm mt-2 block">- Cory House</span>
            </blockquote>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2"
          >
            Made with <Heart className="w-4 h-4 text-red-500" /> by Amrit Anand © {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};