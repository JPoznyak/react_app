import React from "react";
import { ListGroup, InputGroup, FormControl} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import { Button } from '../Button/Button';
import { Container } from 'react-bootstrap';
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
                    style={({ isActive }) => ({ color: isActive ? "#a83d3d" : "grey" })}
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