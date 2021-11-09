import React from "react";
import { ListGroup } from 'react-bootstrap';
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

// export const MessageList = ({ messages }) => (
//     <div>
//          {messages.map((mes) => (
//             <div className="message" key={mes.id}>
//                 <span>{mes.author} : </span>
//                 <span>{mes.text}</span>
//             </div>
//         ))}   
//     </div>
// );


  export const ChatList = () => {
    return (
        <>
        <ListGroup className="list" variant="flush">
        <h4>List of chats</h4>
            {chatList.map((chat) => (
            <ListGroup.Item>{chat.name}
            </ListGroup.Item>
            ))}
        </ListGroup>
        </>
    )}
