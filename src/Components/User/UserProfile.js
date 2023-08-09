import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import deleteicon from '../../Images/delete.png';
import UserProfileHook from '../../helperHook/User/user-profile-hook';
import { ToastContainer } from 'react-toastify';

export default function UserProfile() {
  const {
    show,
    name,
    phone,
    email,
    oldPass,
    newPass,
    confNewPass,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    handleClose,
    handleShow,
    handelSubmit,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfNewPass,
    handleSubmitPass,
  } = UserProfileHook();

  return (
    <>
      <div className="admin-content-text">الصفحه الشخصية</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {' '}
            <div className="font">تعديل البيانات الشخصية</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="اسم المستخدم"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            className="input-form font d-block mt-3 px-3"
            placeholder="الايميل"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="phone"
            className="input-form font d-block mt-3 px-3"
            placeholder="الهاتف"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelSubmit}>
            حفظ التعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="8" className="d-md-flex mb-2 mb-md-0">
            <div className="p-md-2">الاسم:</div>
            <div className="p-md-1 item-delete-edit"> {name} </div>
          </Col>
          <Col xs="4" className="d-flex justify-content-end">
            <div className="d-flex mx-2" onClick={handleShow}>
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف:</div>
            <div className="p-1 item-delete-edit">{phone}</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className="p-1 item-delete-edit">{email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغير كملة المرور</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
              value={oldPass}
              onChange={onChangeOldPass}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديده"
              value={newPass}
              onChange={onChangeNewPass}
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder=" تاكيد كلمة المرور الجديدة "
              value={confNewPass}
              onChange={onChangeConfNewPass}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              className="btn-save d-inline mt-2 "
              onClick={handleSubmitPass}
            >
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </>
  );
}
