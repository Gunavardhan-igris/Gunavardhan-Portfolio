import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FiArrowRight,
  FiDownload,
  FiLinkedin,
  FiMail,
  FiDatabase,
} from "react-icons/fi";

import {
  FaPython,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiDjango } from "react-icons/si";

import "./Hero.css";

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/Gunavardhan-igris",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/kodumurugunavardhan789",
  },
  {
    icon: FiMail,
    label: "Email",
    url: "mailto:kodumurugunavardhan789@gmail.com",
  },
];

const technologies = [
  {
    icon: FaPython,
    title: "Python",
    subtitle: "& Django",
  },
  {
    icon: FiDatabase,
    title: "SQL",
    subtitle: "& MySQL",
  },
  {
    icon: FaReact,
    title: "React.js",
    subtitle: "& JavaScript",
  },
];

const orbitTechnologies = [
  {
    icon: FaPython,
    name: "Python",
    className: "orbit-python",
  },
  {
    icon: FiDatabase,
    name: "SQL / Database",
    className: "orbit-sql",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    className: "orbit-github",
  },
  {
    icon: FaReact,
    name: "React",
    className: "orbit-react",
  },
  {
    icon: FaHtml5,
    name: "HTML5",
    className: "orbit-html",
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    className: "orbit-css",
  },
  {
    icon: FaJs,
    name: "JavaScript",
    className: "orbit-javascript",
  },
  {
    icon: SiDjango,
    name: "Django",
    className: "orbit-django",
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background effects */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />

      <div className="hero-container">
        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-greeting">
            <span className="greeting-wave">👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name-first">Kodumuru</span>
            <span className="hero-name-gradient">Gunavardhan</span>
          </h1>

          <h2 className="hero-role">
            <TypeAnimation
              sequence={["Python Full Stack Developer", 1800]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </h2>

          <p className="hero-description">
            I build modern web applications using Python, Django, React, and
            SQL. I enjoy creating responsive user interfaces, developing
            practical solutions, and turning ideas into real-world applications.
          </p>

          {/* Action buttons */}
          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">
              View Projects
              <FiArrowRight />
            </a>

            <a
              href="/Gunavardhan%20Resume.pdf"
              className="hero-btn hero-btn-outline"
              download
            >
              Download Resume
              <FiDownload />
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              const isEmail = social.label === "Email";

              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  className="hero-social-link"
                  aria-label={social.label}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.12,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          {/* Technology highlights */}
          <div className="hero-technologies">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  className="hero-tech"
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1 + index * 0.12,
                  }}
                >
                  <Icon className="hero-tech-icon" />

                  <div>
                    <h3>{tech.title}</h3>
                    <p>{tech.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
        >
          {/* Decorative rings */}
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-portrait-glow" />

          {/* Profile image */}
          <div className="hero-portrait">
            <div className="hero-portrait-inner">
              <img
                src="/images/profile.png"
                alt="Kodumuru Gunavardhan"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add(
                    "portrait-image-missing",
                  );
                }}
              />

              <div className="hero-code-fallback" aria-hidden="true">
                <FaPython />
                <span>BUILD. CREATE. GROW.</span>
              </div>
            </div>
          </div>

          {/* Floating technology icons */}
          {orbitTechnologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                className={`hero-floating-card ${tech.className}`}
                title={tech.name}
                role="img"
                aria-label={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -7, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.4,
                    delay: 0.7 + index * 0.1,
                  },
                  scale: {
                    duration: 0.4,
                    delay: 0.7 + index * 0.1,
                  },
                  y: {
                    duration: 3 + (index % 4) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  },
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <Icon />
                <span className="orbit-tooltip">{tech.name}</span>
              </motion.div>
            );
          })}

          {/* Floating slogan */}
          <motion.div
            className="hero-floating-label"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            <span>Build.</span>
            <span>Create.</span>
            <span>Grow.</span>
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="hero-status"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <span className="hero-status-dot" />
            <span>Turning ideas into code</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="hero-scroll-mouse">
          <span />
        </span>
        <span>SCROLL TO EXPLORE</span>
      </motion.a>
    </section>
  );
}

export default Hero;
