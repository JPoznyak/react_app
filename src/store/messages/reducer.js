// import { ADD_MESSAGE } from "./actions";

// const initialState = {
//   // to be stored like this {[chatId]: [{id, text, author}]}
//   messageList: {},
// };

// const chatsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_MESSAGE: {
//       const currentList = state.messageList[action.chatId] || [];
//       return {
//         ...state,
//         messageList: {
//           ...state.messageList,
//           [action.chatId]: [
//             ...currentList,
//             {
//               ...action.message,
//               id: `${action.chatId}${currentList.length}`,
//             },
//           ],
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default chatsReducer;


import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialMessages = {};

export const messagesReducer = (state = initialMessages, { payload, type }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };
    case DELETE_MESSAGE: {
      const newMessages = { ...state };
      newMessages[payload.chatId] = newMessages[payload.chatId].filter(
        ({ id }) => id !== payload.idToDelete
      );

      return newMessages;
    }

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