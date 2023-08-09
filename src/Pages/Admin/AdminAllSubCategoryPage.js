import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import Pagination from '../../Components/Uitily/Pagination';
import AdminAllSubCategory from '../../Components/Admin/AdminAllSubCategory';
import ViewSubCaegoryAdminHook from '../../helperHook/Admin/view-subcaegory-admin-hook';

export default function AdminAllSubCategoryPage() {
  const { subCat, pageCount, onPress, handleDelete } =
    ViewSubCaegoryAdminHook();

  return (
    <div className="font">
      <Container>
        <Row className="py-3">
          <Col xs="3" sm="3" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="9" sm="9" md="10">
            <AdminAllSubCategory subCat={subCat} handleDelete={handleDelete} />
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
