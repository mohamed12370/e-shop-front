import useDeleteData from '../../Hooks/useDeleteData';
import { useGetDataToken } from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import { useUpdateData } from '../../Hooks/useUpdateData';
import {
  CREATE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  GET_ONE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
} from '../type';

export const userCreateAddress = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/addresses`, data);
      dispatch({
        type: CREATE_USER_ADDRESS,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from user create address redux file `, err);
      dispatch({
        type: CREATE_USER_ADDRESS,
        payload: err,
      });
    }
  };
};

export const getUserAllAddress = () => {
  return async (dispatch) => {
    try {
      const res = await useGetDataToken(`/api/v1/addresses`);
      dispatch({
        type: GET_ALL_USER_ADDRESS,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from get user all address redux file `, err);
      dispatch({
        type: GET_ALL_USER_ADDRESS,
        payload: err,
      });
    }
  };
};

export const getUserOneAddress = (id) => {
  return async (dispatch) => {
    try {
      const res = await useGetDataToken(`/api/v1/addresses/${id}`);
      dispatch({
        type: GET_ONE_USER_ADDRESS,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from get user one address redux file `, err);
      dispatch({
        type: GET_ONE_USER_ADDRESS,
        payload: err,
      });
    }
  };
};

export const deleteUserOneAddress = (id) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(`/api/v1/addresses/${id}`);
      dispatch({
        type: DELETE_USER_ADDRESS,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from delete user one address redux file `, err);
      dispatch({
        type: DELETE_USER_ADDRESS,
        payload: err,
      });
    }
  };
};

export const updateUserOneAddress = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/addresses/${id}`, data);
      dispatch({
        type: UPDATE_USER_ADDRESS,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from update user one address redux file `, err);
      dispatch({
        type: UPDATE_USER_ADDRESS,
        payload: err,
      });
    }
  };
};
