import React from "react";
import "./messageList.scss";

export const MessageList = ({ messages }) => {
    return (
        <div className="message-field">
            {messages.map((mes) => (
                <div className="messages" key={mes.id}>
                    <span>{mes.author} : </span>
                    <span>{mes.text}</span>
                </div>
            ))}   
        </div>
    );
};