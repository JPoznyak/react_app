import { useState, useEffect, useRef, useCallback } from "react";
import { Form } from "../Form/Form";
import { MessageList } from "../MessageList/MessageList";
import { ChatList } from "../ChatList/ChatList";
import { AUTHORS } from "../../utils/constants";
import { v4 as uuidv4 } from 'uuid';
import "./chats.scss";
import { Navigate, useParams} from "react-router";
import { Container } from 'react-bootstrap';

const dummyData = {
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

function Chats() {
  const { chatId } = useParams();

  const [messages, setMessages] = useState(dummyData);
  const parentRef = useRef();

  const handleSendMessage = useCallback((newMessage) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    if (
      messages[chatId]?.length &&
      messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.bot) {
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

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  const Title = () => {
        return <p className="title">My awesome chat app</p>
    };

  return (
      <Container>
    <>
    <Title />
    <div className="App" ref={parentRef}>
        <ChatList />
        <div>
            <Form sendMessage={handleSendMessage} />
            <MessageList messages={messages[chatId]} />
        </div>
    </div>
    </>
    </Container>
  );
}

export default Chats;