import React from 'react';
import { Col, Row } from 'react-bootstrap';
import EditCouponHook from '../../helperHook/Coupon/edit-coupon-hook';
import { ToastContainer } from 'react-toastify';

export default function AdminEditCoupon() {
  const {
    couponName,
    couponDate,
    couponValue,
    handleChangeCouponName,
    handleChangeCouponDate,
    handleChangeCouponValue,
    handleSubmit,
  } = EditCouponHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل بيانات الكوبون </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
            value={couponName}
            onChange={handleChangeCouponName}
          />
          <input
            value={couponDate}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
            onChange={handleChangeCouponDate}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة خصم الكوبون"
            value={couponValue}
            onChange={handleChangeCouponValue}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديل
          </button>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
}
