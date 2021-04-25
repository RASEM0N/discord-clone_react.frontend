import React, { useEffect, useState } from 'react'
import './style/Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import GifIcon from '@material-ui/icons/Gif'
import Message from './Message'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/user-reducer'
import { selectChannelId, selectChannelName } from '../../store/channel-reducer'
import { fbFirebase } from '../../firebase'
import firebase from 'firebase'

const Chat = () => {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (channelId) {
            fbFirebase
                .collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                })
        }
    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault()

        if (channelId) {
            fbFirebase.collection('channels').doc(channelId).collection('messages').add({
                message: input,
                user: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }

        setInput('')
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages &&
                    messages.map((message) => (
                        <Message
                            user={message.user}
                            content={message.message}
                            timestamp={message.timestamp}
                        />
                    ))}
            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form onSubmit={sendMessage}>
                    <input
                        placeholder={`Message #${channelName}`}
                        value={input}
                        disabled={!channelId}
                        name="message"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {/*<button type="submit" className="chat__inputButton">*/}
                    {/*    Send Message*/}
                    {/*</button>*/}
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
