import { RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS } from '../actions/comment_actions';
import { CLEAR_ERRORS } from '../actions/session_actions'

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_COMMENT_ERRORS:
            return [];
        // Untested CLEAR ERRORS 
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}