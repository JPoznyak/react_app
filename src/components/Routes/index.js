import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ChatList } from "../ChatList/ChatList";
import { ConnectedChats } from "../Chats/Chats";
import { HomePage } from "../Home/HomePage";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { ConnectedProfile } from "../Profile";
import { Articles } from "../Articles";
import { PrivateRoute } from "../PrivateRoute";
import { PublicOutlet } from "../PublicRoute";
import { SignUp } from "../SignUp";
import { onValue } from "firebase/database";
import { auth, messagesRef } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";
import "./router.scss";

export const Router = () => {
    const dispatch = useDispatch();
    const [msgs, setMsgs] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(signIn());
        } else {
            dispatch(signOut());
        }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
        const newMsgs = {};

        snapshot.forEach((chatMsgsSnap) => {
            newMsgs[chatMsgsSnap.key] = Object.values(
            chatMsgsSnap.val().messageList || {}
            );
        });

        setMsgs(newMsgs);
        });
    }, []);

    
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
                <Nav.Link>
                <   Link to="/articles">Articles</Link>
                </Nav.Link>
          </Nav>
          </Container>
      </Navbar> 

      <Routes>
        <Route path="/" element={<PublicOutlet /> }>
            <Route path="" element={<HomePage />} />
        </Route>
        <Route path="/signup" element={<PublicOutlet />}>
          <Route path="" element={<SignUp />} />
        </Route>
        <Route path="profile" element={<PrivateRoute><ConnectedProfile /> </PrivateRoute>} />
        <Route path="articles" element={<Articles />} />
        <Route path="chats">
          <Route 
            index 
            element={
                <PrivateRoute>
                    <ChatList />
                </PrivateRoute>
            } 
            />
          <Route 
            path=":chatId" 
            element={
                <PrivateRoute>
                    <ConnectedChats msgs={msgs} />
                </PrivateRoute>
            } 
            />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
);
}