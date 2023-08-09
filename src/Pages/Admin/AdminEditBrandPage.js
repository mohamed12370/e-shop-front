import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminEditBrand from '../../Components/Admin/AdminEditBrand';

export default function AdminEditBrandPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <AdminEditBrand />
        </Col>
      </Row>
    </Container>
  );
}
