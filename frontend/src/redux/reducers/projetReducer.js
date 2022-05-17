import {
    PROJET_CREATE_REQUEST,
    PROJET_CREATE_SUCCESS,
    PROJET_CREATE_FAIL,
    PROJET_CREATE_RESET
} from '../actions/constants/projetconstants'
export const courseCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJET_CREATE_REQUEST:
        return { loading: true };
      case PROJET_CREATE_SUCCESS:
        return { loading: false, success: true, course: action.payload };
      case PROJET_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case PROJET_CREATE_RESET:
        return { success: false };
      default:
        return state;
    }
  };