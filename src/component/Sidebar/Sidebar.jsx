import React, { useEffect, useState } from 'react'
import './style/Sidebar.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/user-reducer'
import { fbAuth, fbFirebase } from '../../firebase'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState()

    useEffect(() => {
        fbFirebase.collection('channels').onSnapshot((snapshot) =>
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            )
        )
    }, [])

    const handledAddChannel = () => {
        const channelName = prompt('Enter a new channel name')

        if (channelName) {
            fbFirebase.collection('channels').add({
                channelName: channelName,
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Clever Programmer</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel" onClick={handledAddChannel} />
                </div>
                <div className="sidebar__channelsList">
                    {channels &&
                        channels.map(({ id, channel }) => {
                            return <SidebarChannel id={id} channel={channel} key={id} />
                        })}
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src={user.photoURL} onClick={() => fbAuth.signOut()} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.length > 15 ? `${user.uid.slice(0, 15)}...` : user.uid}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
