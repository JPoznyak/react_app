import React from "react";
import { ListGroup } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./chatList.scss";

const chatList = [
    {
      name: "Cras justo odio",
      id: "chat1",
    },
    {
      name: "Morbi leo risus",
      id: "chat2",
    },
    {
      name: "Porta ac consectetur ac",
      id: "chat3",
    },
  ];

  export const ChatList = () => {
    return (
        <>
        <ListGroup className="list" variant="flush">
        <h4>List of chats</h4>
            {chatList.map((chat) => (
            <ListGroup.Item>
                <NavLink
                    style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                    to={`/chats/${chat.id}`}
                >
                    {chat.name}
                </NavLink>
            </ListGroup.Item>
            ))}
        </ListGroup>
        </>
    )}