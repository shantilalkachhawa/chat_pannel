import React from 'react'

const userList = [
    { name: 'User 1', image: 'user1.jpg', time: '10:00 AM', count: 3 },
    { name: 'User 2', image: 'user1.jpg', time: '10:00 AM', count: 2 },
    { name: 'User 3', image: 'user1.jpg', time: '10:00 AM', count: 1 },
]

const ChatListComponent = () => {
    return (
        <>
            {userList.map((user, index) => (
                <div key={index} className="chat-item d-flex pointer ">
                    <img
                        src={`/images/${user.image}`}
                        alt={user.name}
                        className="user-img"
                    />
                    <div className="chat-info ms-2">
                        <div className="d-flex justify-content-between">
                            <h6 className="primary-color fw-6">{user.name}</h6>
                            <small>{user.time}</small>
                        </div>
                        <div className="d-flex justify-content-between">
                            <small>{user.count}</small>
                            <small>{user.time}</small>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ChatListComponent
