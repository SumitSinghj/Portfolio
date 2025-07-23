import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const Footer = ({ theme }) => {
  const socialLinks = [
    {
      icon: <FiMail size={20} />,
      url: "mailto:sumit2608j@gmail.com",
      label: "sumit2608j@gmail.com"
    },
    {
      icon: <FiLinkedin size={20} />,
      url: "https://www.linkedin.com/in/sumit-j",
      label: "linkedin.com/in/sumit-j"
    },
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/SumitSinghj",
      label: "github.com/SumitSinghj"
    },
    {
      icon: <FiTwitter size={20} />,
      url: "https://twitter.com/sumit",
      label: "@sumit"
    }
  ];

  return (
    <footer
      id="footer"
      className={`py-12 ${
        theme === 'dark'
          ? 'bg-gray-900/70 text-gray-300'
          : 'bg-gray-100 text-gray-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Sumit Singh
            </h3>
            <p className="mb-4">
              Full Stack Developer & AI/ML Enthusiast building digital experiences that matter.
            </p>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contact
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    } transition-colors`}
                  >
                    <span className={`p-2 rounded-full ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-blue-400'
                        : 'bg-white text-blue-600'
                    }`}>
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`flex items-center gap-2 ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-700 hover:text-gray-900'
                    } transition-colors`}
                  >
                    <span className={`w-2 h-2 rounded-full ${
                      theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          className="mt-12 text-center"
          whileHover={{ y: -3 }}
        >
          <a
            href="#home"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            } transition-colors shadow-md`}
          >
            Back to Top
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;