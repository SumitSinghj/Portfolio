import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import heroImage from "../assets/image1.jpg";

const Home = ({ theme }) => {
  const handleDownloadResume = () => {
    const resumeUrl = '/Sumit_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Sumit's_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:pt-32">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div 
          className="md:w-1/2"
          variants={itemVariants}
        >
          <motion.p 
            className={`text-lg mb-2 font-medium ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}
            variants={itemVariants}
          >
            Hi there, I'm
          </motion.p>
          
          <motion.h1 
            className={`text-4xl md:text-6xl font-bold leading-tight md:leading-[1.5] mb-2 md:mb-4 ${
              theme === 'dark' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700'
            }`}
            variants={itemVariants}
          >
            Sumit Singh
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl mb-6 h-8"
            variants={itemVariants}
          >
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'AI/ML Enthusiast',
                  'Web Developer',
                  'Problem Solver'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
                cursorClassName: theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }}
            />
          </motion.div>
          
          <motion.p 
            className={`text-lg mb-8 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={itemVariants}
          >
            I build exceptional digital experiences that are fast, accessible, and visually appealing. 
            With expertise in both frontend and backend technologies, I create full-stack solutions 
            that solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
              }`}
            >
              Contact Me <ArrowRight size={18} />
            </motion.button>
            
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-white border border-gray-700'
                  : 'bg-white text-gray-900 border border-gray-300'
              }`}
            >
              <Download size={18} /> Resume
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            {[
              { icon: <Github />, url: 'https://github.com/SumitSinghj' },
              { icon: <Linkedin />, url: 'https://www.linkedin.com/in/sumit-j' },
              { icon: <Mail />, url: 'mailto:sumit2608j@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`p-3 rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-md transition-colors`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right Content - Hero Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <div className={`absolute -inset-4 rounded-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20'
                : 'bg-gradient-to-r from-blue-400/20 to-purple-500/20'
            } blur-xl`}></div>
            <motion.img
              src={heroImage}
              alt="Sumit Singh"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;