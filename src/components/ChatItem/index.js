import { ListGroup, FormControl} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./chat-item.scss";

export const ChatItem = ({ chat, deleteChat }) => {
  const handleDeleteClick = () => {
    deleteChat(chat.id);
  };

  return (
    <>
    <ListGroup.Item className="group">
        <NavLink
            style={({ isActive }) => ({ color: isActive ? "#a83d3d" : "#5c4a4a" })}
            to={`/chats/${chat.id}`}
        >
            {chat.name}
        </NavLink>
        <button className="del-btn" onClick={handleDeleteClick}>Delete</button>
    </ListGroup.Item>
    </>
  );
};