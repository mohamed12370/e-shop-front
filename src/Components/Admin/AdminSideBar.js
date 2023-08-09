import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSideBar() {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            اداره الطلبات
          </div>
        </Link>
        <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اداره المنتجات
          </div>
        </Link>
        <Link to="/admin/allcategory" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اداره التصنيفات
          </div>
        </Link>
        <Link to="/admin/allsubcategory" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اداره التصنيفات الفرعية
          </div>
        </Link>
        <Link to="/admin/allbrand" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اداره الماركات
          </div>
        </Link>
        <hr style={{ height: '10px', backgroundColor: '#f00' }} />
        <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text mb-1 border-bottom p-2 mx-auto text-center">
            اضف ماركه
          </div>
        </Link>

        <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اضف تصنيف
          </div>
        </Link>

        <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اضف تصنيف فرعي
          </div>
        </Link>
        <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اضف منتج
          </div>
        </Link>

        <Link to="/admin/addcoupon" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            اضف كوبون
          </div>
        </Link>
      </div>
    </div>
  );
}
