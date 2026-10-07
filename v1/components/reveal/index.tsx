import React, { CSSProperties, ReactNode } from "react";
import useInView from "../../hooks/useInView";

interface IProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: IProps) => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Reveal;
