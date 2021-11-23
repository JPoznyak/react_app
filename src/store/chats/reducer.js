import { ADD_CHAT, DELETE_CHAT } from "./actions";

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

export const chatsReducer = (state = initialChats, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload];
    case DELETE_CHAT:
      return state.filter(({ id }) => id !== action.payload.chatId);
    default:
      return state;
  }
};