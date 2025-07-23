import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import aboutImage from "../assets/image2.jpg";

const About = ({ theme }) => {
  const aboutPoints = [
    {
      title: "Frontend Development",
      description: "I specialize in building responsive, accessible interfaces with React, Next.js, and modern CSS. My focus is on creating intuitive user experiences with clean, maintainable code.",
      icon: <IoArrowForward size={24} className="flex-shrink-0" />
    },
    {
      title: "Backend Development",
      description: "I develop scalable server-side applications using Node.js, Express, and MongoDB. I focus on creating efficient APIs and robust database architectures.",
      icon: <IoArrowForward size={24} className="flex-shrink-0" />
    },
    {
      title: "AI/ML Engineering",
      description: "I build machine learning models for real-world applications using Python, TensorFlow, and scikit-learn. From NLP to computer vision, I enjoy solving complex problems with AI.",
      icon: <IoArrowForward size={24} className="flex-shrink-0" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <motion.div
        className={`rounded-3xl overflow-hidden p-8 md:p-12 ${
          theme === 'dark'
            ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800'
            : 'bg-white/80 backdrop-blur-sm border border-gray-200'
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className={`text-3xl md:text-5xl font-bold mb-12 text-center ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700'
          }`}
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/3 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className={`absolute -inset-4 rounded-3xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20'
                  : 'bg-gradient-to-br from-blue-400/20 to-purple-500/20'
              } blur-xl`}></div>
              <img
                src={aboutImage}
                alt="Sumit Singh"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-white shadow-lg"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3"
            variants={itemVariants}
          >
            <motion.p 
              className={`text-lg mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              variants={itemVariants}
            >
              I'm a passionate developer with expertise in full-stack web development and artificial intelligence. 
              With a strong foundation in computer science and hands-on experience in building real-world applications, 
              I bring ideas to life through clean, efficient code and innovative solutions.
            </motion.p>
            
            <div className="space-y-6">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-4 p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 hover:bg-gray-800/70'
                      : 'bg-gray-100 hover:bg-gray-200'
                  } transition-colors`}
                  whileHover={{ x: 5 }}
                  variants={itemVariants}
                >
                  <div className={`mt-1 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {point.title}
                    </h3>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;