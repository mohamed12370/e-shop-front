import React from 'react';
import { Col, Row } from 'react-bootstrap';
import mobile from '../../Images/mobile.png';
import { Link } from 'react-router-dom';

export default function UserAllOrderCard({ item }) {
  //console.log(item);
  return (
    <>
      <Row className="d-flex mb-2">
        <Col md="2" className="d-flex justify-content-start">
          <Link to={`/products/${item?.product?._id}`}>
            <img
              width="93px"
              height="120px"
              src={item?.product?.imageCover || mobile}
              alt=""
            />
          </Link>
        </Col>
        <Col md="6">
          <div className="d-inline pt-2 cat-title">
            {item?.product?.title || ''}
          </div>
          <div className="d-inline pt-2 cat-rate me-2">
            {item?.product?.ratingsAverage || 0}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            ({item?.product?.ratingsQuantity || 0}تقييم)
          </div>
          <div className="mt-3 d-flex align-items-center">
            <div className="cat-text  d-inline">الكميه</div>
            <input
              className="mx-2 "
              type="number"
              style={{ width: '40px', height: '25px' }}
              value={item?.count}
              disabled
            />

            <div
              className="color"
              style={{ backgroundColor: item?.color }}
            ></div>
          </div>
        </Col>
      </Row>
    </>
  );
}
