import {
  ALL_REVIEW_PRODUCT,
  CREATE_REVIEW,
  DELETE_REVIEW_PRODUCT,
  GET_ERROR,
  UPDATE_REVIEW_PRODUCT,
} from '../type';

const inital = {
  createReview: [],
  allReviewProd: [],
  deleteReview: [],
  updateReview: [],
  loading: true,
};

const reviewReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };

    case ALL_REVIEW_PRODUCT:
      return {
        ...state,
        allReviewProd: action.payload,
        loading: false,
      };

    case DELETE_REVIEW_PRODUCT:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      };

    case UPDATE_REVIEW_PRODUCT:
      return {
        ...state,
        updateReview: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        createReview: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default reviewReducer;
