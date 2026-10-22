import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiTool,
  FiArrowRight,
  FiServer,
} from "react-icons/fi";

import "./Skills.css";

const coreSkills = ["Python", "Django", "React.js", "SQL"];

const timeline = [
  {
    number: "01",
    title: "Programming",
    subtitle: "The foundation",
    description:
      "Writing logical, readable code and solving programming problems.",
    icon: FiCode,
    skills: [
      { name: "Python", icon: FaPython, color: "#facc15" },
      { name: "JavaScript", icon: FaJs, color: "#facc15" },
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    subtitle: "Crafting interfaces",
    description:
      "Creating responsive user interfaces with a focus on usability and clean design.",
    icon: FiLayers,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#f97316" },
      { name: "CSS3", icon: FaCss3Alt, color: "#38bdf8" },
      { name: "React.js", icon: FaReact, color: "#38bdf8" },
    ],
  },
  {
    number: "03",
    title: "Backend Development",
    subtitle: "Behind the scenes",
    description:
      "Building application logic and working with server-side development.",
    icon: FiServer,
    skills: [{ name: "Django", icon: SiDjango, color: "#34d399" }],
  },
  {
    number: "04",
    title: "Database Management",
    subtitle: "Working with data",
    description:
      "Organizing, storing, and retrieving application data using databases.",
    icon: FiDatabase,
    skills: [
      { name: "SQL", icon: FiDatabase, color: "#a78bfa" },
      { name: "MySQL", icon: SiMysql, color: "#38bdf8" },
    ],
  },
  {
    number: "05",
    title: "Tools & Version Control",
    subtitle: "Building together",
    description:
      "Using development tools to manage code and collaborate on projects.",
    icon: FiTool,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f97316" },
      { name: "GitHub", icon: FaGithub, color: "#e2e8f0" },
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Frontend",
    technology: "React.js",
    description: "User interface",
    icon: FaReact,
    color: "#38bdf8",
  },
  {
    number: "02",
    title: "Backend",
    technology: "Django",
    description: "Application logic",
    icon: FiServer,
    color: "#34d399",
  },
  {
    number: "03",
    title: "Database",
    technology: "SQL / MySQL",
    description: "Data storage",
    icon: FiDatabase,
    color: "#a78bfa",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="skills-glow skills-glow-one" />
      <div className="skills-glow skills-glow-two" />

      <div className="skills-container">
        <motion.header
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="skills-eyebrow">
            <span className="skills-eyebrow-line" />
            MY TECHNICAL JOURNEY
            <span className="skills-eyebrow-line" />
          </span>

          <h2>
            Skills That <span>Build Ideas</span>
          </h2>

          <p>
            The technologies and tools I use to turn ideas into practical web
            applications.
          </p>

          <div className="skills-core">
            {coreSkills.map((skill, index) => (
              <motion.span
                className="skills-core-tag"
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="skills-core-dot" />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.header>

        <div className="skills-timeline">
          <div className="skills-timeline-track" aria-hidden="true">
            <motion.div
              className="skills-timeline-progress"
              style={{ scaleY: lineScale }}
            />
          </div>

          {timeline.map((item, index) => {
            const CategoryIcon = item.icon;
            const isRight = index % 2 === 1;

            return (
              <div
                className={`skills-timeline-row ${
                  isRight ? "timeline-right" : "timeline-left"
                }`}
                key={item.number}
              >
                <motion.div
                  className="skills-timeline-node"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                    delay: 0.1,
                  }}
                  aria-hidden="true"
                >
                  <span />
                </motion.div>

                <motion.article
                  className="skills-timeline-card"
                  initial={{
                    opacity: 0,
                    x: isRight ? 55 : -55,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  <div className="timeline-card-top">
                    <span className="timeline-number">{item.number}</span>
                    <span className="timeline-category-icon">
                      <CategoryIcon />
                    </span>
                  </div>

                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>

                  <div className="timeline-skills">
                    {item.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <span
                          className="timeline-skill"
                          key={skill.name}
                          style={{ "--skill-color": skill.color }}
                        >
                          <SkillIcon />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>

                  <div className="timeline-card-decoration" />
                </motion.article>
              </div>
            );
          })}
        </div>

        <motion.div
          className="skills-workflow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="workflow-heading">
            <span className="skills-eyebrow">HOW THE STACK CONNECTS</span>
            <h3>
              My <span>Full-Stack Workflow</span>
            </h3>
            <p>
              A simplified view of how the frontend, backend, and database can
              work together in a web application.
            </p>
          </div>

          <div className="workflow-steps">
            {workflow.map((item, index) => {
              const WorkflowIcon = item.icon;

              return (
                <div className="workflow-step-group" key={item.number}>
                  <motion.div
                    className="workflow-card"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    style={{ "--workflow-color": item.color }}
                  >
                    <span className="workflow-number">{item.number}</span>

                    <span className="workflow-icon">
                      <WorkflowIcon />
                    </span>

                    <p className="workflow-label">{item.title}</p>
                    <h4>{item.technology}</h4>
                    <span className="workflow-description">
                      {item.description}
                    </span>
                  </motion.div>

                  {index < workflow.length - 1 && (
                    <FiArrowRight className="workflow-arrow" />
                  )}
                </div>
              );
            })}
          </div>

          <p className="workflow-note">
            Technologies shown as a representative full-stack architecture.
          </p>
        </motion.div>

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="skills-footer-dot" />
          <p>Always learning. Always building. Always growing.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
