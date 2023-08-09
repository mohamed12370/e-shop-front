import useDeleteData from '../../Hooks/useDeleteData';
import useGetData from '../../Hooks/useGetData';
import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import { useUpdateDataWithImage } from '../../Hooks/useUpdateData';
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_ERROR,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
} from '../type';

// create new product
export const createProduct = (formData) => {
  return async (dispatch) => {
    try {
      const data = await useInsertDataWithImage(`/api/v1/products`, formData);
      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from create new product file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get all products
export const getAllProducts = (limit) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/products?limit=${limit}`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from get all product file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get all products by category
export const getAllProductsByCategory = (catId, limit, page) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(
        `/api/v1/products?category=${catId}&limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: data,
      });
    } catch (err) {
      console.log(
        'catch error from get all product by category file redux ',
        err
      );
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: err.response,
      });
    }
  };
};

// get all products by brand
export const getAllProductsByBrand = (brandId, limit, page) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(
        `/api/v1/products?brand=${brandId}&limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: data,
      });
    } catch (err) {
      console.log('catch error from get all product by brand file redux ', err);
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: err.response,
      });
    }
  };
};

// get all products with page numbber
export const getAllProductsPage = (limit, page) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}`
      );
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from  get all products with page numbber file redux ',
        err
      );
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get all products with query staring
export const getAllProductsSearch = (queryString) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/products?${queryString}`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from  get all products with page numbber file redux ',
        err
      );
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get one product
export const getOneProduct = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`api/v1/products/${id}`);
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from get one product details file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// get products like current product
export const getProductLike = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/v1/products?category=${id}`);
      dispatch({
        type: GET_PRODUCT_LIKE,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log(
        'catch error from get all products like current product file redux ',
        err
      );
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// to delete product
export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const data = await useDeleteData(`/api/v1/products/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from delete product file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};

// to update product
export const updateProduct = (id, formData) => {
  return async (dispatch) => {
    try {
      const data = await useUpdateDataWithImage(
        `/api/v1/products/${id}`,
        formData
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
        loading: true,
      });
    } catch (err) {
      console.log('catch error from update product file redux ', err);
      dispatch({
        type: GET_ERROR,
        payload: err,
      });
    }
  };
};
