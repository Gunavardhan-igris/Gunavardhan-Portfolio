import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Guna<span>.</span>
            </a>

            <p>
              Python Full Stack Developer
              <br />
              Building, learning, and creating useful applications.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <nav aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <div className="footer-social-links">
              <a
                href="https://github.com/Gunavardhan-igris"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com/in/kodumurugunavardhan789"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:kodumurugunavardhan789@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>

            <a
              className="footer-email"
              href="mailto:kodumurugunavardhan789@gmail.com"
            >
              Let's connect
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gunavardhan. All rights reserved.</p>

          <a href="#home" className="footer-back-top">
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
