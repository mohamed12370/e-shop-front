import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../helperHook/Products/view-product-details-hook';
import AddToCartHook from '../../helperHook/Cart/add-to-cart-hook';
import { ToastContainer } from 'react-toastify';

export default function ProductText() {
  const { id } = useParams();
  const { item, cat, brand } = ViewProductDetailsHook(id);
  // console.log(item);
  const { indexColor, textColor, handleColorClick, handleAddToCart } =
    AddToCartHook(id, item);

  return (
    <div>
      <Row className="mt-2">
        <h2 className="cat-text">{cat.name} :</h2>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item?.title}
            <div className="cat-rate d-inline mx-3">{item?.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item?.availableColors?.length
            ? item?.availableColors?.map((item, index) => (
                <div
                  key={index}
                  className="color ms-2"
                  style={{
                    backgroundColor: item,
                    border:
                      indexColor === index
                        ? `3px solid ${
                            textColor === '#000000' ? 'yellow' : 'black'
                          }`
                        : null,
                  }}
                  onClick={() => handleColorClick(index, item)}
                ></div>
              ))
            : null}
        </Col>
        <Col sm="12" className="mt-4 fw-bold">
          <div>
            <div className="cat-text d-inline">
              {' '}
              الكمية المتاحة : {item.quantity}{' '}
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {item?.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {item.priceAfterDiscount >= 1 ? (
              <>
                {item?.priceAfterDiscount} <del>{item?.price}</del>
              </>
            ) : (
              item?.price
            )}{' '}
            جنية
          </div>
          <div
            className="product-cart-add px-3 py-3 d-inline mx-3"
            onClick={handleAddToCart}
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}
