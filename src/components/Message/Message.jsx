import React from "react";
import "./message.scss";

export const Message = ({ message }) => {

  return (
    <div>
      <span>{message.author}:</span>
      <span>{message.text}</span>
    </div>
  );
};