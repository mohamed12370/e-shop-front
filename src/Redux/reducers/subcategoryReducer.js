import {
  CREATE_SUB_CATEGORY,
  DELETE_ONE_SUB_CATEGORY,
  GET_ALL_SUB_CATEGORY,
  GET_ERROR,
  GET_ONE_SUB_CATEGORY,
  GET_SUB_CATEGORY,
  UPDATE_ONE_SUB_CATEGORY,
} from '../type';

const inital = {
  subcategory: [],
  allSubCategory: [],
  deleteSubCategory: [],
  oneSubCategory: [],
  updateSubCategory: [],
  loadng: false,
};

const subcategoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subcategory: action.payload,
        loadng: false,
      };

    case GET_SUB_CATEGORY:
      return {
        subcategory: action.payload,
        loadng: false,
      };

    case GET_ALL_SUB_CATEGORY:
      return {
        ...state,
        allSubCategory: action.payload,
        loadng: false,
      };

    case DELETE_ONE_SUB_CATEGORY:
      return {
        ...state,
        deleteSubCategory: action.payload,
        loadng: false,
      };

    case GET_ONE_SUB_CATEGORY:
      return {
        ...state,
        oneSubCategory: action.payload,
        loadng: false,
      };

    case UPDATE_ONE_SUB_CATEGORY:
      return {
        ...state,
        updateSubCategory: action.payload,
        loadng: false,
      };

    case GET_ERROR:
      return {
        ...state,
        subcategory: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default subcategoryReducer;
