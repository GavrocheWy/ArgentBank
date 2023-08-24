import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    firstName: '',
    lastName: '',
    error: '',
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        removeProfile: (state) => {
            state.firstName = ''
            state.lastName = ''
        }
    }
})

const { actions, reducer } = profileSlice

export const {
    setLoading,
    setError,
    setFirstName,
    setLastName,
    removeProfile,
} = actions

export default reducer

