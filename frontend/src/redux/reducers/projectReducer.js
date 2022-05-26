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
    ALL_PROJECTS_RESET
} from '../actions/constants/projetConstants'
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
