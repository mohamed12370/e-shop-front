import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import BrandCard from './BrandCard';
//import brand1 from '../../Images/brand1.png';

export default function BrandContainer({ data, loading }) {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-1 d-flex justify-content-between">
        {!loading ? (
          data?.length ? (
            data.map((item) => (
              <BrandCard key={item._id} img={item.image} id={item._id} />
            ))
          ) : (
            <h4 className="text-center text-danger">لا يوجد ماركات</h4>
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
