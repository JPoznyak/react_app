import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";
import { AUTHORS } from "../../utils/constants";

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

export const messagesReducer = (state = dummyMessages, { payload, type }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };

    case ADD_CHAT:
      return {
        ...state,
        [payload.id]: [],
      };
    case DELETE_CHAT: {
      const newMessages = { ...state };
      delete newMessages[payload.chatId];

      return newMessages;
    }
    default:
      return state;
  }
};