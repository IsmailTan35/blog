import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { socialIcons } from "../components/icons";
import Reveal from "../components/reveal";
import { socialLinks } from "../data";
import openAppOrWeb from "../utils/openAppOrWeb";

const Contact = () => {
  return (
    <section className="contact" id="Contact">
      <div className="container">
        <Reveal className="contact-card">
          <span className="section-eyebrow">
            03 <span className="section-eyebrow-line" /> Contact
          </span>
          <h2 className="contact-title">
            Let&apos;s build something <span className="text-gradient">together.</span>
          </h2>
          <p className="contact-text">
            Have a project in mind or just want to say hi? Find me on any of these
            platforms.
          </p>
          <div className="contact-links">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.text];
              return (
                <a
                  key={link.text}
                  href={link.webLink}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  onClick={(event) => openAppOrWeb(event, link)}
                >
                  <Icon />
                  {link.text}
                </a>
              );
            })}
          </div>
        </Reveal>

        <footer className="footer">
          <span>© {new Date().getFullYear()} İsmail Tan</span>
          <a href="#Home" className="footer-top">
            Back to top <FiArrowUp />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
