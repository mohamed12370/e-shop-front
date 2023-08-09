import { CREATE_ORDER_CARD, CREATE_ORDER_CASH } from '../type';

const initail = {
  addOrderCash: [],
  addOrderCard: [],
};

const checkoutReducer = (state = initail, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        addOrderCash: action.payload,
      };

    case CREATE_ORDER_CARD:
      return {
        ...state,
        addOrderCard: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
