import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
const window = globalThis as any;

const links = [
  {
    text: "Github",
    bgColor: "#000",
    webLink: "https://github.com/IsmailTan35",
    appLink: "github://user?username=IsmailTan35",
    logo: <AiOutlineGithub fontSize={30} />,
    app: /github/,
  },
  {
    text: "Linkedin",
    bgColor: "#0A66C2",
    webLink: "https://www.linkedin.com/in/ismailtan35/",
    appLink: "linkedin://profile?id=ismailtan35",
    logo: <IoLogoLinkedin fontSize={30} />,
    app: /linkedin/,
  },
  {
    text: "Instagram",
    bgColor: "#0A66C2",
    webLink: "https://www.instagram.com/ismailtan35/",
    appLink: "instagram://user?username=ismailtan35",
    logo: <RiInstagramFill fontSize={30} />,
    app: /linkedin/,
  },
];

const menuItems = [
  {
    text: "Home",
    link: "/#Home",
  },
  {
    text: "Skills",
    link: "/#Skills",
  },
  {
    text: "Projects",
    link: "/#Projects",
  },
];

const Topbar = () => {
  function openAppOrWeb(link: any) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isLinkedInApp = link.app?.test(userAgent.toLowerCase());

    if (isLinkedInApp) {
      window.location.href = link.appLink;
    } else {
      window.open(link.webLink, "_blank");
    }
  }

  return (
    <div className="topbar-wrapper">
      <div className="topbar-user-wrapper">
        <div className="topbar-user-icon">TİSO</div>
      </div>
      <div className="topbar-menu-wrapper">
        {menuItems.map((item, idx) => (
          <div className="topbar-item-wrapper" key={idx}>
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>
      <div className="topbar-contact-wrapper">
        {links.map((link, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => openAppOrWeb(link)}
          >
            {link.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
