import React from 'react'
import './style/ChatHeader.scss'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EditIcon from '@material-ui/icons/Edit'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'

const ChatHeader = () => {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash"># </span>
                    &#8291; Test Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditIcon />
                <PeopleAltIcon />
                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
