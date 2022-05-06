import ACTIONS from '../actions'

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN_REQUEST:
            return { loading: true }
        case ACTIONS.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin,
            }
        case ACTIONS.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case ACTIONS.USER_LOGOUT:
            return {}

        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.USER_REGISTER_REQUEST:
            return { loading: true }
        case ACTIONS.USER_REGISTER_SUCCESS:
            return { loading: false, msg: action.payload.msg  }
        case ACTIONS.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case ACTIONS.USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export default authReducer
