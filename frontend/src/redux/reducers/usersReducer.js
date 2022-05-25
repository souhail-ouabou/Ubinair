import ACTIONS from '../actions'

export const getAllUsersReducer = (state={},action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_USERS_REQUEST:
            return { loading: true }
        case ACTIONS.GET_ALL_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
            }
        case ACTIONS.GET_ALL_USERS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export const updateUserStatusReducer = (state={user : {}},action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_USERSTATUS_REQUEST :
            return {loading : true, }
        case ACTIONS.UPDATE_USERSTATUS_SUCCESS :
            return {loading : false ,success: true} 
        case ACTIONS.UPDATE_USERSTATUS_FAIL :
            return {loading : false , error : action.payload}
        case ACTIONS.UPDATE_USERSTATUS_RESET : return {users : []}
        default :
        return state  
        }
}