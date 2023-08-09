import {
  ADD_NEW_COUPON,
  DELETE_ONE_COUPON,
  GET_ALL_COUPON,
  GET_ONE_COUPON,
  UPDATE_ONE_COUPON,
} from '../type';

const initail = {
  addCoupon: [],
  allCoupon: [],
  oneCoupon: [],
  editCoupon: [],
  deleteCoupon: [],
};

const couponReducer = (state = initail, action) => {
  switch (action.type) {
    case ADD_NEW_COUPON:
      return {
        ...state,
        addCoupon: action.payload,
      };

    case GET_ALL_COUPON:
      return {
        ...state,
        allCoupon: action.payload,
      };

    case GET_ONE_COUPON:
      return {
        ...state,
        oneCoupon: action.payload,
      };

    case UPDATE_ONE_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
      };

    case DELETE_ONE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };

    default:
      return state;
  }
};

export default couponReducer;
