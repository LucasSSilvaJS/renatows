import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    channel: null,
    loading: false
}

const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        setChannel: (state, action) => {
            state.loading = true
        },
        setChannelSuccess: (state, action) => {
            state.channel = action.payload
            state.loading = false
        },
        setChannelFailure: (state, action) => {
            const error = action.payload
            console.log(error)
            state.loading = false
        }
    }
})

export const {setChannel, setChannelFailure, setChannelSuccess} = channelSlice.actions

export const channelReducer = channelSlice.reducer