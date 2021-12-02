import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./actions";

const initialChats = [
  {
      name: "Cras justo odio",
      id: "chat1",
  },
  {
      name: "Morbi leo risus",
      id: "chat2",
  },
  {
      name: "Porta ac consectetur ac",
      id: "chat3",
  },
];

export const chatsReducer = (state = initialChats, { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload];
    case DELETE_CHAT:
      return state.filter(({ id }) => id !== payload.chatId);
    case SET_CHATS:
      return payload;
    default:
      return state;
  }
};