import React from "react";
import Slider from "../../image/SliderSvg";

const skills = [
  { skillName: "html", value: 75 },
  { skillName: "css", value: 75 },
  { skillName: "javascript", value: 75 },
  { skillName: "typescript", value: 40 },
  { skillName: "react", value: 60 },
  { skillName: "redux", value: 60 },
  { skillName: "node.js", value: 70 },
  { skillName: "express", value: 70 },
  { skillName: "websocket", value: 50 },
  { skillName: "rest api", value: 70 },
  { skillName: "MongoDB", value: 60 },
];
const Skills = () => {
  return (
    <div className="skills-wrapper view-wrapper">
      <div className="skills-header-wrapper">Skills</div>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill-wrapper" key={index}>
            <div style={{ width: 200, position: "relative" }}>
              <Slider value={skill.value} />
              <div className="skill-points">{skill.value}</div>
            </div>
            <div className="skill-name">{skill.skillName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
