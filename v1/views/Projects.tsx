import React, { CSSProperties, MouseEvent } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projectIcons } from "../components/icons";
import Reveal from "../components/reveal";
import SectionHeader from "../components/sectionHeader";
import { projects } from "../data";

// Moves the card's glow to follow the cursor.
const onCardMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
};

const Projects = () => {
  return (
    <section className="section" id="Projects">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Projects"
          title="Things I've shipped"
          subtitle="A few projects that are live right now. Open any of them and try it out."
        />
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const { icon: Icon, color } = projectIcons[project.name];
            return (
              <Reveal key={project.name} delay={idx * 120}>
                <a
                  className="project-card"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  onMouseMove={onCardMouseMove}
                  style={{ "--project-color": color } as CSSProperties}
                >
                  <div className="project-preview">
                    <Icon className="project-preview-icon" />
                  </div>
                  <div className="project-body">
                    <span className="project-number">0{idx + 1}</span>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <span className="project-link">
                    {new URL(project.url).host}
                    <FiArrowUpRight className="project-link-arrow" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
