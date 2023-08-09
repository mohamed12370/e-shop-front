import {
  ADD_TO_CART,
  ALL_IN_CART,
  APPLY_COUPON_CART,
  DELETE_ALL_CART_ITEMS,
  DELETE_ONE_CART_ITEM,
  UPDATE_ONE_CART_ITEM,
} from '../type';

const inital = {
  userAddToCart: [],
  userAllCart: [],
  removeAllItemsCart: [],
  removeOneItemCart: [],
  editOneCartItem: [],
  couponCart: [],
};

const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        userAddToCart: action.payload,
      };

    case ALL_IN_CART:
      return {
        ...state,
        userAllCart: action.payload,
      };

    case DELETE_ALL_CART_ITEMS:
      return {
        ...state,
        removeAllItemsCart: action.payload,
      };

    case DELETE_ONE_CART_ITEM:
      return {
        ...state,
        removeOneItemCart: action.payload,
      };

    case UPDATE_ONE_CART_ITEM:
      return {
        ...state,
        editOneCartItem: action.payload,
      };

    case APPLY_COUPON_CART:
      return {
        ...state,
        couponCart: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
