import React from "react";
import Reveal from "../reveal";

interface IProps {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ index, eyebrow, title, subtitle }: IProps) => {
  return (
    <Reveal className="section-header">
      <span className="section-eyebrow">
        {index} <span className="section-eyebrow-line" /> {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeader;
