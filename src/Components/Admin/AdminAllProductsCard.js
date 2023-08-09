import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import prod1 from '../../Images/prod1.png';
import Swal from 'sweetalert2';

export default function AdminAllProductsCard({ product, handleDelete }) {
  const deleteProduct = () => {
    Swal.fire({
      title: ' هل أنت متأكد من حذف هذا المنتج ',
      showCancelButton: true,
      confirmButtonText: 'حذف',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDelete(product._id);
      } else {
        console.log('no delete');
      }
    });
  };

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: '100%',
          height: '350px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div className="d-inline item-delete-edit" onClick={deleteProduct}>
              ازاله
            </div>
            <Link
              to={`/admin/editproduct/${product._id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: 'none' }}
        >
          <Card.Img
            style={{ height: '228px', width: '100%' }}
            src={product.imageCover || prod1}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product.title}</div>
            </Card.Title>
            <Card.Title>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{product.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-price">
                    {product?.priceAfterDiscount >= 1 ? (
                      <>
                        {product?.priceAfterDiscount}{' '}
                        <del>{product?.price}</del>
                      </>
                    ) : (
                      product?.price
                    )}
                  </div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
              </div>
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
}
