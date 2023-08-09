import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddCouponHook from '../../helperHook/Coupon/add-coupon-hook';
import AdminCouponCard from './AdminCouponCard';

export default function AdminAddCoupon() {
  const {
    couponName,
    couponDate,
    couponValue,
    dateRef,
    allCoupon,
    handleChangeCouponName,
    handleChangeCouponDate,
    handleChangeCouponValue,
    handleOnFocus,
    handleOnBlur,
    handleSubmit,
  } = AddCouponHook();
  //console.log(allCoupon);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف كوبون جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
            value={couponName}
            onChange={handleChangeCouponName}
          />
          <input
            ref={dateRef}
            value={couponDate}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
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
            حفظ الكوبون
          </button>
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="my-2">
          {allCoupon && allCoupon?.data?.length ? (
            allCoupon.data.map((item, index) => {
              return <AdminCouponCard key={index} coupon={item} />;
            })
          ) : (
            <h6 className="text-center py-2">لا يوجد كوبونات حتى الان</h6>
          )}
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
}
