import { motion } from "framer-motion";
import {
  FiUser,
  FiBookOpen,
  FiCode,
  FiTarget,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import "./About.css";

const highlights = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    description:
      "Building responsive interfaces and backend applications using Python, Django, React, and SQL.",
  },
  {
    icon: FiTarget,
    title: "Problem Solving",
    description:
      "Enjoy breaking down technical challenges and developing practical, maintainable solutions.",
  },
  {
    icon: FiBookOpen,
    title: "Continuous Learning",
    description:
      "Improving my development skills and exploring modern tools, frameworks, and technologies.",
  },
];

const technologies = [
  { icon: FaPython, name: "Python", className: "about-python" },
  { icon: FaReact, name: "React", className: "about-react" },
  { icon: FaDatabase, name: "SQL", className: "about-sql" },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />

      <div className="about-container">
        {/* Section heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">
            <FiUser />
            GET TO KNOW ME
          </span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A little about my journey, the things I build, and what motivates me
            as a developer.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="about-main">
          <motion.div
            className="about-intro-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-card-top">
              <span className="about-mini-icon">
                <FiCode />
              </span>
              <span className="about-availability">
                <span />
                DEVELOPER PROFILE
              </span>
            </div>

            <h3>
              Turning ideas into{" "}
              <span className="about-gradient-text">real solutions.</span>
            </h3>

            <p>
              Hi, I'm Gunavardhan, a Python Full Stack Developer interested in
              building useful, user-friendly web applications. I work with
              Python, Django, React, JavaScript, and SQL to develop applications
              from the user interface to the backend.
            </p>

            <p>
              I have worked on projects such as a deep learning-based driver
              drowsiness detection system and a banking management application.
              These projects have helped me practice programming, application
              development, and problem-solving.
            </p>

            <p>
              I'm continuously learning, improving my coding skills, and looking
              forward to contributing to real-world software projects.
            </p>

            <div className="about-tags">
              <span>Problem Solver</span>
              <span>Quick Learner</span>
              <span>Team Player</span>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="about-education-card">
              <div className="about-education-icon">
                <FiBookOpen />
              </div>

              <div>
                <span className="about-card-label">EDUCATION</span>
                <h3>B.Tech Graduate</h3>
                <p>Computer Science and Engineering</p>
                <span className="about-education-note">
                  Sri Venkateswara Institute of Technology
                </span>
              </div>
            </div>

            <div className="about-tech-card">
              <span className="about-card-label">MY TECH WORLD</span>
              <h3>Technologies I work with</h3>

              <div className="about-tech-list">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      className={`about-tech-item ${tech.className}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.15 }}
                      whileHover={{ y: -5, scale: 1.03 }}
                    >
                      <Icon />
                      <span>{tech.name}</span>
                      <FiArrowUpRight className="about-tech-arrow" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="about-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="about-highlight-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="about-highlight-icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="about-highlight-number">0{index + 1}</span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
