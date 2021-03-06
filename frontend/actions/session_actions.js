import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER= 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const newsignup = user => dispatch => (
    SessionAPIUtil.newsignup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => {
    return (
        SessionAPIUtil.login(user).then(user => (
            dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    )
};

export const newlogin = user => dispatch => {
    return (
        SessionAPIUtil.newlogin(user).then(user => (
            dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    )
};

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);

export const updateUser = (user) => dispatch => {
    return (
        SessionAPIUtil.update(user).then(user => (
            dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
    );
}