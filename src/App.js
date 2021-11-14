import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/Chats";
import { HomePage } from "./components/Home/HomePage";
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./App.scss";

export const App = () => (
 
  <BrowserRouter>
    <Navbar className="menu" bg="light" variant="light">
        <Container>
        <Nav>
          <Nav.Link> 
            <Link to="/">HomePage</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/chats">Chats</Link>
          </Nav.Link>
        </Nav>
        </Container>
    </Navbar> 

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<Chats />} />
      </Route>
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
);
