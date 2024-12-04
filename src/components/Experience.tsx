import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, Award, Code, Users } from "lucide-react";

const experiences = [
  {
    company: "RekordBook",
    role: "Full Stack Developer",
    duration: "May 2023 - Present",
    location: "Bangalore, Karnataka",
    description: [
      "Developed PesoX, a Chrome extension for extracting data from LinkedIn and Gmail",
      "Built an intelligent tool using GPT-4 for advanced CSV calculations",
      "Leading the development of PesoHQ using React, Next.js, Tailwind CSS",
    ],
    color: "#8B5CF6",
    icon: Code,
  },
  {
    company: "Smart Task",
    role: "Frontend Developer",
    duration: "Aug 2022 - Apr 2023",
    location: "Ahmedabad, Gujarat",
    description: [
      "Designed authentication systems and dynamic landing pages",
      "Implemented secure protocols, reducing login errors by 40%",
      "Delivered high-quality products using React and Microsoft Azure AD-B2C",
    ],
    color: "#EC4899",
    icon: Users,
  },
  {
    company: "s759labs",
    role: "Software Developer",
    duration: "Aug 2021 - Aug 2022",
    location: "Pune, Maharashtra",
    description: [
      "Developed school management system for EdRail.com and SkillCounty.com",
      "Enhanced internal efficiency with an admin panel using Next.js and Material-UI",
    ],
    color: "#3B82F6",
    icon: Award,
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-500" />
          <h2 className="text-4xl font-bold dark:text-white">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            My journey in the tech industry
          </p>
        </motion.div>

        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: `2px solid ${exp.color}`,
                borderRadius: "1rem",
              }}
              contentArrowStyle={{ borderRight: `7px solid ${exp.color}` }}
              date={exp.duration}
              iconStyle={{ background: exp.color, color: "#fff" }}
              icon={<exp.icon />}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold dark:text-white">
                  {exp.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mt-2 text-purple-500">
                  {exp.company} - {exp.location}
                </h4>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-500" />
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
