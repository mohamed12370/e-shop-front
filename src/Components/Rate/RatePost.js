import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import AddRateHook from '../../helperHook/Review/add-rate-hook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function RatePost() {
  const { id } = useParams();
  const {
    rateText,
    handleSubmit,
    handleChangeRateText,
    handleChangeRateValue,
    userData,
  } = AddRateHook(id);
  const setting = {
    size: 20,
    count: 5,
    color: '#979797',
    activeColor: '#ffc107',
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      handleChangeRateValue(newValue);
    },
  };

  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-0 me-md-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">{userData?.name}</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col xs="12" className="d-md-flex justify-content-center  me-4 pb-2 ">
          <textarea
            className="input-form-area p-2 mt-3 "
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
            value={rateText}
            onChange={handleChangeRateText}
          />
          <div className=" d-flex justify-content-end align-items-center al">
            <div
              className="product-cart-add px-3 text-center d-flex align-items-center"
              onClick={handleSubmit}
            >
              اضف تعليق
            </div>
          </div>
        </Col>

        <ToastContainer />
      </Row>
    </div>
  );
}
