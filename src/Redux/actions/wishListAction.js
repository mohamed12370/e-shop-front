import useDeleteData from '../../Hooks/useDeleteData';
import { useGetDataToken } from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import {
  ADD_TO_WISHLIST,
  GET_ALL_WISHLIST_USER,
  REMOVE_FROM_WISHLIST,
} from '../type';

// add new product to user wishlist
export const addProductToWishList = (body) => {
  return async (dispatch) => {
    try {
      const data = await useInsertData(`/api/v1/wishlist`, body);
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from add new product to user wishlist file redux ',
        err
      );
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: err.response,
      });
    }
  };
};

// remove product from user wishlist
export const removeProductFromWishList = (id) => {
  return async (dispatch) => {
    try {
      const data = await useDeleteData(`/api/v1/wishlist/${id}`);
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from remove product from user wishlist file redux ',
        err
      );
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: err.response,
      });
    }
  };
};

// get all wishlist products user
export const getAllWishListProductsUser = () => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(`/api/v1/wishlist`);
      dispatch({
        type: GET_ALL_WISHLIST_USER,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from get all wishlist product user  file redux ',
        err
      );
      dispatch({
        type: GET_ALL_WISHLIST_USER,
        payload: err.response,
      });
    }
  };
};
