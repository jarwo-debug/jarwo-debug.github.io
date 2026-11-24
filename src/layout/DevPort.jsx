import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 px-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text animate-text-gradient">
              Innovative
            </span>
            <br />
            Developer &<br />
            <span className="gradient-text animate-text-gradient">
              Digital Creator
            </span>
          </h1>
          <p className="text-lg opacity-80 max-w-lg">
            Crafting immersive digital experiences with cutting-edge tech.
            Focused on performance, design, and seamless functionality.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-neon to-cyber rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              View Projects
            </button>
            <button className="px-6 py-3 border border-glass rounded-lg hover:bg-glass transition-all">
              Contact Me
            </button>
          </div>
        </div>
        <div className="relative">
          <div
            className="tilt-effect"
            data-tilt
            data-tilt-max="10"
            data-tilt-speed="400"
            data-tilt-perspective="1000"
          >
            <div className="glass-card rounded-2xl p-1">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Developer Coding"
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-neon rounded-full opacity-20 animate-pulse-slow -z-10"></div>
          <div
            className="absolute -top-6 -right-6 w-32 h-32 bg-cyber rounded-full opacity-20 animate-pulse-slow -z-10"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </div>
  </section>
);

const Work = () => (
  <section id="work" className="py-20 px-8">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 gradient-text">
        Featured <span className="text-white">Work</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "AI Dashboard",
            tech: "Next.js + Tailwind + TensorFlow",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            tags: ["React", "AI", "Node.js"],
            color: "neon",
          },
          {
            title: "E-Commerce Platform",
            tech: "React + GraphQL + Stripe",
            img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
            tags: ["React", "GraphQL", "MongoDB"],
            color: "cyber",
          },
          {
            title: "Blockchain Explorer",
            tech: "Solidity + Web3.js + Ethers",
            img: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
            tags: ["Blockchain", "Web3", "React"],
            color: "matrix",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="tilt-effect"
            data-tilt
            data-tilt-max="5"
            data-tilt-glare="true"
          >
            <div
              className={`glass-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-${project.color}/20 transition-all h-full`}
            >
              <img
                src={`${project.img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-80 mb-4">{project.tech}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-glass rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className={`text-${project.color} hover:underline`}>
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-8 bg-gradient-to-br from-void to-gray-900"
  >
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 gradient-text">
        Tech <span className="text-white">Stack</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[
          {
            name: "React",
            icon: "react/react-original.svg",
            desc: "Frontend",
          },
          {
            name: "Node.js",
            icon: "nodejs/nodejs-original.svg",
            desc: "Backend",
          },
          {
            name: "Tailwind",
            icon: "tailwindcss/tailwindcss-plain.svg",
            desc: "CSS",
          },
          {
            name: "TypeScript",
            icon: "typescript/typescript-original.svg",
            desc: "Language",
          },
          {
            name: "Python",
            icon: "python/python-original.svg",
            desc: "AI/ML",
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-glass rounded-full">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                alt={skill.name}
                className="w-10 h-10"
              />
            </div>
            <h3 className="font-bold">{skill.name}</h3>
            <p className="text-sm opacity-70">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-8 bg-dark-glass">
    <div className="container mx-auto text-center">
      <p className="text-gray-500 text-sm">
        © 2023 DevPort. All rights reserved.
      </p>
    </div>
  </footer>
);

const DevPort = () => {
  useEffect(() => {
    const container = document.getElementById("particles-js");
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      const size = Math.random() * 5 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 20 + 10;
      const color = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(1px)",
        opacity: "0.7",
        backgroundColor: color,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      });
      container.appendChild(particle);
    }
    if (window.innerWidth > 768) {
      const elements = document.querySelectorAll(".tilt-effect");
      VanillaTilt.init(elements, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
    return () => {
      container.innerHTML = "";
    };
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    darkIcon.classList.toggle("hidden");
    lightIcon.classList.toggle("hidden");
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <div id="particles-js" className="fixed inset-0 -z-10"></div>
      <nav className="fixed w-full z-50 bg-dark-glass py-4 px-8 backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            DEV<span className="text-white">PORT</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-neon transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-cyber transition-colors">
              Work
            </a>
            <a href="#skills" className="hover:text-matrix transition-colors">
              Skills
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-glass hover:bg-opacity-50 transition-all"
            >
              <svg
                id="dark-icon"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <svg
                id="light-icon"
                className="w-5 h-5 hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Hero />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default DevPort;
