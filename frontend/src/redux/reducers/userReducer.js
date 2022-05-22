import ACTIONS from '../actions'

<<<<<<< HEAD
const initialState = {
    user: [],
    isLogged: false,
    isAdmin: false,
    loading: false,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN_REQUEST:
            return { ...state, loading: true }
        case ACTIONS.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload.userInfo,
                isAdmin: action.payload.isAdmin,
                isLogged: true,
=======
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.USER_LOGIN_REQUEST:
            return { loading: true }
        case ACTIONS.USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin,
>>>>>>> ea322b72ced07a2f80eea84e5b9e0e0a14fb84e0
            }
        case ACTIONS.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case ACTIONS.USER_LOGOUT:
<<<<<<< HEAD
            return {
                isLogged: false,
            }

        default:
            return state
    }
}
export const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_USER_REQUEST:
            return { ...state, loading: true }
        case ACTIONS.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin,
            }
        case ACTIONS.GET_USER_FAIL:
            return { loading: false, error: action.payload }
=======
            return {}
>>>>>>> ea322b72ced07a2f80eea84e5b9e0e0a14fb84e0

        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.USER_REGISTER_REQUEST:
            return { loading: true }
        case ACTIONS.USER_REGISTER_SUCCESS:
<<<<<<< HEAD
            return { loading: false, msg: action.payload.msg }
=======
            return { loading: false, msg: action.payload.msg  }
>>>>>>> ea322b72ced07a2f80eea84e5b9e0e0a14fb84e0
        case ACTIONS.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        case ACTIONS.USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export default authReducer
