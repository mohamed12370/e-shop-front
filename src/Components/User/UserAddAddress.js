import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AddAddressHook from '../../helperHook/User/add-address-hook';
import { ToastContainer } from 'react-toastify';

export default function UserAddAddress() {
  const {
    alias,
    detalis,
    phone,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  } = AddAddressHook();

  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            value={alias}
            onChange={onChangeAlias}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
            value={detalis}
            onChange={onChangeDetalis}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={onChangePhone}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={onSubmit}>
            اضافة عنوان
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </>
  );
}
