import React from "react";

const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-user-wrapper">
        <div className="topbar-user-icon">İSOT</div>
      </div>
      <div className="topbar-menu-wrapper">
        <div className="topbar-item-wrapper">HOME</div>
        <div className="topbar-item-wrapper">ABOUT</div>
        <div className="topbar-item-wrapper">SKILLS</div>
        <div className="topbar-item-wrapper">EXPERIENCE</div>
      </div>
      <div className="topbar-contact-wrapper">
        <div>linkedin</div>
        <div>instagram</div>
      </div>
    </div>
  );
};

export default Topbar;
