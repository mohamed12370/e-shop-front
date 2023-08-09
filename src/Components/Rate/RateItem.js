import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import rate from '../../Images/rate.png';
import deleteicon from '../../Images/delete.png';
import editicon from '../../Images/edit.png';
import Swal from 'sweetalert2';
import DeleteReviewHook from '../../helperHook/Review/delete-review-hook';
import EditRateHook from '../../helperHook/Review/edit-rate-hook';

export default function RateItem({ item, prodId }) {
  const { handleDelete } = DeleteReviewHook(item, prodId);
  const {
    showEdit,
    newRateText,
    newRateValue,
    handleEdit,
    handleCloseEdit,
    handleShowEdit,
    handleNewRateText,
    handleNewRateValue,
  } = EditRateHook(item, prodId);

  let user = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : '';

  const deleteCategory = () => {
    Swal.fire({
      title: ' هل أنت متأكد من حذف هذا التقيم ',
      showCancelButton: true,
      confirmButtonText: 'حذف',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDelete(item._id);
      } else {
        console.log('no delete');
      }
    });
  };

  const setting = {
    size: 20,
    count: 5,
    color: '#979797',
    activeColor: '#ffc107',
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      handleNewRateValue(newValue);
    },
  };

  return (
    <div>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            {' '}
            <div className="font">تعديل التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />
          <input
            type="text"
            className="font w-100"
            style={{ border: 'none' }}
            value={newRateText}
            onChange={handleNewRateText}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handleEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col>
          <div className="d-flex align-items-center">
            <div className="rate-name  d-inline ms-2"> {item.user.name} </div>
            <img className="" src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">{item.rating}</div>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex justify-content-between align-items-center me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{item.review}</div>
          {user && user._id === item?.user?._id ? (
            <div className="">
              <img
                src={editicon}
                alt="delete"
                width={'20px'}
                height={'20px'}
                style={{ cursor: 'pointer' }}
                onClick={handleShowEdit}
              />
              <img
                className="mx-2"
                src={deleteicon}
                alt="delete"
                width={'20px'}
                height={'20px'}
                style={{ cursor: 'pointer' }}
                onClick={deleteCategory}
              />
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  );
}
