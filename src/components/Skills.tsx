import React from "react";
import { motion } from "framer-motion";
import { WavePattern } from "./3d/WavePattern";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import {
  Code2,
  Database,
  Layout,
  Terminal,
  GitBranch,
  Server,
} from "lucide-react";

const skillsData = [
  { category: "Frontend", value: 95, icon: Layout },
  { category: "Backend", value: 85, icon: Server },
  { category: "Database", value: 80, icon: Database },
  { category: "DevOps", value: 75, icon: GitBranch },
  { category: "Problem Solving", value: 90, icon: Terminal },
  { category: "Algorithms", value: 85, icon: Code2 },
];

const technologies = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Socket.io", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="py-20 dark:bg-gray-900 relative overflow-hidden">
      <WavePattern />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Expertise across the full stack
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData}>
                <PolarGrid stroke="#8B5CF6" />
                <PolarAngleAxis dataKey="category" tick={{ fill: "#8B5CF6" }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="#8B5CF6"
                  fill="#8B5CF6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:gap-12 md:mx-24">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  {tech.name}
                </h3>
                <div className="space-y-4">
                  {tech.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-purple-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="bg-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 md:mx-24">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300"
            >
              <skill.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {skill.category}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-purple-500 h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
