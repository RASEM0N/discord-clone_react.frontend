import { createSlice } from '@reduxjs/toolkit'

const channelReducer = createSlice({
    name: 'channel',
    initialState: {
        channelId: null,
        channelName: null,
    },
    reducers: {
        setChannelId: (state, action) => {
            state.channelId = action.payload.channelId
            state.channelName = action.payload.channelName
        },
    },
})

export default channelReducer.reducer
export const { setChannelId } = channelReducer.actions

// selectors
export const selectChannelId = (state) => state.channel.channelId
export const selectChannelName = (state) => state.channel.channelName
