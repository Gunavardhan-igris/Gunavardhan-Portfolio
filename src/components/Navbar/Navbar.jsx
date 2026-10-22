import { useEffect, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import "./Navbar.css";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => handleNavigation("home")}
          aria-label="Guna home"
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Guna</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + index * 0.08,
                duration: 0.4,
              }}
            >
              <a
                href={`#${link.id}`}
                onClick={() => handleNavigation(link.id)}
                className={`navbar-link ${
                  activeSection === link.id ? "active" : ""
                }`}
                aria-current={
                  activeSection === link.id ? "location" : undefined
                }
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Hire Me button */}
        <a
          href="#contact"
          className="navbar-hire"
          onClick={() => handleNavigation("contact")}
        >
          <span>Hire Me</span>
          <FiArrowUpRight className="hire-icon" />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 45,
                scale: 0.7,
              }}
              transition={{ duration: 0.18 }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navbar"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.2,
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={() => handleNavigation(link.id)}
                  className={`mobile-navbar-link ${
                    activeSection === link.id ? "active" : ""
                  }`}
                  aria-current={
                    activeSection === link.id ? "location" : undefined
                  }
                >
                  {link.name}
                  <FiArrowUpRight className="mobile-link-icon" />
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
