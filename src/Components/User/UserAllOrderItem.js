import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserAllOrderCard from './UserAllOrderCard';

export default function UserAllOrderItem({ orderItems }) {
  const formatDate = (userOrderDetails) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(userOrderDetails?.createdAt).toLocaleDateString(
      undefined,
      options
    );
  };

  return (
    <div className="user-order mt-2 h-auto">
      <div className="py-2 order-title">
        طلب رقم #{orderItems?.id || 0} -:- تم بتاريخ : #{' '}
        {formatDate(orderItems)}
      </div>
      {orderItems?.cartItems
        ? orderItems?.cartItems?.map((item) => (
            <UserAllOrderCard key={item._id} item={item} />
          ))
        : null}

      <Row className="d-flex justify-content-between">
        <Col xs="7" className="">
          <Row>
            <Col sm="4">
              <div>
                <div className="d-inline"> التوصيل </div>
                <div className="d-inline mx-2 stat">
                  {orderItems?.isDelivered ? 'تم ' : 'لم يتم '}
                </div>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <div className="d-inline"> الدفع </div>
                <div className="d-inline mx-2 stat">
                  {orderItems?.isPaid ? 'تم ' : 'لم يتم '}
                </div>
              </div>
            </Col>
            <Col sm="4">
              <div>
                <div className="d-inline"> طريقة الدفع </div>
                <div className="d-inline mx-2 stat">
                  {orderItems?.paymentMethodType === 'cash'
                    ? 'كاش '
                    : ' بطاقة ائتمناية '}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs="5" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">
              {orderItems?.totalOrderPrice || 0} جنيه
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
