import React from "react";
import Slider from "../../image/SliderSvg";

const skillGroups = [
  {
    groupName: "frontend",
    groupSkills: [
      { skillName: "html", value: 75 },
      { skillName: "css", value: 75 },
      { skillName: "javascript", value: 75 },
      { skillName: "typescript", value: 60 },
      { skillName: "react", value: 60 },
      { skillName: "redux", value: 60 },
    ],
  },
  {
    groupName: "backend",
    groupSkills: [
      { skillName: "node.js", value: 70 },
      { skillName: "nest.js", value: 70 },
      { skillName: "express", value: 70 },
      { skillName: "websocket", value: 50 },
      { skillName: "MongoDB", value: 60 },
      { skillName: "docker", value: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper view-wrapper">
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
            <div
              key={idx}
              style={{
                marginBottom: 150,
              }}
            >
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
