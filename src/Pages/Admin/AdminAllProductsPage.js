import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAllProducts from '../../Components/Admin/AdminAllProducts';
import Pagination from '../../Components/Uitily/Pagination';
import ViewProductsAdminHook from '../../helperHook/Admin/view-products-admin-hook';

export default function AdminAllProductsPage() {
  const { items, pageCount, onPress, handleDelete } = ViewProductsAdminHook();
  //console.log(pageCount);

  return (
    <div className="font">
      <Container>
        <Row className="py-3">
          <Col xs="3" sm="3" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="9" sm="9" md="10">
            <AdminAllProducts products={items} handleDelete={handleDelete} />
          </Col>
        </Row>
        <Row>
          <Col>
            {pageCount > 1 ? (
              <Pagination pageCount={pageCount} onPress={onPress} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
