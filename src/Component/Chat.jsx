import { IconButton } from '@material-ui/core';
import { MicNoneOutlined } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import Message from './Message';

import './Chat.css';
import { useSelector } from 'react-redux';

import { selectChatName } from '../REDUX/REDUCER/chatReducer';

import { selectChatID } from '../REDUX/REDUCER/chatReducer' ;

import db from '../firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function Chat() {

    const [input, setInput] = useState('');
    const chatName = useSelector(selectChatName);
    const [messages, setMessages] = useState([]);
    const chatId = useSelector(selectChatID);

    const userInfo = useSelector(state => state.users.userX)

    console.log('CHAT.JSX',chatName);
    console.log('CHAT.JSX',chatId);
    console.log('CHAT.JSX',userInfo);

    useEffect( ()=>{

        if(chatId){

                db.collection("chats")
                .doc(chatId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot( (snapshot) => setMessages(
                    snapshot.docs.map((doc)=>({
                        id:doc.id,
                        data:doc.data()
                    }))
                    ))
                
            }
    },[chatId]);



    const handleSubmit = e =>{
        e.preventDefault();

        //Firebase code
        db.collection("chats").doc(chatId).collection('messages').add({
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            message : input,
            uid : userInfo.uid,
            photo : userInfo.photo,
            email : userInfo.email,
            displayName : userInfo.displayName
            
        })

        setInput("");
    };

    return (
        <div className="chat">
            
            {/* Chat Header */}
            <div className="chat__header">
                {/* <h3>To: <span className="chat__name"> Channel Name </span></h3> */}
                <h3>To: <span className="chat__name"> {chatName} </span></h3>

                <strong>Detail</strong>
            </div>

            {/* Chat Messages  */}
            <div className="chat__messages">
                <FlipMove>

                    {
                        messages.map( ({id,data}) =>(
                            <Message key={id} contents={data} />
                            
                            ))
                    }

                </FlipMove>
                {/* <Message/>
                <Message/> */}

            </div>

            {/* Chat Input */}
            <div className="chat__input">
                <form >
                    <input value={input} onChange={ e => setInput(e.target.value) } type="text" placeholder="IMessage"/>
                    <button onClick={handleSubmit}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneOutlined className="chat__mic" />
                </IconButton>

            </div>

        </div>
    )
}

export default Chat
