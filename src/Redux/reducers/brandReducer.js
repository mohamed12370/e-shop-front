import {
  CREATE_BRAND,
  DELETE_ONE_BRAND,
  GET_ALL_BRAND,
  GET_ERROR,
  GET_ONE_BRAND,
  UPDATE_ONE_BRAND,
} from '../type';

const inital = {
  brand: [],
  oneBrand: [],
  deleteBrand: [],
  updateBrand: [],
  loading: true,
};

const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };

    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };

    case DELETE_ONE_BRAND:
      return {
        ...state,
        deleteBrand: action.payload,
        loading: false,
      };

    case UPDATE_ONE_BRAND:
      return {
        ...state,
        updateBrand: action.payload,
        loading: false,
      };

    case CREATE_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        ...state,
        brand: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default brandReducer;
