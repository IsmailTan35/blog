import type { IconType } from "react-icons";
import { FaChessKnight, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GiTank } from "react-icons/gi";
import {
  SiCss3,
  SiDiscord,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

interface BrandIcon {
  icon: IconType;
  color: string;
}

export const techIcons: Record<string, BrandIcon> = {
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss3, color: "#2965f1" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  React: { icon: SiReact, color: "#61dafb" },
  Redux: { icon: SiRedux, color: "#9b6dff" },
  "Node.js": { icon: SiNodedotjs, color: "#68a063" },
  NestJS: { icon: SiNestjs, color: "#e0234e" },
  Express: { icon: SiExpress, color: "#f4f4f8" },
  WebSocket: { icon: SiSocketdotio, color: "#f4f4f8" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  Docker: { icon: SiDocker, color: "#2496ed" },
};

export const socialIcons: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
};

export const projectIcons: Record<string, BrandIcon> = {
  "Discord Clone": { icon: SiDiscord, color: "#5865f2" },
  "Chess 3D": { icon: FaChessKnight, color: "#ffd700" },
  "Multiplayer Tank War Game": { icon: GiTank, color: "#84cc16" },
};
