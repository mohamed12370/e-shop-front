import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserAllOrderItem from '../User/UserAllOrderItem';
import { useParams } from 'react-router-dom';
import GetOrderDetailsHook from '../../helperHook/Admin/get-order-details-hook';
import ChangeOrderStatusHook from '../../helperHook/Admin/change-order-status-hook';
import { ToastContainer } from 'react-toastify';

export default function AdminOrderDetalis() {
  const { id } = useParams();
  const { userOrderDetails } = GetOrderDetailsHook(id);
  // console.log(userOrderDetails);
  const {
    pay,
    deliver,
    hnadleChangePay,
    onClickToChangePay,
    hnadleChangedeliver,
    onClickToChangedeliver,
  } = ChangeOrderStatusHook(id);

  return (
    <>
      <UserAllOrderItem orderItems={userOrderDetails} />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            {userOrderDetails?.user?.name || ''}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            {userOrderDetails?.user?.phone || ''}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            الايميل:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            {userOrderDetails?.user?.email || ''}
          </div>
        </Col>
        <div className="d-flex mt-2 justify-content-evenly flex-wrap">
          <div className="d-flex mb-3 mb-md-0">
            <select
              name="pay"
              id="paid"
              className="select input-form-area mt-1  text-center px-2 w-100"
              value={pay}
              onChange={hnadleChangePay}
            >
              <option value="0"> حالة الدفع </option>
              <option value="true"> تم الدفع </option>
              <option value="false"> لم يتم الدفع </option>
            </select>
            <button
              className="btn-a px-3 d-inline mx-2"
              onClick={onClickToChangePay}
            >
              حفظ{' '}
            </button>
          </div>
          <div className="d-flex">
            <select
              name="deliver"
              id="deliver"
              className="select input-form-area mt-1  text-center px-2 w-100"
              value={deliver}
              onChange={hnadleChangedeliver}
            >
              <option value="0"> حالة التوصيل </option>
              <option value="true"> تم التوصيل </option>
              <option value="false"> لم يتم التوصيل </option>
            </select>
            <button
              className="btn-a px-3 d-inline mx-2"
              onClick={onClickToChangedeliver}
            >
              حفظ{' '}
            </button>
          </div>
        </div>
      </Row>

      <ToastContainer />
    </>
  );
}
