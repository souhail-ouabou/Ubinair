import ACTIONS from '../actions'

const initialState = {
    user: [],
    isLogged: false,
    isAdmin: false,
    loading: false,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN_REQUEST:
            return { ...state,loading: true }
        case ACTIONS.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin,
                isLogged: true,
            }
        case ACTIONS.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case ACTIONS.USER_LOGOUT:
            return {
                isLogged: false,
            }

        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.USER_REGISTER_REQUEST:
            return { loading: true }
        case ACTIONS.USER_REGISTER_SUCCESS:
            return { loading: false, msg: action.payload.msg }
        case ACTIONS.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case ACTIONS.USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export default authReducer
