import {
    PROJET_CREATE_REQUEST,
    PROJET_CREATE_SUCCESS,
    PROJET_CREATE_FAIL,
    PROJET_CREATE_RESET,
    MY_PROJECTS_REQUEST,
    MY_PROJECTS_SUCCESS,
    MY_PROJECTS_FAIL,
    MY_PROJECTS_RESET
} from '../actions/constants/projetconstants'
export const ProjetcCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJET_CREATE_REQUEST:
        return { loading: true };
      case PROJET_CREATE_SUCCESS:
        return { loading: false, success: true, project: action.payload };
      case PROJET_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PROJET_CREATE_RESET:
        return { success: false };
      default:
        return state;
    }
  };
  export const ListMyProjectsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
      case MY_PROJECTS_REQUEST:
        return {
          loading: true,
        };
      case MY_PROJECTS_SUCCESS:
        return {
          loading: false,
          projects: action.payload,
        };
      case MY_PROJECTS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case MY_PROJECTS_RESET:
        return { projects: [] };
      default:
        return state;
    }
  };