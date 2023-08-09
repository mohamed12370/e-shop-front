import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_BRAND,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  UPDATE_PRODUCT,
} from '../type';

const inital = {
  products: [],
  allProducts: [],
  allProductsCategory: [],
  allProductsBrand: [],
  oneProduct: [],
  productLike: [],
  deleteProduct: [],
  updateProd: [],
  loading: true,
};

const productReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };

    case GET_ALL_PRODUCTS_CATEGORY:
      return {
        ...state,
        allProductsCategory: action.payload,
      };

    case GET_ALL_PRODUCTS_BRAND:
      return {
        ...state,
        allProductsBrand: action.payload,
      };

    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };

    case GET_PRODUCT_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProd: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        products: action.payload,
        loading: true,
      };

    default:
      return state;
  }
};

export default productReducer;
