import React from 'react'
import './style/SidebarChannel.scss'
import { useDispatch } from 'react-redux'
import { setChannelId } from '../../store/channel-reducer'

const SidebarChannel = ({ id, channel }) => {
    const dispatch = useDispatch()

    return (
        <div
            className="sidebarChannel"
            onClick={() =>
                dispatch(
                    setChannelId({
                        channelId: id,
                        channelName: channel.channelName,
                    })
                )
            }
        >
            <h4>
                <span className="sidebarChannel__hash">#</span>
                {channel.channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
