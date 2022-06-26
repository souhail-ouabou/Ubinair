import {
    PROJET_CREATE_REQUEST,
    PROJET_CREATE_SUCCESS,
    PROJET_CREATE_FAIL,
    PROJET_CREATE_RESET,
    MY_PROJECTS_REQUEST,
    MY_PROJECTS_SUCCESS,
    MY_PROJECTS_FAIL,
    MY_PROJECTS_RESET,
    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,
    PROJECT_DETAILS_RESET,
    PROJET_UPDATE_REQUEST,
    PROJET_UPDATE_SUCCESS,
    PROJET_UPDATE_FAIL,
    PROJET_UPDATE_RESET,
    ALL_PROJECTS_REQUEST,
    ALL_PROJECTS_SUCCESS,
    ALL_PROJECTS_FAIL,
    ALL_PROJECTS_RESET,
    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_FAIL,
    ADD_COL_MOODBOARD_REQUEST,
    ADD_COL_MOODBOARD_SUCCESS,
    ADD_COL_MOODBOARD_FAIL,
    ADD_COL_MOODBOARDE_RESET,
    ADD_ABOUT_BRAND_SUCCESS,
    ADD_ABOUT_BRAND_FAIL,
    ADD_ABOUT_BRAND_REQUEST,
    DELETE_BRIEF_FILE_FAIL,
    DELETE_BRIEF_FILE_SUCCESS,
    DELETE_BRIEF_FILE_REQUEST,
    DELETE_MOODB_IMG_FAIL,
    DELETE_MOODB_IMG_SUCCESS,
    DELETE_MOODB_IMG_REQUEST,
    ADD_ABOUT_BRAND_RESET,
    DELETE_BRIEF_FILE_RESET,
    DELETE_MOODB_IMG_RESET
} from '../actions/constants/projetconstants'
export const ProjetcCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PROJET_CREATE_REQUEST:
            return { loading: true }
        case PROJET_CREATE_SUCCESS:
            return { loading: false, success: true, project: action.payload }
        case PROJET_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PROJET_CREATE_RESET:
            return { success: false }
        default:
            return state
    }
}
export const ListMyProjectsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
        case MY_PROJECTS_REQUEST:
            return {
                loading: true,
            }
        case MY_PROJECTS_SUCCESS:
            return {
                loading: false,
                projects: action.payload,
            }
        case MY_PROJECTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case MY_PROJECTS_RESET:
            return { projects: [] }
        default:
            return state
    }
}
export const GetProjectDetailsReducer = (
    state = {
        project: {
            specification: [],
            //    projectTasks:[],
            features: [],
            user: {},
        },
    },
    action
) => {
    switch (action.type) {
        case PROJECT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PROJECT_DETAILS_SUCCESS:
            return {
                loading: false,
                project: action.payload,
                success: true,
            }
        case PROJECT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case PROJECT_DETAILS_RESET:
            return { project: {} }
        default:
            return state
    }
}

export const projectUpdateReducer = (state = { project: {} }, action) => {
    switch (action.type) {
        case PROJET_UPDATE_REQUEST:
            return { loading: true }
        case PROJET_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                project: action.payload,
            }
        case PROJET_UPDATE_FAIL:
            return { loading: false, err: action.payload }
        case PROJET_UPDATE_RESET:
            return { project: {}, success: false }
        default:
            return state
    }
}
export const ListAllProjectsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
        case ALL_PROJECTS_REQUEST:
            return {
                loading: true,
            }
        case ALL_PROJECTS_SUCCESS:
            return {
                loading: false,
                projects: action.payload,
            }
        case ALL_PROJECTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case ALL_PROJECTS_RESET:
            return { projects: [] }
        default:
            return state
    }
}

export const projectDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PROJECT_DELETE_REQUEST:
            return { loading: true }
        case PROJECT_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PROJECT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const AddColMoodBoardReducer = (state = { project: {} }, action) => {
    switch (action.type) {
        case ADD_COL_MOODBOARD_REQUEST:
            return {
                loading: true,
            }
        case ADD_COL_MOODBOARD_SUCCESS:
            return {
                loading: false,
                success: true,
                project: action.payload,
            }
        case ADD_COL_MOODBOARD_FAIL:
            return { loading: false, err: action.payload }
        case ADD_COL_MOODBOARDE_RESET:
            return { project: {}, success: false }
        default:
            return state
    }
}
export const AddAboutBrandReducer = (state = { project: {} }, action) => {
    switch (action.type) {
        case ADD_ABOUT_BRAND_REQUEST:
            return {
                loading: true,
            }
        case ADD_ABOUT_BRAND_SUCCESS:
            return {
                loading: false,
                success: true,
                project: action.payload,
            }
        case ADD_ABOUT_BRAND_FAIL:
            return { loading: false, err: action.payload }
        case ADD_ABOUT_BRAND_RESET:
            return { project: {}, success: false }
        default:
            return state
    }
}
export const DeleteMoodBoardImgReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_MOODB_IMG_REQUEST:
            return { loading: true }
        case DELETE_MOODB_IMG_SUCCESS:
            return { loading: false, success: true }
        case DELETE_MOODB_IMG_FAIL:
            return { loading: false, error: action.payload }
    case DELETE_MOODB_IMG_RESET:
        return { project: {}, success: false }
        default:
            return state
    }
}
export const DeleteBriefFileReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_BRIEF_FILE_REQUEST:
            return { loading: true }
        case DELETE_BRIEF_FILE_SUCCESS:
            return { loading: false, success: true }
        case DELETE_BRIEF_FILE_FAIL:
            return { loading: false, error: action.payload }
        case DELETE_BRIEF_FILE_RESET:
            return { project: {}, success: false }
        default:
            return state
    }
}
