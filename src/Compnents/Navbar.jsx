import { Link } from "react-scroll";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Download from "../assets/MDAlfahadResume.pdf"; // Make sure this path is correct

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, to: "home", label: "Home" },
    { id: 2, to: "about", label: "About me" },
    { id: 3, to: "projects", label: "Projects" },
    { id: 4, to: "contact", label: "Contact" },
  ];

  return (
    <div className="w-full bg-green-200 backdrop-blur-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="logo text-2xl md:text-3xl font-bold text-gray-800 tracking-wider">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            ALFAHAD
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[18px] font-medium text-gray-700">
          {links.map(({ id, to, label }) => (
            <Link
              key={id}
              className="cursor-pointer relative group"
              to={to}
              spy={true}
              smooth={true}
              duration={500}
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <a
            href={Download}
            download="MDAlfahadResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full text-white px-5 py-2 flex items-center gap-2 font-semibold hover:bg-green-600 hover:scale-105 transform transition-all duration-300 shadow-md"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setNav(!nav)}
            className="text-2xl text-gray-800 z-50"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          nav ? "transform-none" : "-translate-y-full"
        }`}
      >
        {nav && ( // Only render links when nav is true to trigger stagger animation
          <>
            {links.map(({ id, to, label }, index) => (
              <Link
                key={id}
                onClick={() => setNav(false)}
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                style={{ animationDelay: `${index * 100}ms` }}
                className="cursor-pointer text-2xl font-semibold text-gray-800 my-4 opacity-0 animate-fadeInUp"
              >
                {label}
              </Link>
            ))}
            <a
              href={Download}
              download="MDAlfahadResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${links.length * 100}ms` }}
              className="bg-green-500 rounded-full text-white px-6 py-3 flex items-center gap-2 font-semibold mt-6 opacity-0 animate-fadeInUp"
            >
              <FaDownload /> Resume
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;