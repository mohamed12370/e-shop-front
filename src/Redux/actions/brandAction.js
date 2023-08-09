import useDeleteData from '../../Hooks/useDeleteData';
import useGetData from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateDataWithImage } from '../../Hooks/useUpdateData';
import {
  CREATE_BRAND,
  DELETE_ONE_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  GET_ONE_BRAND,
  UPDATE_ONE_BRAND,
} from '../type';

// get all brand
export const getAllBrand = (limit) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/brands?limit=${limit}`);
      dispatch({
        type: GET_ALL_BRAND,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get all brand file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get all brand with pagination
export const getAllBrandPage = (page) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/brands?limit=4&page=${page}`);
      dispatch({
        type: GET_ALL_BRAND,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get all brand page file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// send data to backend to save it
export const createBrand = (formData) => {
  return async (dispatch) => {
    try {
      const data = await useInsertDataWithImage(`/api/v1/brands`, formData);
      dispatch({
        type: CREATE_BRAND,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from create brand file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get one product brand to show in product details
export const getOneBrand = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/brands/${id}`);
      dispatch({
        type: GET_ONE_BRAND,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from get one brand brand file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// delet one product brand to show in product details
export const deleteOneBrand = (id) => {
  return async (dispatch) => {
    try {
      const data = await useDeleteData(`/api/v1/brands/${id}`);
      dispatch({
        type: DELETE_ONE_BRAND,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from delete one brand brand file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// update one product brand to show in product details
export const updateOneBrand = (id, formData) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateDataWithImage(
        `/api/v1/brands/${id}`,
        formData
      );
      dispatch({
        type: UPDATE_ONE_BRAND,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from update one brand file redux ', err);
      dispatch({
        type: UPDATE_ONE_BRAND,
        payload: err,
      });
    }
  };
};
