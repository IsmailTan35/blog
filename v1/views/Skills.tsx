import React, { CSSProperties, useEffect, useState } from "react";
import { FiMonitor, FiServer } from "react-icons/fi";
import { techIcons } from "../components/icons";
import SectionHeader from "../components/sectionHeader";
import { skillGroups } from "../data";
import useInView from "../hooks/useInView";

const groupIcons: Record<string, typeof FiMonitor> = {
  Frontend: FiMonitor,
  Backend: FiServer,
};

const COUNT_DURATION = 1400;

// Counts from 0 up to `value` once `start` is true. Renders the final value
// before that, so the server-rendered HTML shows the real numbers.
const CountUp = ({ value, start, delay }: { value: number; start: boolean; delay: number }) => {
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    if (!start || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let startTime: number | null = null;
    const tick = (time: number) => {
      if (startTime === null) startTime = time + delay;
      const progress = Math.min(Math.max((time - startTime) / COUNT_DURATION, 0), 1);
      setCurrent(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value, delay]);

  return <>{current}</>;
};

const SkillGroup = ({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const GroupIcon = groupIcons[group.groupName];

  return (
    <div
      ref={ref}
      className={`skill-group reveal ${inView ? "is-visible" : ""}`}
      style={{ "--delay": `${index * 150}ms` } as CSSProperties}
    >
      <div className="skill-group-header">
        <div className="skill-group-title">
          <span className="skill-group-icon">
            <GroupIcon />
          </span>
          {group.groupName}
        </div>
        <span className="skill-group-count">
          {String(group.groupSkills.length).padStart(2, "0")} skills
        </span>
      </div>

      <ul className="skill-list">
        {group.groupSkills.map((skill, idx) => {
          const { icon: Icon, color } = techIcons[skill.skillName];
          const skillDelay = index * 150 + idx * 90;
          return (
            <li
              className="skill-item"
              key={skill.skillName}
              style={
                {
                  "--value": skill.value,
                  "--delay": `${skillDelay}ms`,
                  "--skill-color": color,
                } as CSSProperties
              }
            >
              <div className="skill-item-top">
                <span className="skill-icon">
                  <Icon />
                </span>
                <span className="skill-name">{skill.skillName}</span>
                <span className="skill-value">
                  <CountUp value={skill.value} start={inView} delay={skillDelay} />%
                </span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section" id="Skills">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="Skills"
          title="Tools I build with"
          subtitle="From pixel-perfect interfaces to real-time backends, these are the technologies I use every day."
        />
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <SkillGroup group={group} index={idx} key={group.groupName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
