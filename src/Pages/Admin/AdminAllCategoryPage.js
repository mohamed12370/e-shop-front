import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import Pagination from '../../Components/Uitily/Pagination';
import AdminAllCategory from '../../Components/Admin/AdminAllCategory';
import ViewCategoryAdminHook from '../../helperHook/Admin/view-category-admin-hook';

export default function AdminAllCategoryPage() {
  const { catArr, pageCount, onPress, handleDelete } = ViewCategoryAdminHook();
  //console.log(catArr);

  return (
    <div className="font">
      <Container>
        <Row className="py-3">
          <Col xs="3" sm="3" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="9" sm="9" md="10">
            <AdminAllCategory category={catArr} handleDelete={handleDelete} />
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
