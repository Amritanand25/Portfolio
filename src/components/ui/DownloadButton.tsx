import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

export const DownloadButton: React.FC = () => {
  return (
    <motion.a
      href="/resume.pdf"
      download="Amrit_Anand_Resume.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg"
    >
      <FileDown className="w-5 h-5" />
      <span>Download Resume</span>
    </motion.a>
  );
};