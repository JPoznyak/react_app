import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ChatList } from "../ChatList/ChatList";
import Chats from "../Chats/Chats";
import { HomePage } from "../Home/HomePage";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Profile } from "../Profile";
import { Articles } from "../Articles";
import "./router.scss";

export const Router = () => (
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
                <Nav.Link>
                <   Link to="/articles">Articles</Link>
                </Nav.Link>
          </Nav>
          </Container>
      </Navbar> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="articles" element={<Articles />} />
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