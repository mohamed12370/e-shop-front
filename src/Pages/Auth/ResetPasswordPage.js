import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ResetPasswordHook from '../../helperHook/Auth/reset-password-hook';

export default function ResetPasswordPage() {
  const {
    password,
    confirmPassword,
    handleChangePassword,
    handleChangeConfirmPassword,
    loading,
    handleSubmit,
  } = ResetPasswordHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">
            {' '}
            ادخل كملمة المرور الجديدة{' '}
          </label>
          <input
            placeholder=" ادخل كلمة المرور الجديدة... "
            type="password"
            className="user-input my-3 text-center mx-auto"
            value={password}
            onChange={handleChangePassword}
          />
          <input
            placeholder=" تاكيد كلمة المرور الجديدة... "
            type="password"
            className="user-input my-3 text-center mx-auto"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
          <button className="btn-login mx-auto" onClick={handleSubmit}>
            {' '}
            حفظ{' '}
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
