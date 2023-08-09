import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import VerifyPasswordHook from '../../helperHook/Auth/verify-password-hook';

export default function VerifyPasswordPage() {
  const { code, handleChnageCode, loading, handleSubmit } =
    VerifyPasswordHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> ادخل الكود </label>
          <input
            placeholder=" ادخل الكود... "
            type="number"
            className="user-input my-3 text-center mx-auto"
            value={code}
            onChange={handleChnageCode}
          />
          <button className="btn-login mx-auto" onClick={handleSubmit}>
            {' '}
            تاكيد{' '}
          </button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {loading ? <Spinner animation="border" /> : null}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}
