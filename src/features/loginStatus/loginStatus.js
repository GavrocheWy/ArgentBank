import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isLogged: false,
    error: '',
}

const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true
        },
        setError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logIn: (state) => {
            state.isLoading = false
            state.isLogged = true
            state.error = ''
        },
        logOut: (state) => {
            state.isLogged = false
        },
    },
})

const { actions, reducer } = loginStatusSlice

export const {
    setLoading,
    setError,
    logIn,
    logOut,
} = actions

export default reducer
