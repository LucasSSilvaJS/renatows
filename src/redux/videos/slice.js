import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    latestVideos: [],
    loading: false,
}

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setLatestVideos: (state, action) => {
            state.loading = true
        },
        setLatestVideosSuccess: (state, action) => {
            state.latestVideos = action.payload
            state.loading = false
        },
        setLatestVideosFailure: (state, action) => {
            const error = action.payload
            console.log(error)
            state.loading = false
        }
    }
})

export const {
    setLatestVideos, 
    setLatestVideosSuccess, 
    setLatestVideosFailure
} = videosSlice.actions

export const videosReducer = videosSlice.reducer