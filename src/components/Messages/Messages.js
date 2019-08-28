import React, { Component } from 'react'
import Message from './Message/Message'

class Messages extends Component {
    render() {
        const { messages, currentUser } = this.props;
        return (
            <ul className="Messages-list">
                {messages.map((message, index) => <Message message={message} currentUser={currentUser} key={index} />)}
            </ul>
        );
    }
}

export default Messages;