import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import NavBarLogin from './Components/Uitily/NavBarLogin';
import Footer from './Components/Uitily/Footer';
import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import AllCategoryPage from './Pages/Category/AllCategoryPage';
import AllBrandPage from './Pages/Brand/AllBrandPage';
import ShopProductsPage from './Pages/Products/ShopProductsPage';
import ProductDetailsPage from './Pages/Products/ProductDetailsPage';
import CartPage from './Pages/Cart/CartPage';
import ChoosePayMethoudPage from './Pages/Checkout/ChoosePayMethoudPage';
import AdminAllProductsPage from './Pages/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './Pages/Admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './Pages/Admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './Pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './Pages/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './Pages/Admin/AdminAddProductsPage';
import UserAllOrdersPage from './Pages/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './Pages/User/UserFavoriteProductsPage';
import UserAllAddresPage from './Pages/User/UserAllAddresPage';
import UserAddAddressPage from './Pages/User/UserAddAddressPage';
import UserEditAddressPage from './Pages/User/UserEditAddressPage';
import UserProfilePage from './Pages/User/UserProfilePage';
import AdminEditProductsPage from './Pages/Admin/AdminEditProductsPage';
import AdminEditCategoryPage from './Pages/Admin/AdminEditCategoryPage';
import AdminAllCategoryPage from './Pages/Admin/AdminAllCategoryPage';
import AdminAllBrandPage from './Pages/Admin/AdminAllBrandPage';
import AdminEditBrandPage from './Pages/Admin/AdminEditBrandPage';
import AdminAllSubCategoryPage from './Pages/Admin/AdminAllSubCategoryPage';
import AdminEditSubCategoryPage from './Pages/Admin/AdminEditSubCategoryPage';
import FrogetPasswordPage from './Pages/Auth/FrogetPasswordPage';
import VerifyPasswordPage from './Pages/Auth/VerifyPasswordPage';
import ResetPasswordPage from './Pages/Auth/ResetPasswordPage';
import AdminAddCouponPage from './Pages/Admin/AdminAddCouponPage';
import AdminEditCouponPage from './Pages/Admin/AdminEditCouponPage';
import ProtectedRouteHook from './helperHook/Auth/protected-route-hook';
import ProtectedRoute from './Components/Uitily/ProtectedRoute';
import ProductByCategory from './Pages/Products/ProductByCategory';
import ProductsByBrands from './Pages/Products/ProductsByBrands';

function App() {
  const { isUser, isAdmin } = ProtectedRouteHook();

  return (
    <>
      <BrowserRouter>
        <NavBarLogin />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/category/:id" element={<ProductByCategory />} />
          <Route path="/product/brand/:id" element={<ProductsByBrands />} />

          {/* ADMIN */}
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProductsPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetalisPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/allbrand" element={<AdminAllBrandPage />} />
            <Route
              path="/admin/editbrand/:id"
              element={<AdminEditBrandPage />}
            />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/allcategory"
              element={<AdminAllCategoryPage />}
            />
            <Route
              path="/admin/editcategory/:id"
              element={<AdminEditCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminAddSubCategoryPage />}
            />
            <Route
              path="/admin/allsubcategory"
              element={<AdminAllSubCategoryPage />}
            />
            <Route
              path="/admin/editsubcategory/:id"
              element={<AdminEditSubCategoryPage />}
            />
            <Route
              path="/admin/addproduct"
              element={<AdminAddProductsPage />}
            />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route
              path="/admin/editcoupon/:id"
              element={<AdminEditCouponPage />}
            />
          </Route>

          {/* USER */}
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route
              path="/user/favoriteproducts"
              element={<UserFavoriteProductsPage />}
            />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route
              path="/order/paymethoud"
              element={
                <ProtectedRoute auth={isUser}>
                  <ChoosePayMethoudPage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* AUTH */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/user/froget-password"
            element={<FrogetPasswordPage />}
          />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
