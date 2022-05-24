import ACTIONS from './index'
import axios from 'axios'
export const dispatchGetAllUsers = (token) => async (dispatch) => {
    try {
        dispatch({
            type: ACTIONS.GET_All_USERS_REQUEST,
        })
        const { data } = await axios.get('/user/all_infor', {
            headers: { Authorization: token },
        })
        dispatch({
            type: ACTIONS.GET_ALL_USERS_SUCCESS,
            payload: data,
        })

        //   localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ACTIONS.GET_ALL_USERS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
