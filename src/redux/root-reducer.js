import { combineReducers } from 'redux';
import { channelReducer } from './channel/slice';
import { videosReducer } from './videos/slice';

export const rootReducer = combineReducers({
    channel: channelReducer,
    videos: videosReducer
})