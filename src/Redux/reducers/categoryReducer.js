import {
  CREATE_CATEGORY,
  DELETE_ONE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_ONE_CATEGORY,
  UPDATE_ONE_CATEGORY,
} from '../type';

const initail = {
  category: [],
  oneCategory: [],
  deleteCategory: [],
  updateCategory: [],
  loading: true,
};

const categoryReducer = (state = initail, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    case GET_ONE_CATEGORY:
      return {
        oneCategory: action.payload,
        loading: false,
      };

    case DELETE_ONE_CATEGORY:
      return {
        ...state,
        deleteCategory: action.payload,
        loading: false,
      };

    case UPDATE_ONE_CATEGORY:
      return {
        ...state,
        updateCategory: action.payload,
        loading: false,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        ...state,
        category: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default categoryReducer;
