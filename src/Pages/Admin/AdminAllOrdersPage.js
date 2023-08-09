import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
//import Pagination from '../../Components/Uitily/Pagination';
import AdminAllOrders from '../../Components/Admin/AdminAllOrders';

export default function AdminAllOrdersPage() {
  return (
    <div className="font">
      <Container>
        <Row className="py-3">
          <Col xs="3" sm="3" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="9" sm="9" md="10">
            <AdminAllOrders />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Pagination />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}
