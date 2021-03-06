const initialState = {
  userX: null,
 };


 export  const userReducer = (state=initialState, action)=>{
        
    switch (action.type) {

      case 'USER_LOGIN':
        return{
          ...state,
                userX: action.payload
        }
      
      case 'USER_LOGOUT':
        return{
          ...state,
                userX: null
          }


      default:
          return state;
    }
  }