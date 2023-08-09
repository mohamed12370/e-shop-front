import {
  ADD_TO_CART,
  ALL_IN_CART,
  APPLY_COUPON_CART,
  DELETE_ALL_CART_ITEMS,
  DELETE_ONE_CART_ITEM,
  UPDATE_ONE_CART_ITEM,
} from '../type';
import { useInsertData } from '../../Hooks/useInsertData';
import { useGetDataToken } from '../../Hooks/useGetData';
import useDeleteData from '../../Hooks/useDeleteData';
import { useUpdateData } from '../../Hooks/useUpdateData';

export const addProductToCart = (data) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData(`/api/v1/cart`, data);
      dispatch({
        type: ADD_TO_CART,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from add product to cart redux file `, err);
      dispatch({
        type: ADD_TO_CART,
        payload: err,
      });
    }
  };
};

export const getAllProductInCart = () => {
  return async (dispatch) => {
    try {
      const res = await useGetDataToken(`/api/v1/cart`);
      dispatch({
        type: ALL_IN_CART,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from all product in cart redux file `, err);
      dispatch({
        type: ALL_IN_CART,
        payload: err,
      });
    }
  };
};

export const deleteAllCartItem = () => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(`/api/v1/cart`);
      dispatch({
        type: DELETE_ALL_CART_ITEMS,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from delete all product in cart redux file `,
        err
      );
      dispatch({
        type: DELETE_ALL_CART_ITEMS,
        payload: err,
      });
    }
  };
};

export const deleteOneCartItem = (id) => {
  return async (dispatch) => {
    try {
      const res = await useDeleteData(`/api/v1/cart/${id}`);
      dispatch({
        type: DELETE_ONE_CART_ITEM,
        payload: res,
      });
    } catch (err) {
      console.log(
        `catch error from delete one product in cart redux file `,
        err
      );
      dispatch({
        type: DELETE_ONE_CART_ITEM,
        payload: err,
      });
    }
  };
};

export const updateOneCartItem = (id, body) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/cart/${id}`, body);
      dispatch({
        type: UPDATE_ONE_CART_ITEM,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from edit one product in cart redux file `, err);
      dispatch({
        type: UPDATE_ONE_CART_ITEM,
        payload: err,
      });
    }
  };
};

export const applyCouponCart = (body) => {
  return async (dispatch) => {
    try {
      const res = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
      dispatch({
        type: APPLY_COUPON_CART,
        payload: res,
      });
    } catch (err) {
      console.log(`catch error from apply coupon cart redux file `, err);
      dispatch({
        type: APPLY_COUPON_CART,
        payload: err,
      });
    }
  };
};
