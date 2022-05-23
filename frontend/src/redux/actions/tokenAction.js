import ACTIONS from './index'
import axios from 'axios'
//fetch data from db
//send the data to the DB so that it knows to signin the user
//log in the user ..
export const dispatchToken = () => async (dispatch) => {
    try {
        dispatch({
            type: ACTIONS.GET_TOKEN_REQUEST,
        })

        const res = await axios.post('/user/refresh_token', null)
        dispatch({
            type: ACTIONS.GET_TOKEN,
            payload: res.data.access_token,
        })

    } catch (error) {
        dispatch({
            type: ACTIONS.GET_TOKEN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}
