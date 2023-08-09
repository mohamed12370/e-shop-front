import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import mobile from '../../Images/mobile.png';
import deleteicon from '../../Images/delete.png';
import DeleteCartItemHook from '../../helperHook/Cart/delete-cart-item-hook';

export default function CartItem({ item }) {
  const {
    show,
    itemCount,
    handleShow,
    handleClose,
    handleDeleteOneItemCart,
    hnadleChangeItemCount,
    handleUpdateCartItem,
  } = DeleteCartItemHook(item);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {' '}
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من حذف المنتج من العربة</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button
            className="font"
            variant="dark"
            onClick={handleDeleteOneItemCart}
          >
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <img
        width="160px"
        height="197px"
        src={item?.product?.imageCover || mobile}
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {item?.product?.category?.name}
            </div>
            <div
              className="d-flex pt-2 "
              style={{ cursor: 'pointer' }}
              onClick={handleShow}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">ازاله</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {item?.product?.title}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {item?.product?.ratingsAverage}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">
              {item?.product?.brand?.name}{' '}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color && (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: item?.color || '' }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex align-items-center">
              <div className="cat-text  d-inline">الكميه</div>
              <input
                className="mx-2 "
                type="number"
                style={{ width: '40px', height: '25px' }}
                value={itemCount}
                onChange={hnadleChangeItemCount}
              />
              <button
                className="btn btn-secondary"
                onClick={handleUpdateCartItem}
              >
                {' '}
                تطبيق{' '}
              </button>
            </div>
            <div className="d-inline pt-2 barnd-text">{item?.price} جنية</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
