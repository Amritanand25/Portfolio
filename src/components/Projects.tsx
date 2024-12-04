import React from "react";
import { motion } from "framer-motion";
import { CubeGrid } from "./3d/CubeGrid";
import { Github, ExternalLink, Code, Play } from "lucide-react";

const projects = [
  {
    title: "Video Player",
    description:
      "A web app with infinite commenting, live chat, and optimized performance, increasing engagement by 50%.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Redux", "Tailwind Css"],
    liveUrl: "https://v-player-9mtsbat7s-amritanand25.vercel.app/",
    githubUrl: "https://github.com/Amritanand25/VPlayer",
    category: "Frontend",
  },
  {
    title: "Schedule Meeting",
    description:
      "A scheduling app with intuitive features built using TypeScript, React, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Redux", "Storage"],
    liveUrl: "https://schedule-meeting-ic15g1qh6-amritanand25.vercel.app/",
    githubUrl: "https://github.com/Amritanand25/Schedule-Meeting",
    category: "Frontend",
  },
  {
    title: "CodePad",
    description:
      "A real-time collaborative coding platform using React, Node, and WebSocket.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Node.js", "WebSocket", "MongoDB"],
    liveUrl: "https://github.com/Amritanand25/real-time-code-editor",
    githubUrl: "https://github.com/Amritanand25/real-time-code-editor",
    category: "Full Stack",
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 dark:bg-gray-800 relative overflow-hidden">
      <CubeGrid />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Code className="w-12 h-12 mx-auto mb-4 text-purple-500" />
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Amritanand25?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            <span>View More Projects</span>
            <Play className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
