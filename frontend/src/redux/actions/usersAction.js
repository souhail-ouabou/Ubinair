import ACTIONS from './index'
import axios from 'axios'
export const GetAllUsers = (token) => async (dispatch) => {
    try {
        dispatch({
            type: ACTIONS.GET_ALL_USERS_REQUEST,
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
export const getUserDetails = (id, token) => async (dispatch) => {
    try {
        dispatch({
            type: ACTIONS.USER_DETAILS_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
        }

        const { data } = await axios.get(`/user/${id}`, config)
        dispatch({
            type: ACTIONS.USER_DETAILS_SUCCESS,
            payload: {
                user: data,
                isAdmin: data.role === 1 ? true : false,
            },
        })
    } catch (error) {
        dispatch({
            type: ACTIONS.USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
