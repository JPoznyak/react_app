import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { ListGroup, FormControl} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import { ChatItem } from "../ChatItem";
import "./chatList.scss";

export const ChatList = () => {
    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();

    const newId = `chat${uuidv4()}`;
    dispatch(addChat({ name: value, id: newId }));

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
                    <ChatItem key={chat.id} chat={chat} />
                ))}
            </ListGroup>
        </Container>
    )}