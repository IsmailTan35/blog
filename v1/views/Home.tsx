import Image from "next/image";
import React, { CSSProperties } from "react";
import { FiArrowRight } from "react-icons/fi";
import { techIcons } from "../components/icons";
import {
  BIRTH_YEAR,
  CAREER_START_YEAR,
  projects,
  roles,
  skillGroups,
  yearsSince,
} from "../data";
import useTypewriter from "../hooks/useTypewriter";

const orbitSkills = ["React", "Node.js", "TypeScript", "MongoDB", "Docker"];

const delay = (ms: number) => ({ "--delay": `${ms}ms` } as CSSProperties);

const Home = () => {
  const role = useTypewriter(roles);

  const stats = [
    { value: `${yearsSince(CAREER_START_YEAR)}+`, label: "Years of experience" },
    { value: projects.length, label: "Live projects" },
    {
      value: skillGroups.reduce((sum, group) => sum + group.groupSkills.length, 0),
      label: "Technologies",
    },
  ];

  return (
    <section className="home-wrapper" id="Home">
      <div className="home container">
        <div className="home-content-wrapper">
          <div className="home-badge home-animate" style={delay(100)}>
            <span className="home-wave" aria-hidden="true">
              👋
            </span>
            Hello, my name is
          </div>
          <h1 className="home-title home-animate" style={delay(200)}>
            İsmail Tan
          </h1>
          <div className="home-role home-animate" style={delay(300)}>
            I&apos;m a <span className="home-role-typed">{role}</span>
            <span className="home-caret" aria-hidden="true" />
          </div>
          <p className="home-content home-animate" style={delay(400)}>
            Greetings, I am a {yearsSince(BIRTH_YEAR)} year old professional with
            nearly {yearsSince(CAREER_START_YEAR)} years of dedicated experience in
            web project development. Throughout my journey, I have been committed to
            crafting applications with utmost precision, adhering to the Atomic
            architecture.
          </p>
          <div className="home-actions home-animate" style={delay(500)}>
            <a href="#Projects" className="button button-primary">
              View my work <FiArrowRight />
            </a>
            <a href="#Contact" className="button button-secondary">
              Get in touch
            </a>
          </div>
          <dl className="home-stats home-animate" style={delay(600)}>
            {stats.map((stat) => (
              <div className="home-stat" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="home-picture-wrapper home-animate" style={delay(300)}>
          <div className="home-picture-glow" />
          <div className="home-orbit" aria-hidden="true">
            {orbitSkills.map((name, idx) => {
              const { icon: Icon, color } = techIcons[name];
              return (
                <div
                  className="home-orbit-item"
                  key={name}
                  style={
                    { "--angle": `${(360 / orbitSkills.length) * idx}deg` } as CSSProperties
                  }
                >
                  <div className="home-orbit-icon" style={{ color }}>
                    <Icon />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="home-picture-ring" />
          <div className="home-picture">
            <Image
              src="/image/myPicture.jpg"
              alt="İsmail Tan"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      <a href="#Skills" className="home-scroll" aria-label="Scroll to skills">
        <span />
      </a>
    </section>
  );
};

export default Home;
