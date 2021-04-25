import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user-reducer'
import channelReducer from './channel-reducer'

const store = configureStore({
    reducer: {
        user: userReducer,
        channel: channelReducer,
    },
    devTools: true,
})

export default store
