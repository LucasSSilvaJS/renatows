import { all, call, takeLatest, put } from "redux-saga/effects";
import { api, channel_id, key } from "../../services/api";
import {setLatestVideosSuccess, setLatestVideosFailure} from '../videos/slice'

function* setLatestVideos(action){
    try {
        const response = yield call(api.get, '/search', {
            params: {
                part: 'id,snippet',
                key,
                channelId: channel_id,
                maxResults: 5,
                order: 'date',
                type: 'video'
            }
        })
    
        const data = response.data.items
    
        const filterVideos = data.map(d => {
            const latestVideos = {
                videoId: d.id.videoId,
                title: d.snippet.title,
                description: d.snippet.description
            }
            return latestVideos
        })

        yield put(setLatestVideosSuccess(filterVideos))
    } catch (error) {
        yield put(setLatestVideosFailure(error))
    }
}

export const videos = all([
    takeLatest('videos/setLatestVideos', setLatestVideos)
])