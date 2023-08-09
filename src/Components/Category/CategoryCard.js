import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CategoryCard({ background, img, title, id }) {
  return (
    <Col xs="6" sm="6" md="2" className="my-4 d-flex justify-content-around ">
      <div className="allCard mb-3 ">
        <div
          className="categoty-card "
          style={{ backgroundColor: `${background}` }}
        ></div>
        <Link to={`/product/category/${id}`} className="text-decoration-none">
          <img
            alt="zcv"
            src={
              `http://127.0.0.1:8000/categories/${img
                .split('http://127.0.0.1:8000/categories/')
                .join('')}` || img
            }
            className="categoty-card-img"
          />
          <p className="categoty-card-text my-2">{title}</p>
        </Link>
      </div>
    </Col>
  );
}
