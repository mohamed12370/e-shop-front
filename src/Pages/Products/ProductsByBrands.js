import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import ViewAllProductsBrandHook from '../../helperHook/Products/view-all-products-brand-hook';
import Pagination from '../../Components/Uitily/Pagination';

export default function ProductsByBrands() {
  const { id } = useParams();
  const { items, pageCount, onPress } = ViewAllProductsBrandHook(id);
  //console.log(items);

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
