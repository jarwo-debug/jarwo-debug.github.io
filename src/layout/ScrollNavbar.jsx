import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const ScrollNavbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Home">
      <div
        className={`fixed z-50 w-full px-4 transition-all duration-1000 rounded-full mt-1 inset-x-0 mx-auto transform ${
          atTop
            ? "max-w-6xl"
            : "bg-black bg-opacity-90 backdrop-blur-xl max-w-7xl"
        }`}
      >
        <div className="flex flex-col w-full p-2 mx-auto md:items-center md:justify-between md:flex-row">
          <div className="flex flex-row items-center justify-between w-full">
            <Link to="Home" smooth={true} duration={500}>
              <span
                className={`font-bold tracking-tighter uppercase ${
                  atTop ? "text-black" : "text-white"
                }`}
              >
                ✺ Anjar IT
              </span>
            </Link>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              {/* Simple hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav
            className={`flex-col flex-grow gap-8 pb-4 md:pb-0 md:flex md:flex-row lg:ml-auto justify-end ${
              open ? "flex" : "hidden"
            }`}
          >
            {["Live", "Program", "Berita", "Redaksi"].map((link, i) => (
              <Link
                key={i}
                to={link}
                className={`relative mx-2 px-2 py-1 transition-all duration-300 ease-in-out 
      ${
        atTop ? "text-gray-950600 text-lg" : "text-white text-xl"
      } hover:text-blue-500 cursor-pointer group`}
                smooth={true}
                duration={500}
              >
                <span className="relative z-10">{link}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ScrollNavbar;
