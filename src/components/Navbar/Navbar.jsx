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

  // Scrollspy: detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Bottom of the page: activate contact
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= pageHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Top of the page: activate home
      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            currentSection = link.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (event, id) => {
    if (event) {
      event.preventDefault();
    }

    setActiveSection(id);
    setMenuOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      try {
        window.history.pushState(null, "", "#home");
      } catch {
        // ignore in restricted environments
      }
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const navbarEl = document.querySelector(".navbar");
      const navbarHeight = navbarEl
        ? navbarEl.getBoundingClientRect().height
        : 70;
      const extraOffset = 16;
      const elementTop = section.getBoundingClientRect().top + window.scrollY;
      const targetScroll = Math.max(0, elementTop - navbarHeight - extraOffset);

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });

      try {
        window.history.pushState(null, "", `#${id}`);
      } catch {
        // ignore in restricted environments
      }
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

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
            onClick={(e) => handleNavigation(e, "home")}
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
                  onClick={(e) => handleNavigation(e, link.id)}
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

          {/* Desktop Hire Me button */}
          <a
            href="#contact"
            className="navbar-hire"
            onClick={(e) => handleNavigation(e, "contact")}
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

        {/* Mobile navigation dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-navbar"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{
                duration: 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mobile-navbar-links">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.03,
                      duration: 0.18,
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavigation(e, link.id)}
                      className={`mobile-navbar-link ${
                        activeSection === link.id ? "active" : ""
                      }`}
                      aria-current={
                        activeSection === link.id ? "location" : undefined
                      }
                    >
                      <span>{link.name}</span>
                      <FiArrowUpRight className="mobile-link-icon" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Hire Me button */}
              <div className="mobile-navbar-footer">
                <a
                  href="#contact"
                  className="mobile-navbar-hire"
                  onClick={(e) => handleNavigation(e, "contact")}
                >
                  <span>Hire Me</span>
                  <FiArrowUpRight className="hire-icon" />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;
