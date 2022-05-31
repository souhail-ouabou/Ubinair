import {
    PROJET_CREATE_REQUEST,
    PROJET_CREATE_SUCCESS,
    PROJET_CREATE_FAIL,
    MY_PROJECTS_REQUEST,
    MY_PROJECTS_SUCCESS,
    MY_PROJECTS_FAIL,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,
    PROJET_UPDATE_REQUEST,
    PROJET_UPDATE_SUCCESS,
    PROJET_UPDATE_FAIL,
    ALL_PROJECTS_REQUEST,
    ALL_PROJECTS_SUCCESS,
    ALL_PROJECTS_FAIL,
    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAIL,
} from './constants/projetconstants'
import { toast } from 'react-toastify'

import axios from 'axios'
export const CreateProjet = (calculator) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJET_CREATE_REQUEST,
        })
        //      console.log('before token')

        const { token } = getState()
        //     console.log('after token')

        //    console.log("ha token mn l action :",token)
        const config = {
            headers: {
                Authorization: token,
            },
        }
        const { data } = await axios.post(
            `/projets/addprojet`,
            calculator,
            config
        )
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
export const listMyProjects = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: MY_PROJECTS_REQUEST,
        })
        //     console.log("before token");

        const { token } = getState()
        //     console.log("after token");

        //     console.log(token);
        const config = {
            headers: {
                Authorization: token,
            },
        }

        const { data } = await axios.get(`/projets/myprojects`, config)
        //   console.log(data);
        dispatch({
            type: MY_PROJECTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: MY_PROJECTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const Getprojectdetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROJECT_DETAILS_REQUEST,
        })
        //     console.log("before token");

        const { token } = getState()
        console.log('after token')

        console.log(token)
        const config = {
            headers: {
                Authorization: token,
            },
        }

        const { data } = await axios.get(`/projets/details/${id}`, config)
        console.log(data)

        dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const UpdateProject = (project) => async (dispatch) => {
    try {
        dispatch({ type: PROJET_UPDATE_REQUEST })
        const { data } = await axios.put(
            `/projets/updateproject/${project[0]._id}`,
            project
        )
        toast.dismiss()
        toast.loading('Please wait...', {
            position: toast.POSITION.TOP_CENTER,
        })

        dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })
        toast.dismiss()
        toast.success('Succès Update !', {
            position: toast.POSITION.TOP_CENTER,
        })
    } catch (error) {
        dispatch({
            type: PROJET_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const UpdateTaskssClient = (id, taskss) => async (dispatch) => {
    try {
        dispatch({ type: PROJET_UPDATE_REQUEST })

        const { data } = await axios.put(`/projets/updatetasks/${id}`, {
            taskss,
            id,
        })

        dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PROJET_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// export const UpdateTasksProject = (id, tasksProject) => async (dispatch) => {
//     try {
//         dispatch({ type: PROJET_UPDATE_REQUEST })

//         const { data } = await axios.put(`/projets/updatetasksprj/${id}`, {tasksProject,id})

//         dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })
//     } catch (error) {
//         dispatch({
//             type: PROJET_UPDATE_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         })
//     }
// }


export const UpdateSpecProject = (id,index,specification) => async (dispatch) => {
    try {
        dispatch({ type: PROJET_UPDATE_REQUEST })

        const { data } = await axios.put(`/projets/updatespecprj/${id}`, {specification,index,id})

        dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PROJET_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listAllProjects = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALL_PROJECTS_REQUEST,
        })
        const { token } = getState()
        console.log('after token')

        console.log(token)
        const config = {
            headers: {
                Authorization: token,
            },
        }

        const { data } = await axios.get(`/projets/allprojects`, config)
        console.log(data)
        dispatch({
            type: ALL_PROJECTS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: ALL_PROJECTS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const DeleteProject = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PROJECT_DELETE_REQUEST })
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

        const { data } = await axios.delete(
            `/projets/deleteproject/${id}`,
            config
        )

        dispatch({ type: PROJECT_DELETE_SUCCESS, payload: data })
        toast.dismiss()
        toast.success('Succès Delete !', {
            position: toast.POSITION.TOP_CENTER,
        })
        
    } catch (error) {
        dispatch({
            type: PROJECT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
