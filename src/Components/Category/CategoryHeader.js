import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCategoryHook from '../../helperHook/Category/all-category-page-hook';
import { Link } from 'react-router-dom';

export default function CategoryHeader() {
  const [category] = AllCategoryHook();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      setItems(category?.data);
    }
  }, [category]);

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            {items?.length &&
              items?.map((cat) => (
                <Link
                  to={`/product/category/${cat._id}`}
                  key={cat._id}
                  className="cat-text-header text-decoration-none"
                >
                  {cat.name}
                </Link>
              ))}
            <Link to={`/allcategory`} className="text-decoration-none">
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
