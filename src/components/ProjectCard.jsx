import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, theme, index }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`h-full rounded-2xl overflow-hidden shadow-lg ${
        theme === 'dark'
          ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800'
          : 'bg-white/80 backdrop-blur-sm border border-gray-200'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          theme === 'dark'
            ? 'from-gray-900/90 to-transparent'
            : 'from-white/90 to-transparent'
        }`}></div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>
        <p className={`mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-800 text-blue-300'
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } transition-colors`}
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            } transition-colors`}
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;