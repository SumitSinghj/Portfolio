import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import movieImg from "../assets/movie_recommendation.jpeg";
import sentimentImg from "../assets/sentiment_analysis.png";
import portfolioImg from "../assets/portfolio.jpeg";

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "ML model using KNN algorithm and Streamlit that recommends movies based on user preferences and genres with 85% accuracy.",
      tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
      demoLink: "#",
      codeLink: "#",
      image: movieImg
    },
    {
      title: "Sentiment Analysis System",
      description: "NLP model that analyzes sentiment of social media posts with 92% accuracy, deployed as a web application.",
      tags: ["Python", "NLTK", "TensorFlow", "Flask"],
      demoLink: "#",
      codeLink: "#",
      image: sentimentImg
    },
    {
      title: "Portfolio",
      description: "Interactive platform that helps users create professional portfolios with customizable templates and AI suggestions.",
      tags: ["React","Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      image: portfolioImg
    }
  ];

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className={`text-3xl md:text-5xl font-bold leading-tight md:leading-[1.5] mb-2 md:mb-4 ${
          theme === 'dark'
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700'
        }`}>
          My Projects
        </h2>
        <p className={`text-lg max-w-3xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Here are some of my featured projects. Each one was built to solve specific problems and demonstrate different skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProjectCard 
              project={project} 
              theme={theme} 
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;