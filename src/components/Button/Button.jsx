import React from "react";
import "./button.scss";

export const Button = ({ onPress, label, children }) => {
  return (
    <button className="my-btn" onPress={onPress}>
      {children}
    </button>
  );
};