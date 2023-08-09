import {
  ADD_TO_WISHLIST,
  GET_ALL_WISHLIST_USER,
  REMOVE_FROM_WISHLIST,
} from '../type';

const inital = {
  addWishList: [],
  removeWishList: [],
  allWishList: [],
};

const wishListReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishList: action.payload,
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeWishList: action.payload,
      };

    case GET_ALL_WISHLIST_USER:
      return {
        ...state,
        allWishList: action.payload,
      };

    default:
      return state;
  }
};

export default wishListReducer;
