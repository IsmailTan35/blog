import React from "react";

const myProjects = [
  {
    name: "Discord Clone",
    url: "https://discordclone.ismailtan.dev",
    description: "Discord Clone",
  },
  {
    name: "Chess 3D",
    url: "https://chess3d.ismailtan.dev",
    description: "Chess 3D",
  },
  {
    name: "Multiplayer Tank War Game",
    url: "https://waroftanks.ismailtan.dev",
    description: "Multiplayer Tank War Game",
  },
];

const Projects = () => {
  return (
    <>
      <div className="skills-wrapper view-wrapper" id="Projects">
        <div className="skills-header-wrapper">Projects</div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 30,
              textAlign: "center",
            }}
          >
            {myProjects.map((project, index) => (
              <div key={index}>
                <div
                  style={{
                    fontSize: 25,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {project.name}
                </div>
                <div
                  style={{
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: "#f5f5f5",
                    fontSize: 20,
                    color: "#000000",
                  }}
                >
                  <a
                    target="_blank"
                    href={project.url}
                    rel="noreferrer"
                    style={{
                      width: "100%",
                      height: "100%",
                      textDecoration: "none",
                      userSelect: "none",
                    }}
                  >
                    {project.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
