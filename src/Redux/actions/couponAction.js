import useDeleteData from '../../Hooks/useDeleteData';
import { useGetDataToken } from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import { useUpdateData } from '../../Hooks/useUpdateData';
import {
  ADD_NEW_COUPON,
  DELETE_ONE_COUPON,
  GET_ALL_COUPON,
  GET_ONE_COUPON,
  UPDATE_ONE_COUPON,
} from '../type';

export const addNewCoupon = (body) => {
  return async (dispatch) => {
    try {
      const data = await useInsertData(`/api/v1/coupons`, body);
      dispatch({
        type: ADD_NEW_COUPON,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from create new coupon file redux ', err);
      dispatch({
        type: ADD_NEW_COUPON,
        payload: err.response,
      });
    }
  };
};

export const getAllCoupon = () => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(`/api/v1/coupons`);
      dispatch({
        type: GET_ALL_COUPON,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get all coupon file redux ', err);
      dispatch({
        type: GET_ALL_COUPON,
        payload: err.response,
      });
    }
  };
};

export const getOneCoupon = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(`/api/v1/coupons/${id}`);
      dispatch({
        type: GET_ONE_COUPON,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get one coupon file redux ', err);
      dispatch({
        type: GET_ONE_COUPON,
        payload: err.response,
      });
    }
  };
};

export const deleteOneCoupon = (id) => {
  return async (dispatch) => {
    try {
      const data = await useDeleteData(`/api/v1/coupons/${id}`);
      dispatch({
        type: DELETE_ONE_COUPON,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from delete one coupon file redux ', err);
      dispatch({
        type: DELETE_ONE_COUPON,
        payload: err.response,
      });
    }
  };
};

export const updateOneCoupon = (id, body) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateData(`/api/v1/coupons/${id}`, body);
      dispatch({
        type: UPDATE_ONE_COUPON,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from update one coupon file redux ', err);
      dispatch({
        type: UPDATE_ONE_COUPON,
        payload: err.response,
      });
    }
  };
};
