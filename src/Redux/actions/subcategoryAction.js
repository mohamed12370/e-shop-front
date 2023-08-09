import useDeleteData from '../../Hooks/useDeleteData';
import useGetData from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import { useUpdateData } from '../../Hooks/useUpdateData';
import {
  CREATE_SUB_CATEGORY,
  DELETE_ONE_SUB_CATEGORY,
  GET_ALL_SUB_CATEGORY,
  GET_ERROR,
  GET_ONE_SUB_CATEGORY,
  GET_SUB_CATEGORY,
  UPDATE_ONE_SUB_CATEGORY,
} from '../type';

// create new subcategory
export const createSubcategory = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/subcategories`, data);
      dispatch({
        type: CREATE_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from create subcategory file redux ' + err);
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};

// get all sub category depend on cat id
export const getOneSubCategory = (id) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
      dispatch({
        type: GET_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from get all sub category depend on cat id file redux ' +
          err
      );
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};

// get all sub category
export const getAllSubCategory = (limit) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(`/api/v1/subcategories?limit=${limit}`);
      dispatch({
        type: GET_ALL_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from get all sub category file redux ' + err);
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};

// get all sub category
export const getAllSubCategoryPage = (page) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(
        `/api/v1/subcategories?limit=3&page=${page}`
      );
      dispatch({
        type: GET_ALL_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from get all sub category page file redux ' + err
      );
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};

// delete one sub category with id
export const deleteOneSubCategory = (id) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(`/api/v1/subcategories/${id}`);
      dispatch({
        type: DELETE_ONE_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from delete one sub category with idfile redux ' + err
      );
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};

// get one sub category with id
export const getSubCategoryId = (id) => {
  return async (dispatch) => {
    try {
      const res = await useGetData(`/api/v1/subcategories/${id}`);
      dispatch({
        type: GET_ONE_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from get one sub category with id file redux ' + err
      );
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};

// update one sub category with id
export const updateSubCategoryId = (id, params) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/subcategories/${id}`, params);
      dispatch({
        type: UPDATE_ONE_SUB_CATEGORY,
        payload: res,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from get all sub category depend on cat id file redux ' +
          err
      );
      dispatch({
        type: GET_ERROR,
        payload: 'error ' + err,
      });
    }
  };
};
