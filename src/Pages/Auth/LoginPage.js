import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../helperHook/Auth/login-hook';
import { ToastContainer } from 'react-toastify';

export default function LoginPage() {
  const {
    email,
    password,
    handleChnageEmail,
    handleChnagePassword,
    handleSubmit,
    loading,
  } = LoginHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">تسجيل الدخول</label>
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={handleChnageEmail}
          />
          <input
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mx-auto"
            value={password}
            onChange={handleChnagePassword}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleSubmit}>
            تسجيل الدخول
          </button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
          <label className="mx-auto">
            <Link to="/user/froget-password" style={{ textDecoration: 'none' }}>
              هل نسيت كلمة السر
            </Link>
          </label>
        </Col>

        {/* <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger">
              الدخول ادمن
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger d-block">
              الدخول مستخدم
            </span>
          </Link>
        </label> */}
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
