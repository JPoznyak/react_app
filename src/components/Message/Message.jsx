import React from "react";
import "./message.scss";

export const Message = ({ message, onMessageClick }) => {

  return (
    <h3 onClick={onMessageClick}>
      {message}
    </h3>
  );
};