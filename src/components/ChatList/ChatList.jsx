import React, { useState } from "react";
import { ListGroup, FormControl} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import { Button } from '../Button/Button';
import { Container } from 'react-bootstrap';
import { ChatItem } from "../ChatItem";
import "./chatList.scss";

export const ChatList = ({ chatList, addChat, deleteChat }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addChat(value);
        setValue("");
      };

    return (

        <Container>
            <h4 className="chatsTitle">List of chats</h4>
            <form className="list" onSubmit={handleSubmit}>
                <FormControl 
                    className="textField" 
                    value={value} 
                    placeholder="Enter chat name" 
                    onChange={handleChange} 
                />
                <button className="add-btn">Add chat</button>
            </form>
            <ListGroup className="list" variant="flush">
                {chatList.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} deleteChat={deleteChat} />
                ))}
            </ListGroup>
        </Container>
    )}
