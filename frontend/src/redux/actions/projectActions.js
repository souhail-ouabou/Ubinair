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
    ADD_COL_MOODBOARD_REQUEST,
    ADD_COL_MOODBOARD_FAIL,
    ADD_COL_MOODBOARD_SUCCESS,
    ADD_ABOUT_BRAND_SUCCESS,
    ADD_ABOUT_BRAND_FAIL,
    DELETE_MOODB_IMG_REQUEST,
    DELETE_MOODB_IMG_SUCCESS,
    DELETE_MOODB_IMG_FAIL,
    DELETE_BRIEF_FILE_REQUEST,
    DELETE_BRIEF_FILE_SUCCESS,
    DELETE_BRIEF_FILE_FAIL,
    ADD_ABOUT_BRAND_REQUEST,
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

export const UpdateColorsProject = (id,colorsState) => async (dispatch) => {
    try {
        dispatch({ type: PROJET_UPDATE_REQUEST })
        
        toast.dismiss()
        toast.loading('Please wait...', {
            position: toast.POSITION.TOP_CENTER,
        })

        const { data } = await axios.put(`/projets/updateprjcolors/${id}`, {colorsState,id})

        dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })

        toast.dismiss()
        toast.success('Colors saved with success !', {
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

export const UpdateFontsProject = (id,fontStyles) => async (dispatch) => {
    try {
        dispatch({ type: PROJET_UPDATE_REQUEST })
        toast.dismiss()
        toast.loading('Please wait...', {
            position: toast.POSITION.TOP_CENTER,
        })

        const { data } = await axios.put(`/projets/updateprjfonts/${id}`, {fontStyles,id})

      

        dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })

        toast.dismiss()
        toast.success('Font styles saved with success !', {
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

export const UpdateContentsProject = (id,Contents) => async (dispatch) => {
    try {
        dispatch({ type: PROJET_UPDATE_REQUEST })
        toast.dismiss()
        toast.loading('Please wait...', {
            position: toast.POSITION.TOP_CENTER,
        })

        const { data } = await axios.put(`/projets/updateprjcontents/${id}`, {Contents,id})

      

        dispatch({ type: PROJET_UPDATE_SUCCESS, payload: data })

        toast.dismiss()
        toast.success('Contents saved with success !', {
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
export const AddColMoodBoard= ({info,images,id}) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADD_COL_MOODBOARD_REQUEST })
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
        console.log("images mn dispatcher", images)
        const  {data}  = await axios.post("/api/upload_moodboard",{images},config)
        console.log("after then :",data)
        const  {res}  = await axios.post(`/projets/addbrief/${id}`, {info,data}, config)
        
        dispatch({ type: ADD_COL_MOODBOARD_SUCCESS, payload: res })
        
        toast.dismiss()
        toast.success('Succès Update !', {
            position: toast.POSITION.TOP_CENTER,
        })
        
    } catch (err) {
        dispatch({
            type: ADD_COL_MOODBOARD_FAIL,
            payload:
            err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
        toast.dismiss()
        toast.error(err.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
        })
    }
}
export const AddAboutBrand= ({info,files,basesArray,id}) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADD_ABOUT_BRAND_REQUEST }) 
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
        // console.log("files from dispatcher", basesArray)
        
        const  {data}  = await axios.post("/api/upload_aboutbrand",{files,basesArray},config)
         console.log("after then :",data)
         const  {res}  = await axios.post(`/projets/addaboutbrand/${id}`, {info,data}, config)
        // console.log("res : ",res)
        dispatch({ type: ADD_ABOUT_BRAND_SUCCESS, payload: res })

        
        toast.dismiss()
        toast.success('Succès Update !', {
            position: toast.POSITION.TOP_CENTER,
        })
        
    } catch (err) {
        dispatch({
            type: ADD_ABOUT_BRAND_FAIL,
            payload:
            err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
        toast.dismiss()
        toast.error(err.response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
        })
    }
}
export const DeleteMoodBoardImg = ({id,public_id}) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_MOODB_IMG_REQUEST }) 
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
        const  {data}  = await axios.post("/api/delete_moodbimg",{public_id},config)
        console.log("after then :",data)
        const  {res}  = await axios.post(`/projets/deleteimgmoodb/${id}`,{public_id}, config)
        dispatch({
            type: DELETE_MOODB_IMG_SUCCESS,
        })
        toast.dismiss()
        toast.success('Succès Delete !', {
            position: toast.POSITION.TOP_CENTER,
        })
    } catch (error) {
        dispatch({
            type: DELETE_MOODB_IMG_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const DeleteBriefFile = ({id,public_id}) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_BRIEF_FILE_REQUEST }) 
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
        const  {data}  = await axios.post("/api/delete_aboutbrand",{public_id},config)
        console.log("after then :",data)
        const  {res}  = await axios.post(`/projets/deletebrieffile/${id}`,{public_id}, config)
        dispatch({
            type: DELETE_BRIEF_FILE_SUCCESS,
        })
        toast.dismiss()
        toast.success('Succès Delete !', {
            position: toast.POSITION.TOP_CENTER,
        })
    } catch (error) {
        dispatch({
            type: DELETE_BRIEF_FILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}




