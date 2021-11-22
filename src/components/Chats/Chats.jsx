import { useState, useEffect, useRef, useCallback} from "react";
import { Form } from "../Form/Form";
import { MessageList } from "../MessageList/MessageList";
import { ChatList } from "../ChatList/ChatList";
import { AUTHORS } from "../../utils/constants";
import { v4 as uuidv4 } from 'uuid';
import "./chats.scss";
import { Navigate, useParams} from "react-router";
import { Container } from 'react-bootstrap';
import { Button } from "../Button/Button";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  createSelectMessagesForChat,
  selectMessages,
  selectMessagesForChat,
} from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";

// function Chats({ chatList, messages, setMessages, deleteChat, addChat }) {
//     const { chatId } = useParams(); 
    
function Chats({ messages, sendMessage }) {
    const { chatId } = useParams();

    // const parentRef = useRef();

    const handleSendMessage = useCallback(
        (newMessage) => {
          // dispatch(addMessage(chatId, newMessage));
          sendMessage(chatId, newMessage);
        },
        [chatId, sendMessage]
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
    <div className="App">
        <ChatList 
            // chatList={chatList}
            // addChat={addChat}
            // deleteChat={deleteChat}
        />
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

const mapStateToProps = (state) => ({
    messages: state.messages,
  });
  
  const mapDispatchToProps = {
    sendMessage: addMessage,
  };
  
  export const ConnectedChats = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Chats);