import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminEditSubCategory from '../../Components/Admin/AdminEditSubCategory';

export default function AdminEditSubCategoryPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <AdminEditSubCategory />
        </Col>
      </Row>
    </Container>
  );
}
