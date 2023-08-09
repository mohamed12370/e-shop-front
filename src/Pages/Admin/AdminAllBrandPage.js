import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import Pagination from '../../Components/Uitily/Pagination';
import AdminAllBrand from '../../Components/Admin/AdminAllBrand';
import ViewBrandAdminHook from '../../helperHook/Admin/view-brand-admin-hook';

export default function AdminAllBrandPage() {
  const { brandArr, pageCount, onPress, handleDelete } = ViewBrandAdminHook();
  //console.log(brandArr);

  return (
    <div className="font">
      <Container>
        <Row className="py-3">
          <Col xs="3" sm="3" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="9" sm="9" md="10">
            <AdminAllBrand brand={brandArr} handleDelete={handleDelete} />
          </Col>
        </Row>
        <Row>
          <Col>
            {pageCount && (
              <Pagination pageCount={pageCount} onPress={onPress} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
