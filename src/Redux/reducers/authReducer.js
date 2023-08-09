import {
  CREATE_NEW_USER,
  FORGET_PASSWORD,
  GET_CURRENT_USER,
  LOGIN_USER,
  LOGOUT_USER,
  RESET_PASSWORD,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PROFILE,
  VERIFY_PASSWORD,
} from '../type';

const inital = {
  createUser: [],
  loginUser: localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : {},
  currentUser: [],
  forgetPassword: [],
  verifyPassword: [],
  ResetPassword: [],
  editUserProfile: [],
  editUserPassword: [],
};

const authReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };

    case GET_CURRENT_USER:
      return {
        ...state,
        // currentUser: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loginUser: action.payload,
      };

    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };

    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };

    case RESET_PASSWORD:
      return {
        ...state,
        ResetPassword: action.payload,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        editUserProfile: action.payload,
      };

    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        editUserPassword: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
