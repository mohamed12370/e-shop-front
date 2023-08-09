import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminOrderDetalis from '../../Components/Admin/AdminOrderDetalis';

export default function AdminOrderDetalisPage() {
  return (
    <div className="font">
      <Container>
        <Row className="py-3">
          <Col xs="3" sm="3" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="9" sm="9" md="10">
            <AdminOrderDetalis />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
