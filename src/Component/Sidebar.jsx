import { Avatar, IconButton } from '@material-ui/core';
import { RateReviewOutlined, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//importing cssFile
import './Sidebar.css';

import SidebarChat from './SidebarChat';

import db, { auth } from '../firebase';

function Sidebar() {

    const userInfo = useSelector(state => state.users.userX)
    console.log('side bar',userInfo);

    const [chats, setChats] = useState([]);

    useEffect( ()=>{

        db.collection('chats').onSnapshot( snapshot =>(
            setChats(snapshot.docs.map( doc => ({
                id:doc.id,
                data:doc.data()
            }) ))
        ))


    },[] )

    const addChat = () =>{
    
        console.log("SignUP CLicked");
    

        const chatName = prompt('Enter A Chat Name');

        if(chatName){
            db.collection("chats").add({
                chatName: chatName,
            });
        }
    
    };

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                
                <Avatar onClick={ () => { auth.signOut() } } src={userInfo.photo} className="sidebar__avatar" />
                
                <div className="sidebar__input">
                    <Search/>
                    <input placeholder="Search Here" />
                </div>

                <IconButton variant className="sidebar__importButton">
                    <RateReviewOutlined onClick={addChat} />
                </IconButton>

            </div>

            <div className="sidebar__chats">

            { chats.map( ({ id, data:{chatName}}  ) => (
                
                <SidebarChat key={id} id={id} chatName={chatName} />
               
            ))}

                

                {/* <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/> */}
               
            </div>
        
        </div>
    )
}

export default Sidebar
