import React from "react";
import "./message.scss";

export const Message = ({ message, onMessageClick }) => {
  // const message = props.message;
  // const { message } = props;

  return (
    <h3 onClick={onMessageClick}>
      {message}
    </h3>
  );
};