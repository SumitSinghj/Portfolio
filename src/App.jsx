import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader theme={theme} />;
  }

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden scroll-smooth transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-100" 
          : "bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] text-gray-900"
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section id="home" className="scroll-mt-20">
        <Home theme={theme} />
      </section>

      <section id="about" className="scroll-mt-20">
        <About theme={theme} />
      </section>

      <section id="experience" className="scroll-mt-20">
        <Experience theme={theme} />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects theme={theme} />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact theme={theme} />
      </section>

      <Footer theme={theme} />
    </div>
  );
}

export default App;