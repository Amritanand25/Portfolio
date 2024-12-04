import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Coffee } from "lucide-react";
import { FloatingMolecules } from "./3d/FloatingMolecules";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-900 bg-gray-50 relative">
      <FloatingMolecules />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center dark:text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <Code2 className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate about creating efficient and scalable web solutions
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <Brain className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Love tackling complex challenges and finding elegant solutions
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            >
              <Coffee className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Continuous Learner
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Always exploring new technologies and best practices
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
