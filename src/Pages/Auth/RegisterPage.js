import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegisterHook from '../../helperHook/Auth/register-hook';
import { ToastContainer } from 'react-toastify';

export default function RegisterPage() {
  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleSubmit,
    passRef,
    ShoePassword,
  } = RegisterHook();

  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12">
          <div className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
              value={name}
              onChange={handleChangeName}
            />
            <input
              placeholder="الايميل..."
              type="email"
              className="user-input my-3 text-center mx-auto"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              placeholder=" ادخل رقم الهاتف... "
              type="text"
              className="user-input  text-center mx-auto"
              value={phone}
              onChange={handleChangePhone}
            />
            <div className="w-100 my-3 position-relative ">
              <input
                ref={passRef}
                className="user-input text-center mx-auto "
                placeholder="كلمه السر..."
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <span
                className="myIcon position-absolute top-0 start-0 bg-info text-white rounded-3"
                onClick={ShoePassword}
              >
                Show
              </span>
            </div>
            <input
              placeholder=" تاكيد كلمة السر... "
              type="password"
              className="user-input my-3 text-center mx-auto"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            />
            <button className="btn-login mx-auto mt-4" onClick={handleSubmit}>
              تسجيل الحساب
            </button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <span style={{ cursor: 'pointer' }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </div>
        </Col>
        <ToastContainer />
      </Row>
    </Container>
  );
}
