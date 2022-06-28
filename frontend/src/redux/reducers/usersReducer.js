import {
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    UPDATE_USERSTATUS_FAIL,
    UPDATE_USERSTATUS_REQUEST,
    UPDATE_USERSTATUS_RESET,
    UPDATE_USERSTATUS_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_RESET,
} from '../actions/constants/userConstants'

export const getAllUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return { loading: true }
        case GET_ALL_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
            }
        case GET_ALL_USERS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const updateUserStatusReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case UPDATE_USERSTATUS_REQUEST:
            return { loading: true }
        case UPDATE_USERSTATUS_SUCCESS:
            return { loading: false, success: true }
        case UPDATE_USERSTATUS_FAIL:
            return { loading: false, error: action.payload }
        case UPDATE_USERSTATUS_RESET:
            return { users: [] }
        default:
            return state
    }
}
export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return { loading: true }
        case USER_DELETE_SUCCESS:
            return { loading: false, success: true }
        case USER_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const userUpdateProfileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true }
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        case USER_UPDATE_PROFILE_RESET:
            return { user: {} }
        default:
            return state
    }
}
