import React from "react";

interface IProps {
  value: number;
}
const Slider = (props: IProps) => {
  const { value } = props;
  return (
    <>
      <svg viewBox="0 0 100 100" width={"100%"} style={{ display: "block" }}>
        <path
          d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
          stroke="#eee"
          strokeWidth="7"
          fillOpacity="0"
        ></path>
        <path
          d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
          stroke="#FFD700"
          strokeWidth="7"
          fillOpacity="0"
          strokeDasharray="292.273, 292.273"
          strokeDashoffset={292.273 * ((100 - value) / 100)}
        ></path>
      </svg>
    </>
  );
};

export default Slider;
