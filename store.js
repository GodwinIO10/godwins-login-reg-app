import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from "./userSlice"
import authReducer from "./authSlice"



export const store = configureStore({
    reducer: { // reducer contains names of the different slices created and their reducers/actions
        user: userReducer,
        auth: authReducer
    }
}) 


