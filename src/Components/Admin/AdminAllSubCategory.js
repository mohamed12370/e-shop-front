import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllSubCategoryCard from './AdminAllSubCategoryCard';

export default function AdminAllSubCategory({ subCat, handleDelete }) {
  return (
    <>
      <div className="admin-content-text mb-3">
        {' '}
        ادارة جميع التصميفات الفرعية{' '}
      </div>
      <Row className="mb-4">
        {subCat?.length ? (
          subCat.map((item, index) => (
            <AdminAllSubCategoryCard
              key={index}
              item={item}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h4> لا توجد تصنيفات فرعية للعرض </h4>
        )}
      </Row>
    </>
  );
}
