import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';

import './Imessage.css';

function Imessage() {
    return (
        <div className="imessage">
        
            {/* Sidebar Component */}
                <Sidebar/>

                
            {/* Chat Component */}
                <Chat/>
        </div>
    )
}

export default Imessage;
