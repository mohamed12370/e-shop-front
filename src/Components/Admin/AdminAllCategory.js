import React from 'react';
import AdminAllCategoryCard from './AdminAllCategoryCard';
import { Row } from 'react-bootstrap';

export default function AdminAllCategory({ category, handleDelete }) {
  return (
    <>
      <div className="admin-content-text mb-3">ادارة جميع التصنيفات</div>
      <Row className="mb-4">
        {category.length ? (
          category.map((item, index) => (
            <AdminAllCategoryCard
              key={index}
              item={item}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h4 className="text-center pt-2">لا يوجد تصنيفات حتي الان</h4>
        )}
      </Row>
    </>
  );
}
