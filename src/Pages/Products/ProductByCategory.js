import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from '../../Components/Uitily/Pagination';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import { useParams } from 'react-router-dom';
import ViewAllProductsCategoryHook from '../../helperHook/Products/view-all-products-cat-hook';

export default function ProductByCategory() {
  const { id } = useParams();
  const { items, pageCount, onPress } = ViewAllProductsCategoryHook(id);

  return (
    <div style={{ minHeight: '670px' }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer products={items} title={''} btntitle={''} />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
}
