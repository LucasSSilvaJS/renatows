import { all } from "redux-saga/effects";
import { channel } from "./channel/saga";
import { videos } from "./videos/saga";

export default function* rootSaga(){
    return yield all([
        channel,
        videos
    ])
}