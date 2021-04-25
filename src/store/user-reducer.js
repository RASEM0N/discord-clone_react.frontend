import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
    },
})

export default userReducer.reducer
export const { login, logout } = userReducer.actions

// selectors
export const selectUser = (state) => state.user.user
