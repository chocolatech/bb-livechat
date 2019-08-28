import React from 'react'

const message = (props) => {

    const { user, text } = props.message
    const messageFromMe = user.id === props.currentUser.id
    const attachedClasses = messageFromMe ? "Messages-message currentMember" : "Messages-message"

    return (
        <li className={attachedClasses}>
            <span className="avatar"
                style={{ backgroundColor: user.color }} />
            <div className="Message-content">
                <div className="username">{user.username}</div>
                <div className="text">{text}</div>
            </div>
        </li>
    )
}

export default message