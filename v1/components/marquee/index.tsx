import React from "react";
import { techIcons } from "../icons";

const techs = Object.entries(techIcons);

const Marquee = () => {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {/* The list is rendered twice so the loop has no visible seam. */}
        {[...techs, ...techs].map(([name, { icon: Icon, color }], idx) => (
          <div className="marquee-item" key={idx}>
            <Icon style={{ color }} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
