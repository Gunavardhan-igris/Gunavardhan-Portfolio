import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Driver Drowsiness Detection",
    description:
      "A deep-learning-based project focused on detecting driver drowsiness to support road safety.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    github:
      "https://github.com/Gunavardhan-igris/Deep_learnig_based_driver_drowsiness_detection_system",
    image: "/images/drowsiness-detection.png",
    imageAlt: "Driver Drowsiness Detection project preview",
    accent: "purple",
  },
  {
    number: "02",
    category: "APPLICATION DEVELOPMENT",
    title: "Banking Management System",
    description:
      "A banking management application developed to practice application logic and organize banking-related operations.",
    technologies: ["Python", "SQL", "Database"],
    github: "https://github.com/Gunavardhan-igris/banking-management-system",
    image: "/images/banking-management.png",
    imageAlt: "Banking Management System project preview",
    accent: "blue",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-glow projects-glow-left" />
      <div className="projects-glow projects-glow-right" />

      <div className="projects-container">
        <motion.header
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="projects-eyebrow">
            <span />
            MY WORK
            <span />
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects where I apply my programming skills to
            practical problems and application development.
          </p>
        </motion.header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-${project.accent}`}
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
            >
              {/* Actual project screenshot */}
              <div className="project-visual">
                <img
                  className="project-visual-image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />

                <div className="project-visual-overlay">
                  <span className="project-preview-label">
                    PROJECT_{project.number}
                  </span>

                  <span className="project-visual-bottom">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project details */}
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-number">{project.number}</span>

                  <span className="project-category">{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <FiGithub />
                    View on GitHub
                    <FiArrowUpRight className="project-link-arrow" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Every project is another opportunity to learn and improve.</p>

          <a
            href="https://github.com/Gunavardhan-igris"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            Explore My GitHub
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
