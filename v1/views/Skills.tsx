import React, { useEffect, useState } from "react";
import Slider from "../../image/SliderSvg";

const skillGroups = [
  {
    groupName: "frontend",
    groupSkills: [
      { skillName: "html", value: 90 },
      { skillName: "css", value: 90 },
      { skillName: "javascript", value: 90 },
      { skillName: "typescript", value: 80 },
      { skillName: "react", value: 90 },
      { skillName: "redux", value: 90 },
    ],
  },
  {
    groupName: "backend",
    groupSkills: [
      { skillName: "node.js", value: 90 },
      { skillName: "nest.js", value: 70 },
      { skillName: "express", value: 90 },
      { skillName: "websocket", value: 80 },
      { skillName: "MongoDB", value: 75 },
      { skillName: "docker", value: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper view-wrapper" id="Skills">
      <div className="skills-header-wrapper">Skills</div>
      <div
        className="skills"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {skillGroups.map((skillGroup, idx) => {
          return (
            <div key={idx}>
              <div
                style={{
                  fontSize: 25,
                  textTransform: "uppercase",
                  textAlign: "center",
                  marginBottom: 20,
                  textDecoration: "underline",
                }}
              >
                {skillGroup.groupName}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                {skillGroup.groupSkills.map((skill, index) => (
                  <div className="skill-wrapper" key={index}>
                    <div className="skill-container">
                      <div className="skill-circle-bar-wrapper">
                        <Slider value={skill.value} />
                        <div className="skill-points">{skill.value}</div>
                      </div>
                      <div className="skill-bar-wrapper">
                        <div
                          style={{
                            width: `${skill.value}%`,
                          }}
                          className="skill-bar"
                        >
                          <div
                            className="skill-points"
                            style={{
                              right: -20,
                            }}
                          >
                            {skill.value}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skill-name">{skill.skillName}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
