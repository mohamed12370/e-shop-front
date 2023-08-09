import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import mobile from '../../Images/mobile.png';

export default function AdminAllOrdersItem({ orderItems }) {
  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${orderItems._id}`}
        className="cart-item-body my-2 p-3 d-flex flex-column-reverse flex-md-row"
        style={{ textDecoration: 'none' }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                طلب رقم #{orderItems?.id}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                طلب من: {orderItems?.user?.name || ''}
              </div>
              <div className="d-inline pt-2 cat-rate me-2">
                {orderItems?.user?.email || ''}
              </div>
            </Col>
          </Row>

          <Row className="justify-content-between text-black">
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
            <Col sm="5" className="d-flex justify-content-end">
              <div className="d-inline pt-2 barnd-text">
                {orderItems?.totalOrderPrice || 0} جنية
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
}
