import { useCallback} from "react";
import { Form } from "../Form/Form";
import { MessageList } from "../MessageList/MessageList";
import { ChatList } from "../ChatList/ChatList";
// import { AUTHORS } from "../../utils/constants";
// import { v4 as uuidv4 } from 'uuid';
import "./chats.scss";
import { Navigate, useParams} from "react-router";
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageWithReply } from "../../store/messages/actions";

function Chats() {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    const handleSendMessage = useCallback(
        (newMessage) => {
            dispatch(addMessageWithReply(chatId, newMessage));
        }, [chatId]
    );

    // useEffect(() => {
    //     if (
    //     messages[chatId]?.length &&
    //     messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.bot) {
    //     const timeout = setTimeout(
    //         () =>
    //         handleSendMessage({
    //             author: AUTHORS.bot,
    //             text: "Hi Bro, I am a bot",
    //             id: uuidv4(),
    //         }),
    //         2000
    //     );
    //     return () => clearTimeout(timeout);
    //     }
    // }, [messages]);

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
        <ChatList />
        <div>
            <Form onSendMessage={handleSendMessage} />
            <MessageList messages={messages[chatId]} />
        </div>
    </div>
    </>
    </Container>
  );
}

export default Chats;