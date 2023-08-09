import {
  GET_USER_ALL_ORDERS,
  GET_USER_ONE_ORDER,
  UPDATE_ORDER_DELIVER,
  UPDATE_ORDER_PAY,
} from '../type';

const initail = {
  allOrdersUser: [],
  userOneOrder: [],
  oderPayStatus: [],
  oderDeliverStatus: [],
};

const orderReducer = (state = initail, action) => {
  switch (action.type) {
    case GET_USER_ALL_ORDERS:
      return {
        ...state,
        allOrdersUser: action.payload,
      };

    case GET_USER_ONE_ORDER:
      return {
        ...state,
        userOneOrder: action.payload,
      };

    case UPDATE_ORDER_PAY:
      return {
        ...state,
        oderPayStatus: action.payload,
      };

    case UPDATE_ORDER_DELIVER:
      return {
        ...state,
        oderDeliverStatus: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
