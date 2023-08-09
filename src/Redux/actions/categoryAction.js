import useDeleteData from '../../Hooks/useDeleteData';
import useGetData from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateDataWithImage } from '../../Hooks/useUpdateData';
import {
  CREATE_CATEGORY,
  DELETE_ONE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_ONE_CATEGORY,
  UPDATE_ONE_CATEGORY,
} from '../type';

// get all category
export const getAllCategory = (limit = 4, page) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(
        `/api/v1/categories?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_CATEGORY,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get all category file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get all category with pagination
export const getAllCategoryPage = (page, limit) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(
        `/api/v1/categories?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_CATEGORY,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get all category page file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// send data to backend to save it
export const createCategory = (formData) => {
  return async (dispatch) => {
    try {
      const data = await useInsertDataWithImage(`/api/v1/categories`, formData);
      dispatch({
        type: CREATE_CATEGORY,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from create category file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get one category with id to show in product details
export const getOneCategory = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/categories/${id}`);
      dispatch({
        type: GET_ONE_CATEGORY,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from get one category file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// delete one category with id to show in product details
export const deleteOneCategory = (id) => {
  return async (dispatch) => {
    try {
      const data = await useDeleteData(`/api/v1/categories/${id}`);
      dispatch({
        type: DELETE_ONE_CATEGORY,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from delete one category file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// update one category with id to show in product details
export const updateOneCategory = (id, formData) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateDataWithImage(
        `/api/v1/categories/${id}`,
        formData
      );
      dispatch({
        type: UPDATE_ONE_CATEGORY,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from update one category file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};
