import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminAllSubCategoryCard({ item, handleDelete }) {
  const deleteCategory = () => {
    Swal.fire({
      title: '  هل أنت متأكد من حذف هذا التصنيف الفرعى ',
      showCancelButton: true,
      confirmButtonText: 'حذف',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDelete(item._id);
      } else {
        console.log('no delete');
      }
    });
  };

  return (
    <>
      <Col md="4">
        <div
          className="subCat-item p-2 mb-4"
          style={{ backgroundColor: 'rgb(227 225 225)', minHeight: '150px' }}
        >
          <div className="subCat-item-controle d-flex justify-content-between align-items-center mb-3">
            <p style={{ cursor: 'pointer' }} onClick={deleteCategory}>
              {' '}
              ازالة{' '}
            </p>
            <Link
              to={`/admin/editsubcategory/${item._id}`}
              className="text-decoration-none text-dark"
            >
              {' '}
              تعديل{' '}
            </Link>
          </div>
          <div className="subCat-item-content">
            <p className="fw-bold"> اسم التصنيف الفرعى : {item.name} </p>
          </div>
        </div>
      </Col>
    </>
  );
}
