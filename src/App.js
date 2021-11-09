import { useState, useEffect, useRef, useCallback } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components/ChatList/ChatList";
import { v4 as uuidv4 } from 'uuid';
import { AUTHORS } from "./utils/constants";
import "./App.scss";


const dummyData = [
  {
    author: AUTHORS.user,
    text: "Hello friends!",
    id: uuidv4()
  }
];

function App() {
  const [messages, setMessages] = useState(dummyData);
  const parentRef = useRef();

  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if(messages.length && messages[messages.length - 1].author !== AUTHORS.bot) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({   
            author: AUTHORS.bot,
            text: "Hi Bro, I am a bot",
            id: uuidv4()
          }),
        2000
      );
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  function Title() {
    return <p className="title">My awesome chat app</p>
  }
  

  return (
    <>
    <Title />
    <div className="App" ref={parentRef}>
      <ChatList />
      <div className="App_main">
        <MessageList messages = {messages} />
        <Form sendMessage={handleSendMessage} />
      </div>
    </div>
    </>
    );
}

export default App;