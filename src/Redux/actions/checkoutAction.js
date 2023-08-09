import { useGetDataToken } from '../../Hooks/useGetData';
import { useInsertData } from '../../Hooks/useInsertData';
import { CREATE_ORDER_CARD, CREATE_ORDER_CASH } from '../type';

export const createNewOrderCash = (cartId, body) => {
  return async (dispatch) => {
    try {
      const data = await useInsertData(`/api/v1/orders/${cartId}`, body);
      dispatch({
        type: CREATE_ORDER_CASH,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from create new order cash file redux ', err);
      dispatch({
        type: CREATE_ORDER_CASH,
        payload: err.response,
      });
    }
  };
};

export const createNewOrderCard = (cartId, body) => {
  return async (dispatch) => {
    try {
      const data = await useGetDataToken(
        `/api/v1/orders/checkout-session/${cartId}`,
        body
      );
      dispatch({
        type: CREATE_ORDER_CARD,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from create new order card file redux ', err);
      dispatch({
        type: CREATE_ORDER_CARD,
        payload: err.response,
      });
    }
  };
};
