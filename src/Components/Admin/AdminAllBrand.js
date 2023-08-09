import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllBrandCard from './AdminAllBrandCard';

export default function AdminAllBrand({ brand, handleDelete }) {
  return (
    <>
      <div className="admin-content-text mb-3">ادارة جميع الماركات</div>
      <Row className="mb-4">
        {brand.length ? (
          brand.map((item, index) => (
            <AdminAllBrandCard
              key={index}
              item={item}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h2> لايوجد اى ماركات للعرض </h2>
        )}
      </Row>
    </>
  );
}
