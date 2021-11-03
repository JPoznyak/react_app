import { useState, useEffect, useCallback } from "react";
// import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { v4 as uuidv4 } from 'uuid';
import "./App.scss";

const dummyData = [
  {
    author: "Jen",
    text: "Hello friends!",
    id: uuidv4()
  }
];

const botMessage = [
  {
    author: "Bot",
    text: "Hi Bro, I am bot!",
    id: uuidv4()
  }
];

function App() {
  const [messages, setMessages] = useState(dummyData);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if(messages.length && messages[messages.length - 1].author !== "Bot") {
      const timeout = setTimeout(
        () =>
          handleSendMessage({   //  как передать botMessage?
            author: "Bot",
            text: "Hi Bro, I am a bot",
            id: uuidv4()
          }),
        2000
      );
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header">
        <MessageList messages = {messages} />
        <Form sendMessage={handleSendMessage} />
      </header>
    </div>
  );
}

export default App;