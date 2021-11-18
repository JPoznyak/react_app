import React from "react";
import { ListGroup, FormControl} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import { Button } from '../Button/Button';
import { Container } from 'react-bootstrap';
import "./chatList.scss";

export const ChatList = ({ chatList }) => {

return (
    <Container>
        <h4 className="chatsTitle">List of chats</h4>
        <form className="list">
            <FormControl className="textField" placeholder="Enter chat name" onChange={() => {}} />
            <button className="add-btn" onClick={() => {}}>Add chat</button>
        </form>
        <ListGroup className="list" variant="flush">
            {chatList.map((chat) => (
            <>
            <ListGroup.Item className="group">
                <NavLink
                    style={({ isActive }) => ({ color: isActive ? "#a83d3d" : "#5c4a4a" })}
                    to={`/chats/${chat.id}`}
                >
                    {chat.name}
                </NavLink>
                <button className="del-btn" onClick={() => {}}>Delete</button>
                {/* <Button type="submit" onClick={() => {}}>
                Delete
                </Button> */}
            </ListGroup.Item>
            </>
        
            ))}
        </ListGroup>
    </Container>
)}