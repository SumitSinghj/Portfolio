import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiJavascript, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Experience = ({ theme }) => {
  const skills = [
    { icon: <FaReact size={40} />, name: "React", color: "#61DAFB" },
    { icon: <SiJavascript size={40} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript size={40} />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaNodeJs size={40} />, name: "Node.js", color: "#68A063" },
    { icon: <DiMongodb size={40} />, name: "MongoDB", color: "#47A248" },
    { icon: <FaPython size={40} />, name: "Python", color: "#3776AB" },
    { icon: <SiTensorflow size={40} />, name: "TensorFlow", color: "#FF6F00" },
    { icon: <FaDatabase size={40} />, name: "SQL", color: "#00758F" }
  ];

  const experiences = [
    {
      role: "Trainee",
      company: "Karvatech Solutions",
      period: "Nov 2024 - May 2025",
      description: [
        "Developed full-stack applications using MERN stack",
        "Implemented AI/ML models for business solutions",
        "Collaborated with team on agile development projects"
      ]
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: [
        "Built custom websites for small businesses",
        "Created automation scripts for clients",
        "Developed machine learning models for data analysis"
      ]
    }
  ];

  return (
    <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700'
          }`}>
            Skills & Experience
          </h2>
          <p className={`text-lg max-w-3xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Here's an overview of my technical skills and professional journey.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-8 rounded-3xl ${
            theme === 'dark'
              ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800'
              : 'bg-white/80 backdrop-blur-sm border border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-center p-4 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                <div style={{ color: skill.color }}>{skill.icon}</div>
                <span className={`mt-2 font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-8 rounded-3xl ${
            theme === 'dark'
              ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800'
              : 'bg-white/80 backdrop-blur-sm border border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 hover:bg-gray-800/70'
                    : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.role}
                    </h4>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    theme === 'dark'
                      ? 'bg-blue-900/50 text-blue-300'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className={`mr-2 mt-1 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;