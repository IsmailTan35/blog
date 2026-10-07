export const BIRTH_YEAR = 2000;
export const CAREER_START_YEAR = 2020;

export const yearsSince = (year: number) => new Date().getFullYear() - year;

export const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
];

export const menuItems = [
  { text: "Home", id: "Home" },
  { text: "Skills", id: "Skills" },
  { text: "Projects", id: "Projects" },
  { text: "Contact", id: "Contact" },
];

export const socialLinks = [
  {
    text: "GitHub",
    webLink: "https://github.com/IsmailTan35",
    appLink: "github://user?username=IsmailTan35",
    app: /github/,
  },
  {
    text: "LinkedIn",
    webLink: "https://www.linkedin.com/in/ismailtan35/",
    appLink: "linkedin://profile?id=ismailtan35",
    app: /linkedin/,
  },
  {
    text: "Instagram",
    webLink: "https://www.instagram.com/ismailtan35/",
    appLink: "instagram://user?username=ismailtan35",
    app: /instagram/,
  },
];

export const skillGroups = [
  {
    groupName: "Frontend",
    groupSkills: [
      { skillName: "HTML", value: 90 },
      { skillName: "CSS", value: 90 },
      { skillName: "JavaScript", value: 90 },
      { skillName: "TypeScript", value: 80 },
      { skillName: "React", value: 90 },
      { skillName: "Redux", value: 90 },
    ],
  },
  {
    groupName: "Backend",
    groupSkills: [
      { skillName: "Node.js", value: 90 },
      { skillName: "NestJS", value: 70 },
      { skillName: "Express", value: 90 },
      { skillName: "WebSocket", value: 80 },
      { skillName: "MongoDB", value: 75 },
      { skillName: "Docker", value: 60 },
    ],
  },
];

export const projects = [
  {
    name: "Discord Clone",
    url: "https://discordclone.ismailtan.dev",
    description: "Real-time chat app inspired by Discord.",
  },
  {
    name: "Chess 3D",
    url: "https://chess3d.ismailtan.dev",
    description: "Chess in a 3D board, playable right in the browser.",
  },
  {
    name: "Multiplayer Tank War Game",
    url: "https://waroftanks.ismailtan.dev",
    description: "Real-time multiplayer tank battles in the browser.",
  },
];
