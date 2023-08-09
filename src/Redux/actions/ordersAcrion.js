import { useGetDataToken } from '../../Hooks/useGetData';
import { useUpdateData } from '../../Hooks/useUpdateData';
import {
  GET_USER_ALL_ORDERS,
  GET_USER_ONE_ORDER,
  UPDATE_ORDER_DELIVER,
  UPDATE_ORDER_PAY,
} from '../type';

export const getUserAllOrders = (limit, page) => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(
        `/api/v1/orders?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_USER_ALL_ORDERS,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get user all orders file redux ', err);
      dispatch({
        type: GET_USER_ALL_ORDERS,
        payload: err.response,
      });
    }
  };
};

export const getUserOneOrder = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(`/api/v1/orders/${id}`);
      dispatch({
        type: GET_USER_ONE_ORDER,
        payload: data,
      });
    } catch (err) {
      console.log(
        'catch error from get user one order details file redux ',
        err
      );
      dispatch({
        type: GET_USER_ONE_ORDER,
        payload: err.response,
      });
    }
  };
};

export const changeOrderPay = (id, body) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateData(`/api/v1/orders/${id}/pay`, body);
      dispatch({
        type: UPDATE_ORDER_PAY,
        payload: data,
      });
    } catch (err) {
      console.log(
        'catch error from get update order pay details file redux ',
        err
      );
      dispatch({
        type: UPDATE_ORDER_PAY,
        payload: err.response,
      });
    }
  };
};

export const changeOrderdeliver = (id, body) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateData(`/api/v1/orders/${id}/deliver`, body);
      dispatch({
        type: UPDATE_ORDER_DELIVER,
        payload: data,
      });
    } catch (err) {
      console.log(
        'catch error from get update order deliver details file redux ',
        err
      );
      dispatch({
        type: UPDATE_ORDER_DELIVER,
        payload: err.response,
      });
    }
  };
};
