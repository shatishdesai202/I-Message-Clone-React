  // LOGIN 
 export const login = (userInfo) =>{

   return{
     type : 'USER_LOGIN',
     payload : userInfo
   }

 }

 // LOGOUT
 export const logout = () => {
    return{
      type : 'USER_LOGOUT'
    }
 }

 //CHAT_ROOM
 export const setChat = (chatInfo) =>{

  return{
    type : 'CHAT_ROOM',
    payload : chatInfo
  }

}