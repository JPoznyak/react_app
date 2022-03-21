import { AUTHORS } from "../../utils/constants";
import { v4 as uuidv4 } from 'uuid';
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

let timeout; 

export const addMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));

  if (message.author !== AUTHORS.bot) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      const botMessage = {
        author: AUTHORS.bot,
        text: "Hi Bro, I am a bot",
        id: uuidv4(),
      }; 
      dispatch(addMessage(chatId, botMessage));
    }, 2000)
  }
}