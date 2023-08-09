import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAddProducts from '../../Components/Admin/AdminAddProducts';

export default function AdminAddProductsPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <AdminAddProducts />
        </Col>
      </Row>
    </Container>
  );
}
