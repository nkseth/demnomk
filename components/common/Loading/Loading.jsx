import React from "react";
//// type can be `gray` and `white`
export const Loading = ({ type, width, height, styleSheet }) => {
  let style = {
    margin: "auto",
    background: "none",
    display: "block",
    "shape-rendering": "auto",
    width: width ? width : "auto",
    height: height ? height : "auto",
  };

  if (styleSheet) {
    style = { ...style, ...styleSheet };
  }

  if (type === "gray ")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        width="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke-width="8"
          stroke="#acb1b8"
          stroke-dasharray="50.26548245743669 50.26548245743669"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    );
  if (type == "white")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        width="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke-width="8"
          stroke="#ffffff"
          stroke-dasharray="50.26548245743669 50.26548245743669"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      width="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke-width="8"
        stroke="#acb1b8"
        stroke-dasharray="50.26548245743669 50.26548245743669"
        fill="none"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Loading;
