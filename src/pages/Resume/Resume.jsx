import { motion } from "framer-motion";
import {
  FiDownload,
  FiFileText,
  FiBriefcase,
  FiCode,
  FiBookOpen,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

import "./Resume.css";

const highlights = [
  {
    icon: FiCode,
    title: "Development Focus",
    value: "Python Full Stack",
    description: "Python, Django, React and SQL",
  },
  {
    icon: FiFileText,
    title: "Project Experience",
    value: "Hands-on Projects",
    description: "Machine learning and application development",
  },
  {
    icon: FiBookOpen,
    title: "Learning Mindset",
    value: "Continuous Growth",
    description: "Building skills through practical projects",
  },
];

const strengths = [
  "Python",
  "Django",
  "React.js",
  "JavaScript",
  "SQL / MySQL",
  "HTML5 & CSS3",
  "Git & GitHub",
];

function Resume() {
  const resumePath = "/Gunavardhan%20Resume.pdf";

  return (
    <section className="resume-section" id="resume">
      <div className="resume-glow resume-glow-left" />
      <div className="resume-glow resume-glow-right" />

      <div className="resume-container">
        {/* Heading */}
        <motion.header
          className="resume-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="resume-eyebrow">
            <span />
            MY RESUME
            <span />
          </span>

          <h2>
            My Professional <span>Journey</span>
          </h2>

          <p>
            Explore my experience, technical skills, and projects. Download my
            resume to learn more about my background and development journey.
          </p>
        </motion.header>

        {/* Main resume card */}
        <motion.div
          className="resume-main-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="resume-card-decoration" />

          <div className="resume-card-content">
            <div className="resume-document-icon">
              <FiFileText />
            </div>

            <span className="resume-available">
              <span className="resume-status-dot" />
              OPEN TO OPPORTUNITIES
            </span>

            <h3>
              Kodumuru <span>Gunavardhan</span>
            </h3>

            <h4>Python Full Stack Developer</h4>

            <p>
              Interested in building responsive web applications, developing
              practical software solutions, and continuously improving my
              technical skills.
            </p>

            <div className="resume-quick-skills">
              {["Python", "Django", "React.js", "SQL"].map((skill) => (
                <span key={skill}>
                  <FiCheckCircle />
                  {skill}
                </span>
              ))}
            </div>

            <div className="resume-buttons">
              <a
                href={resumePath}
                download="Gunavardhan-Resume.pdf"
                className="resume-btn resume-btn-primary"
              >
                <FiDownload />
                Download Resume
                <FiArrowUpRight />
              </a>

              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn resume-btn-secondary"
              >
                <FiFileText />
                View Resume
              </a>
            </div>
          </div>

          <div className="resume-card-side">
            <div className="resume-side-orbit resume-side-orbit-one" />
            <div className="resume-side-orbit resume-side-orbit-two" />

            <div className="resume-side-document">
              <div className="resume-side-top">
                <FiFileText />
                <span>RESUME.PDF</span>
              </div>

              <div className="resume-side-line resume-side-line-long" />
              <div className="resume-side-line resume-side-line-short" />
              <div className="resume-side-line resume-side-line-medium" />

              <div className="resume-side-divider" />

              <div className="resume-side-line resume-side-line-long" />
              <div className="resume-side-line resume-side-line-medium" />
              <div className="resume-side-line resume-side-line-short" />

              <div className="resume-side-tags">
                <span>PYTHON</span>
                <span>REACT</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume highlights */}
        <div className="resume-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="resume-highlight-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="resume-highlight-icon">
                  <Icon />
                </div>

                <span className="resume-highlight-title">{item.title}</span>

                <h3>{item.value}</h3>

                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Technical skills */}
        <motion.div
          className="resume-skills-panel"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-skills-heading">
            <div>
              <span className="resume-skills-kicker">WHAT I WORK WITH</span>
              <h3>Technical Skills</h3>
            </div>

            <FiCode className="resume-skills-heading-icon" />
          </div>

          <div className="resume-skills-list">
            {strengths.map((skill, index) => (
              <motion.span
                key={skill}
                className="resume-skill-chip"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                }}
              >
                <FiCheckCircle />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom call to action */}
        <motion.div
          className="resume-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Want to know more about my qualifications and experience?</p>

          <a href={resumePath} target="_blank" rel="noopener noreferrer">
            Explore My Resume
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
