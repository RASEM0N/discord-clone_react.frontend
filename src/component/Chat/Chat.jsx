import React from 'react'
import './style/Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import GifIcon from '@material-ui/icons/Gif'
import Message from './Message'

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder="Message #TESTCHANNEL" />
                    <button type="submit" className="chat__inputButton">
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
