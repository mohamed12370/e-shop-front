import React, { useEffect } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import ApplyCouponCartHook from '../../helperHook/Cart/apply-coupon-cart-hook';

export default function CartCheckout({
  totalPrice,
  handleDeleteAllCartItems,
  show,
  handleShow,
  handleClose,
  couponNameDiscount,
  totalPriceAfterDiscount,
  cartItems,
}) {
  const {
    couponName,
    handleChangeCouponName,
    handleSubmitCoupon,
    handleCheckOut,
  } = ApplyCouponCartHook(cartItems);

  useEffect(() => {
    if (couponNameDiscount) handleChangeCouponName(couponNameDiscount);
  }, [couponNameDiscount]);

  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {' '}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font"> هل انت متاكد من حذف جميع المنتاجات </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button
            className="font"
            variant="dark"
            onClick={handleDeleteAllCartItems}
          >
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
            value={couponName}
            onChange={(e) => handleChangeCouponName(e.target.value)}
          />
          <button className="copon-btn d-inline" onClick={handleSubmitCoupon}>
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalPriceAfterDiscount
            ? ` بعد الخصم  ${totalPriceAfterDiscount}  `
            : totalPrice || 0}
          جنية
        </div>
        <button
          onClick={handleCheckOut}
          className="product-cart-add w-100 px-2"
        >
          اتمام الشراء
        </button>
        <button
          className="product-cart-add w-100 px-2 mt-3"
          onClick={handleShow}
        >
          مسح العربة
        </button>
      </Col>
    </Row>
  );
}
