import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import AllAddressHook from '../../helperHook/User/all-Address-hook';
import OrderPaymentCashHook from '../../helperHook/CheckOut/order-pay-cash-hook';
import { ToastContainer, toast } from 'react-toastify';
import OrderPayCardHook from '../../helperHook/CheckOut/order-pay-card-hook';
import AllInCartHook from '../../helperHook/Cart/all-in-cart-hook';

export default function ChoosePayMethoud() {
  const { userAllAddress } = AllAddressHook();
  const { handleChangeAddress, userAddress, handleOrderCash } =
    OrderPaymentCashHook();
  const { handleOrderCard } = OrderPayCardHook(userAddress);
  const { totalPrice, totalPriceAfterDiscount } = AllInCartHook();

  const [typeMethod, setTypeMethod] = useState();
  const changeMethod = (e) => {
    setTypeMethod(e.target.value);
  };
  const handlePayMethod = () => {
    if (typeMethod === 'CARD') {
      handleOrderCard();
    } else if (typeMethod === 'CASH') {
      handleOrderCash();
    } else {
      toast.warn('please choise paymentMethod ');
    }
  };

  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-2 px-3 h-auto pb-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              name="group"
              id="group1"
              type="radio"
              className="mt-2"
              style={{ cursor: 'pointer' }}
              value="CARD"
              onChange={changeMethod}
            />
            <label
              className="mx-2"
              htmlFor="group1"
              style={{ cursor: 'pointer' }}
            >
              الدفع عن طريق البطاقه الائتمانية
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" className="d-flex">
            <input
              name="group"
              id="group2"
              type="radio"
              className="mt-2"
              style={{ cursor: 'pointer' }}
              value="CASH"
              onChange={changeMethod}
            />
            <label
              className="mx-2"
              htmlFor="group2"
              style={{ cursor: 'pointer' }}
            >
              الدفع عند الاستلام
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" md="6" lg="4" className="d-flex mt-2">
            <select
              name="address"
              id="address"
              className="select mt-1 px-2"
              onChange={handleChangeAddress}
            >
              <option value="0">اختر عنوان للشحن</option>
              {userAllAddress?.length ? (
                userAllAddress?.map((el) => (
                  <option
                    key={el._id}
                    value={el._id}
                    data-addressdetails={JSON.stringify(el)}
                  >
                    {el.alias}
                  </option>
                ))
              ) : (
                <option key={0} value={0}>
                  لا يوجد عنوانين مسجلة
                </option>
              )}
            </select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border">
            {' '}
            {totalPriceAfterDiscount
              ? ` بعد الخصم  ${totalPriceAfterDiscount}  `
              : totalPrice || 0}
            جنية{' '}
          </div>
          <div
            className="product-cart-add px-3 pt-2 d-inline me-2"
            onClick={handlePayMethod}
          >
            اتمام الشراء
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
