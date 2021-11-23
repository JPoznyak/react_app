import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/Chats";
import { HomePage } from "./components/Home/HomePage";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Profile } from "./components/Profile";
import "./App.scss";

export const App = () => {
  return (
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
          <Route 
            index 
            element={
              <ChatList />
            } 
          />
          <Route 
            path=":chatId" 
            element={
              <Chats />
            } 
          />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  );
}