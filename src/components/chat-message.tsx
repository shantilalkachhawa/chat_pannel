import React from 'react'

const ChatMessageComponent = () => {
    return (
        <div className="chat-message-container">
            <div className="user-header d-flex justify-content-between align-items-center ">
                <div className="d-flex">
                    <img src="" alt="" className="img-sec" />
                    <h5 className="mb-0">User NAme</h5>
                </div>
                <div>
                    <i className="fa fa-times">ss</i>
                </div>
            </div>
            <div className="message-section mt-2">
                <div className="chat-content d-flex justify-content-start align-items-end mb-2">
                    <div className="img-sec ms-1">{/* <image src="" /> */}</div>
                    <div className="left-message text-start shadow ms-2 ">
                        hello
                    </div>
                </div>
                <div className="chat-content d-flex justify-content-end mb-2">
                    <div className="right-message text-end shadowm me-2">
                        hiiii
                    </div>
                </div>
            </div>
            <div className="message-input">
                <div className="form-group d-flex align-items-center">
                    <i
                        className="fa fa-plus-circle ms-1"
                        aria-hidden="true"
                    ></i>
                    <input
                        type="text"
                        className="form-control ms-2"
                        name="message"
                        placeholder="text-here"
                        id=""
                    />
                    <div className="icon-sec ms-2">
                        <i className="fa fa-microphone" aria-hidden="true"></i>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessageComponent
