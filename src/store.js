// Dependencies
import { configureStore } from '@reduxjs/toolkit'
import loginStatusReducer from '../src/features/loginStatus/loginStatus'
import profileReducer from '../src/features/profile/profile'

const store = configureStore({
    reducer: {
        loginStatus: loginStatusReducer,
        profile: profileReducer,
    },
})

export default store