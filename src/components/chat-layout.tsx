import React from 'react'
import ChatListComponent from './chat-list'
import ChatMessageComponent from './chat-message'

const ChatLayoutComponent = () => {
    return (
        <>
            <div className="chat-layout-container">
                <div className="row">
                    <div className="col-4 chat-list">
                        <ChatListComponent />
                    </div>
                    <div className="col-8 ">
                        <ChatMessageComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatLayoutComponent
