import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import CategoryCard from './CategoryCard';

export default function CategoryContainer({ data, loading }) {
  const colors = [
    '#FFD3E8',
    '#F4DBA5',
    '#55CFDF',
    '#FF6262',
    '#0034FF',
    '#FFD3E8',
  ];

  return (
    <Container className="mb-4">
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {!loading ? (
          data?.length ? (
            data.map((item, index) => (
              <CategoryCard
                key={item._id}
                id={item._id}
                title={item.name}
                img={item.image}
                background={colors[Math.floor(Math.random() * 5 + 1)]}
              />
            ))
          ) : (
            <h4 className="text-center text-danger">لا يوجد تصنيفات</h4>
          )
        ) : (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Row>
    </Container>
  );
}
