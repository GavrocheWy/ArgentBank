import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isLogged: false,
    error: '',
    token: ''
}

const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        logIn: (state) => {
            state.isLogged = true
        },
        logOut: (state) => {
            state.isLogged = false
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    },
})

const { actions, reducer } = loginStatusSlice

export const {
    setLoading,
    setError,
    logIn,
    logOut,
    setToken
} = actions

export default reducer
