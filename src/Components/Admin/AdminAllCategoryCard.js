import React from 'react';
import { Col } from 'react-bootstrap';
import ddd from '../../Images/14.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminAllCategoryCard({ item, handleDelete }) {
  const deleteCategory = () => {
    Swal.fire({
      title: ' هل أنت متأكد من حذف هذا التصنيف ',
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
    <Col xs="6" sm="6" md="3" className="my-3 ">
      <div className="mb-2 py-2" style={{ backgroundColor: '#e3e3e3' }}>
        <div
          className="d-flex justify-content-between align-items-center px-4"
          style={{ cursor: 'pointer' }}
        >
          <p onClick={deleteCategory}> ازالة </p>
          <p>
            <Link
              to={`/admin/editcategory/${item._id}`}
              className="text-decoration-none text-dark"
            >
              تعديل
            </Link>
          </p>
        </div>
        <div className="">
          <img
            alt="zcv"
            src={
              `http://127.0.0.1:8000/categories/${item.image
                .split('http://127.0.0.1:8000/categories/')
                .join('')}` || ddd
            }
            width={'100'}
            height={'100'}
            className="m-auto d-block"
          />

          <p className="text-center mt-2">{item.name}</p>
        </div>
      </div>
    </Col>
  );
}
