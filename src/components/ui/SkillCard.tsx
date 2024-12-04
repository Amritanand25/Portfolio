import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  category: string;
  value: number;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, category, value, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.2)',
      }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300"
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-12 h-12 text-purple-500 mb-4" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{category}</h3>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-purple-500 h-2 rounded-full relative"
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-2 bg-white/30"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};