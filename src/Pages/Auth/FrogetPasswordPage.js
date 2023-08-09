import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import FrogetPasswordHook from '../../helperHook/Auth/froget-password-hook';

export default function FrogetPasswordPage() {
  const { email, loading, handleChnageEmail, handleSubmit } =
    FrogetPasswordHook();
  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> نسيت كلمة المرور </label>
          <input
            placeholder=" ادخل الايميل... "
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={handleChnageEmail}
          />
          <button className="btn-login mx-auto" onClick={handleSubmit}>
            {' '}
            ارسال الكود{' '}
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
