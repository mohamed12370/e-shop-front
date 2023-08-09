import {
  CREATE_NEW_USER,
  FORGET_PASSWORD,
  GET_CURRENT_USER,
  LOGIN_USER,
  RESET_PASSWORD,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PROFILE,
  VERIFY_PASSWORD,
} from '../type';
import { useInsertData } from '../../Hooks/useInsertData';
import { useGetDataToken } from '../../Hooks/useGetData';
import { useUpdateData } from '../../Hooks/useUpdateData';

// create new user
export const createNewUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/auth/signup`, data);
      dispatch({
        type: CREATE_NEW_USER,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(`catch error from create new user file redux ` + err);
      dispatch({
        type: CREATE_NEW_USER,
        payload: err.response,
      });
    }
  };
};

// login user
export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/auth/login`, data);
      dispatch({
        type: LOGIN_USER,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(`catch error from login user file redux ` + err);
      dispatch({
        type: LOGIN_USER,
        payload: err.response,
      });
    }
  };
};

// login user
export const isLoggedinUser = (userID) => {
  return async (dispatch) => {
    try {
      const res = await useGetDataToken(`/api/v1/users/${userID}`);
      dispatch({
        type: GET_CURRENT_USER,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(`catch error from get current user file redux ` + err);
      dispatch({
        type: GET_CURRENT_USER,
        payload: err.response,
      });
    }
  };
};

// 1- froget password
export const userForgetPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
      dispatch({
        type: FORGET_PASSWORD,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from user forget password file redux ` + err);
      dispatch({
        type: FORGET_PASSWORD,
        payload: err.response,
      });
    }
  };
};

// 2- verify password
export const verifyPasseordCode = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
      dispatch({
        type: VERIFY_PASSWORD,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from verify Passeord Code file redux ` + err);
      dispatch({
        type: VERIFY_PASSWORD,
        payload: err.response,
      });
    }
  };
};

// 3- reset password
export const userResetPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/auth/resetPassword`, data);
      dispatch({
        type: RESET_PASSWORD,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from user Reset Password file redux ` + err);
      dispatch({
        type: RESET_PASSWORD,
        payload: err.response,
      });
    }
  };
};

export const updateUserProfileData = (data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/users/updateMe`, data);
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from update user profile data personal file redux ` + err
      );
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: err.response,
      });
    }
  };
};

export const updateUserPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/users/changeMyPassword`, data);
      dispatch({
        type: UPDATE_USER_PASSWORD,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from update user profile data Password file redux ` + err
      );
      dispatch({
        type: UPDATE_USER_PASSWORD,
        payload: err.response,
      });
    }
  };
};
