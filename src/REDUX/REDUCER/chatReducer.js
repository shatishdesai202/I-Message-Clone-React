const initialState = {

  chatId: null,
  chatName: null
};


 export  const chatReducer = (state=initialState, action)=>{
        
    switch (action.type) {

      case 'CHAT_ROOM':
        return{
          ...state,
                chatId: action.payload.chatId ,
                chatName: action.payload.chatName 
        }

      default:
          return state;
    }
  }

  export const selectChatID = (state) => state.chat.chatId

  export const selectChatName = (state) => state.chat.chatName