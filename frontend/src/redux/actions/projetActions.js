import {
    PROJET_CREATE_REQUEST,
    PROJET_CREATE_SUCCESS,
    PROJET_CREATE_FAIL,
} from './constants/projetconstants'
import axios from 'axios'
export const CreateProjet = (calculator) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJET_CREATE_REQUEST,
        })
        console.log('before token')

        const { token } = getState()
        console.log('after token')

        console.log("ha token mn l action :",token)
        const config = {
            headers: {
                Authorization: token,
            },
        }
        const { data } = await axios.post(`/projets/addprojet`,calculator, config)
        dispatch({
            type: PROJET_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PROJET_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
