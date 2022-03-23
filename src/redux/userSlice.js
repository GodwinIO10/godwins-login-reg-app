import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Tobe",
            email: "tobe@gmail.com",
        },
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true
        },
        updateSuccess: (state, action) => {
            state.pending = false
            state.userInfo = action.payload
        },
        updateError: (state) => {
            state.error = true
            state.pending = false
        }
    },
})

export const { updateError, updateStart, updateSuccess } = userSlice.actions
export default userSlice.reducer