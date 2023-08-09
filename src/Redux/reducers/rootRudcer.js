import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import brandReducer from './brandReducer';
import subcategoryReducer from './subcategoryReducer';
import productReducer from './productReducer';
import authReducer from './authReducer';
import reviewReducer from './rateReducer';
import wishListReducer from './wishListReducer';
import couponReducer from './couponReducer';
import userAddressReducer from './userAddressReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';
import orderReducer from './orderReducer';

const rootRudcer = combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  allSubcategory: subcategoryReducer,
  allProducts: productReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  wishListReducer: wishListReducer,
  couponReducer: couponReducer,
  userAddressReducer: userAddressReducer,
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
  orderReducer: orderReducer,
});

export default rootRudcer;
