import React from "react";
import "./messageList.scss";

export const MessageList = ({ messages }) => (
    <div className="message-form">
         {messages.map((mes) => (
            <div className="message" key={mes.id}>
                <span>{mes.author} : </span>
                <span>{mes.text}</span>
            </div>
        ))}   
    </div>
);