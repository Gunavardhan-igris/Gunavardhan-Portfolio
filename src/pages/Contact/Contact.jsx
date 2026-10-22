import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiStar,
  FiSend,
} from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.rating === 0) {
      setMessage("Please select a rating before submitting.");
      return;
    }

    setMessage("Sending feedback...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          rating: formData.rating,
          feedback: formData.feedback,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setMessage("Thank you! Your feedback was sent successfully.");

      setFormData({
        name: "",
        email: "",
        rating: 0,
        feedback: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("Feedback could not be sent. Please try again.");
    }
  };

  const contactLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      value: "Explore my projects",
      href: "https://github.com/Gunavardhan-igris",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://linkedin.com/in/kodumurugunavardhan789",
    },
    {
      icon: FiMail,
      label: "Email",
      value: "Send me a message",
      href: "mailto:kodumurugunavardhan789@gmail.com",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's Connect & <span>Share Feedback</span>
          </h2>

          <p>
            Thanks for visiting my portfolio! Share your thoughts, suggestions,
            or ideas. Your feedback can help me improve.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Feedback Form */}
          <motion.div
            className="feedback-card"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="feedback-title">
              <span className="feedback-icon">
                <FiSend />
              </span>

              <div>
                <h3>Share Your Feedback</h3>
                <p>I'd love to hear what you think.</p>
              </div>
            </div>

            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="feedback-field">
                <label htmlFor="feedback-name">Your Name</label>
                <input
                  id="feedback-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={80}
                  required
                />
              </div>

              <div className="feedback-field">
                <label htmlFor="feedback-email">Email Address</label>
                <input
                  id="feedback-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>

              <div className="feedback-field">
                <label>Rate My Portfolio</label>

                <div
                  className="rating-stars"
                  role="group"
                  aria-label="Rate my portfolio from 1 to 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={
                        star <= formData.rating
                          ? "rating-star active"
                          : "rating-star"
                      }
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      aria-pressed={formData.rating === star}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          rating: star,
                        }));
                        setMessage("");
                      }}
                    >
                      <FiStar />
                    </button>
                  ))}
                </div>
              </div>

              <div className="feedback-field">
                <label htmlFor="feedback-message">Your Feedback</label>

                <textarea
                  id="feedback-message"
                  name="feedback"
                  placeholder="What did you like? What could I improve?"
                  value={formData.feedback}
                  onChange={handleChange}
                  rows={5}
                  maxLength={1500}
                  required
                />

                <span className="feedback-counter">
                  {formData.feedback.length}/1500
                </span>
              </div>

              <button type="submit" className="feedback-submit">
                Submit Feedback <FiArrowUpRight />
              </button>

              {message && (
                <p className="feedback-status" role="status">
                  {message}
                </p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-links-heading">
              <h3>Let's Connect</h3>
              <p>Find me on these platforms.</p>
            </div>

            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="contact-link-card"
                >
                  <span className="contact-link-icon">
                    <Icon />
                  </span>

                  <span className="contact-link-text">
                    <strong>{link.label}</strong>
                    <small>{link.value}</small>
                  </span>

                  <FiArrowUpRight className="contact-link-arrow" />
                </a>
              );
            })}

            <div className="contact-note">
              <span className="contact-note-dot" />
              <p>Open to learning, collaboration, and opportunities.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
