import {
  CREATE_REVIEW,
  ALL_REVIEW_PRODUCT,
  DELETE_REVIEW_PRODUCT,
  UPDATE_REVIEW_PRODUCT,
} from '../type';
import { useInsertData } from '../../Hooks/useInsertData';
import { useGetDataToken } from '../../Hooks/useGetData';
import useDeleteData from '../../Hooks/useDeleteData';
import { useUpdateData } from '../../Hooks/useUpdateData';

// create new review to one product
export const createNewReview = (prodId, body) => {
  return async (dispatch) => {
    try {
      const data = await useInsertData(
        `/api/v1/products/${prodId}/reviews`,
        body
      );
      dispatch({
        type: CREATE_REVIEW,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from  create new review to one product file redux ',
        err
      );
      dispatch({
        type: CREATE_REVIEW,
        payload: err.response,
      });
    }
  };
};

// get all review to one product
export const allReviewProduct = (prodId, page, limit) => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(
        `/api/v1/products/${prodId}/reviews?page=${page}&limit=${limit}`
      );
      dispatch({
        type: ALL_REVIEW_PRODUCT,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from  get all review to one product file redux ',
        err
      );
      dispatch({
        type: ALL_REVIEW_PRODUCT,
        payload: err.response,
      });
    }
  };
};

// delete review to one product
export const deleteReviewProduct = (id) => {
  return async (dispatch) => {
    try {
      const data = await useDeleteData(`/api/v1/reviews/${id}`);
      dispatch({
        type: DELETE_REVIEW_PRODUCT,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from  delete review to one product file redux ',
        err
      );
      dispatch({
        type: DELETE_REVIEW_PRODUCT,
        payload: err.response,
      });
    }
  };
};

// update review to one product
export const updateReviewProduct = (id, body) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateData(`/api/v1/reviews/${id}`, body);
      dispatch({
        type: UPDATE_REVIEW_PRODUCT,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from  update review to one product file redux ',
        err
      );
      dispatch({
        type: UPDATE_REVIEW_PRODUCT,
        payload: err.response,
      });
    }
  };
};
