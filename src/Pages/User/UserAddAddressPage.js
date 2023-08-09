import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserSideBar from '../../Components/User/UserSideBar';
import UserAddAddress from '../../Components/User/UserAddAddress';

export default function UserAddAddressPage() {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <UserAddAddress />
        </Col>
      </Row>
    </Container>
  );
}
