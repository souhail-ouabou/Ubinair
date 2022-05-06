import ACTIONS from './index'
import axios from 'axios'
//fetch data from db
//send the data to the DB so that it knows to signin the user
//log in the user ..
export const dispatchLogin = (creds) => async (dispatch) => {
    try {
        dispatch({
            type: ACTIONS.USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post('/user/login', creds, config)
        dispatch({
            type: ACTIONS.USER_LOGIN_SUCCESS,
            payload: {
                user: data,
                isAdmin: data.role === 1 ? true : false,
            },
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ACTIONS.USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg 
                    : error.msg,
        })
    }
}
