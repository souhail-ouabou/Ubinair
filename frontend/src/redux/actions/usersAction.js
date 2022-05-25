import ACTIONS from './index'
import axios from 'axios'
import { toast } from 'react-toastify'
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
export const updateUserStatus =
    (id, checkAdmin, client) => async (dispatch, getState) => {
        try {
            dispatch({
                type: ACTIONS.UPDATE_USERSTATUS_REQUEST,
            })
            toast.dismiss()
            toast.loading('Please wait...', {
                position: toast.POSITION.TOP_CENTER,
            })
            const { token } = getState()

            const config = {
                headers: {
                    Authorization: token,
                },
            }

            const { data } = await axios.patch(
                `/user/update_role/${id}`,
                {
                    role: checkAdmin ? 1 : 0,
                    client,
                },
                config
            )

            dispatch({
                type: ACTIONS.UPDATE_USERSTATUS_SUCCESS,
            })
            toast.dismiss()
            toast.success('Succès Update !', {
                position: toast.POSITION.TOP_CENTER,
            })
        } catch (error) {
            dispatch({
                type: ACTIONS.UPDATE_USERSTATUS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }
