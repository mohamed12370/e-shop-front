import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllProductsCard from './AdminAllProductsCard';

export default function AdminAllProducts({ products, handleDelete }) {
  return (
    <>
      <div className="admin-content-text mb-3">ادارة جميع المنتجات</div>
      <Row className="mb-4">
        {products.length ? (
          products.map((product, index) => (
            <AdminAllProductsCard
              key={index}
              product={product}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h4 className="text-center pt-2">لا يوجد منتجات حتي الان</h4>
        )}
      </Row>
    </>
  );
}
