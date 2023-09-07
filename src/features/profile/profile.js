import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    error: '',
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        clearProfile: (state) => {
            state.firstName = ''
            state.lastName = ''
        }
    }
})

const { actions, reducer } = profileSlice

export const {
    setError,
    setFirstName,
    setLastName,
    clearProfile,
} = actions

export default reducer

