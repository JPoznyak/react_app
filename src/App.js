import React, { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { ChatList } from "./components/ChatList/ChatList";
import Chats from "./components/Chats/Chats";
import { ConnectedChats } from "./components/Chats/Chats";
import { HomePage } from "./components/Home/HomePage";
import { v4 as uuidv4 } from 'uuid';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { AUTHORS } from "./utils/constants";
import { store } from "./store";
import { Profile } from "./components/Profile";
import { addChat, deleteChat } from "./store/chats/actions";
import "./App.scss";

const dummyMessages = {
  chat1: [
      {
        id: "mes1",
        author: AUTHORS.user,
        text: "Hello friends!",
      },
  ],
  chat2: [
      {
        id: "mes2",
        author: AUTHORS.user,
        text: "Great news!",
      },
  ],
  chat3: [],
};

// const initialChatList = [
//   {
//     name: "Cras justo odio",
//     id: "chat1",
//   },
//   {
//     name: "Morbi leo risus",
//     id: "chat2",
//   },
//   {
//     name: "Porta ac consectetur ac",
//     id: "chat3",
//   },
// ];

export const App = () => {
    // const [chatList, setChatList] = useState(initialChatList);
    const chatList = useSelector((state) => state.chats);
    const dispatch = useDispatch();
    const [messages, setMessages] = useState(dummyMessages);
  
    const handleAddChat = useCallback((name) => {
      const newId = `chat${uuidv4()}`;
  
        // setChatList((prevChatList) => [...prevChatList, ]);
        dispatch(addChat({ name, id: newId }));
        setMessages((prevMessages) => ({
          ...prevMessages,
          [newId]: [],
        }));
      },
      [dispatch]
    );

  const handleDeleteChat = useCallback((idToDelete) => {
    // setChatList((prevChatList) =>
    //   prevChatList.filter(({ id }) => id !== idToDelete)
    // );
    dispatch(deleteChat(idToDelete));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[idToDelete];

      return newMessages;
    });
  }, []);

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
            <Route 
              index 
              element={
                <ChatList 
                  // addChat={handleAddChat}
                  // deleteChat={handleDeleteChat}
                  // chatList={chatList} 
                />
              } 
            />
            <Route 
              path=":chatId" 
              element={
                <ConnectedChats />
                // <Chats 
                //   chatList={chatList}
                //   messages={messages}
                //   setMessages={setMessages}
                //   addChat={handleAddChat}
                //   deleteChat={handleDeleteChat}
                // />
              } 
            />
          </Route>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </BrowserRouter>
    </Provider>
);
}