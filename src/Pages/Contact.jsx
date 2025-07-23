import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      emailjs.send(
        "service_0t6p4dj",
        "template_rmcbnef",
        formData,
        "iNn4IkgoTJYhIN5sb"
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${
          theme === 'dark'
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700'
        }`}>
          Get In Touch
        </h2>
        <p className={`text-lg max-w-3xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`max-w-2xl mx-auto rounded-3xl overflow-hidden p-8 ${
          theme === 'dark'
            ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800'
            : 'bg-white/80 backdrop-blur-sm border border-gray-200'
        }`}
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <FiCheckCircle className="mx-auto text-5xl text-green-500 mb-6" />
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Message Sent!
            </h3>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className={`px-6 py-3 rounded-lg font-medium ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } transition-colors`}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } border focus:outline-none focus:ring-2 ${
                    errors.name ? 'ring-red-500' : 'ring-blue-500'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } border focus:outline-none focus:ring-2 ${
                    errors.email ? 'ring-red-500' : 'ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } border focus:outline-none focus:ring-2 ${
                    errors.message ? 'ring-red-500' : 'ring-blue-500'
                  }`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  } transition-colors disabled:opacity-70`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;