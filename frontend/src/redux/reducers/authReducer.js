import ACTIONS from '../actions/'

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

        default:
            return state
    }
}

export default authReducer
