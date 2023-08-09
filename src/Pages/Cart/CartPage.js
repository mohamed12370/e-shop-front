import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../../Components/Cart/CartItem';
import CartCheckout from '../../Components/Cart/CartCheckout';
import AllInCartHook from '../../helperHook/Cart/all-in-cart-hook';
import DeleteCartItemHook from '../../helperHook/Cart/delete-cart-item-hook';
import { ToastContainer } from 'react-toastify';

export default function CartPage() {
  const { cartItems, totalPrice, totalPriceAfterDiscount, couponNameDiscount } =
    AllInCartHook();

  const { handleDeleteAllCartItems, show, handleShow, handleClose } =
    DeleteCartItemHook();

  return (
    <div className="font" style={{ minHeight: '670px' }}>
      <Container>
        <Row>
          <div className="cart-title mt-4">عربة التسوق</div>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="12" md="9">
            {cartItems.length ? (
              cartItems.map((item) => <CartItem key={item._id} item={item} />)
            ) : (
              <h6 className="text-center py-2"> لا توجد منتجات فى العربة </h6>
            )}
          </Col>

          <Col xs="12" md="3">
            <CartCheckout
              totalPrice={totalPrice}
              handleDeleteAllCartItems={handleDeleteAllCartItems}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
              totalPriceAfterDiscount={totalPriceAfterDiscount}
              couponNameDiscount={couponNameDiscount}
              cartItems={cartItems}
            />
          </Col>
        </Row>
      </Container>

      <ToastContainer />
    </div>
  );
}
