import {all, call, put, takeLatest} from 'redux-saga/effects'
import { api, channel_id, key } from '../../services/api'
import { setChannelFailure, setChannelSuccess } from './slice'

function* setChannel(action){
    try {
        const response = yield call(api.get, '/channels', {
            params: {
                part: 'id,snippet,statistics',
                key,
                id: channel_id
            }
        })
    
        const data = response.data.items[0]
    
        const filter = {
            subs: data.statistics.subscriberCount,
            videos: data.statistics.videoCount
        }
        
        yield put(setChannelSuccess(filter))
    } catch (error) {
        yield put(setChannelFailure(error.message))
    }
}

export const channel = all([
    takeLatest('channel/setChannel', setChannel)
])