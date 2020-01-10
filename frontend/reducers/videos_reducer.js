import { RECEIVE_VIDEOS, RECEIVE_VIDEO, DELETE_VIDEO, RECEIVE_VIDEO_ERRORS } from "../actions/video_actions";

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video;
            return newState
        case DELETE_VIDEO:
            delete newState[action.video.id];
            return newState
        default:
            return state
    }
};

export default videosReducer