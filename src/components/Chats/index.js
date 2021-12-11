import { useCallback} from "react";
import { push } from "firebase/database";
import { Form } from "../Form";
import { MessageList } from "../MessageList";
import { ChatList } from "../ChatList";
// import { AUTHORS } from "../../utils/constants";
// import { v4 as uuidv4 } from 'uuid';
import { Navigate, useParams} from "react-router";
import { Container } from 'react-bootstrap';
import { connect } from "react-redux";
// import { selectMessages } from "../../store/messages/selectors";
import { addMessageWithReply } from "../../store/messages/actions";
import { getChatMsgsListRefById } from "../../services/firebase";
import "./chats.scss";

function Chats({ msgs, sendMessage }) {
    const { chatId } = useParams();
    // const messages = useSelector(selectMessages);
    // const dispatch = useDispatch();

    const handleSendMessage = useCallback(
        (newMessage) => {
            // sendMessage: addMessageWithReply,

            // dispatch(addMessageWithReply(chatId, newMessage));
            push(getChatMsgsListRefById(chatId), newMessage);

        }, [chatId, sendMessage]
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

    if (!msgs[chatId]) {
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
            <MessageList messages={msgs[chatId]} />
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
    sendMessage: addMessageWithReply,
  };
  
  export const ConnectedChats = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Chats);