import axios from 'axios'

export const key = process.env.REACT_APP_API_KEY
export const channel_id = process.env.REACT_APP_ID_CHANNEL

export const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})