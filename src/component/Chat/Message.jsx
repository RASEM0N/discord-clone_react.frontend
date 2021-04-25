import React from 'react'
import './style/Message.scss'
import { Avatar } from '@material-ui/core'

const Message = ({ content, user, timestamp }) => {
    return (
        <div className="message">
            <Avatar src={user.photoURL} />
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">{timestamp ? timestamp.seconds : '...'}</span>
                </h4>
                <p className="message__content">{content}</p>
            </div>
        </div>
    )
}

export default Message
