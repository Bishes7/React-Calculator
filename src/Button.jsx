import React, { useState } from "react";

const Button = ({
  cls,
  label,
  handleOnClick,
  handleMouseDown,

  mouseDown,
}) => {
  return (
    <div
      style={
        mouseDown === label
          ? {
              transform: mouseDown ? "scale(0.9)" : "scale(1)",
              transition: "transform 0.2s",
            }
          : null
      }
      onMouseDown={() => handleMouseDown(label)}
      onClick={() => handleOnClick(label)}
      className={"btn " + cls}
    >
      {label}
    </div>
  );
};

export default Button;
