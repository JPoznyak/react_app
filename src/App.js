import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/Chats";
import { HomePage } from "./components/Home/HomePage";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AUTHORS } from "./utils/constants";
import { store } from "./store";
import { Profile } from "./components/Profile";

import "./App.scss";

const dummyMessages = {
  chat1: [
      {
          author: AUTHORS.user,
          text: "Hello friends!",
      },
  ],
  chat2: [
      {
          author: AUTHORS.user,
          text: "Great news!",
      },
  ],
  chat3: [],
};

const initialChatList = [
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


export const App = () => {

  
  const [messages, setMessages] = useState(dummyMessages);
  const [chatList, setChatList] = useState(initialChatList);
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar className="menu" bg="light" variant="light">
            <Container>
            <Nav>
              <Nav.Link> 
                <Link to="/">HomePage</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/profile">Profile</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/chats">Chats</Link>
              </Nav.Link>
            </Nav>
            </Container>
        </Navbar> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route index element={<ChatList chatList={chatList} />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </BrowserRouter>
    </Provider>
);
}