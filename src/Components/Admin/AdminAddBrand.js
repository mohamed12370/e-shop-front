import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddBrandHook from '../../helperHook/Brand/add-brand-hook';
// import avatar from '../../Images/avatar.png';

export default function AdminAddBrand() {
  const [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ] = AddBrandHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره الماركه</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: 'pointer' }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
              className="w-25"
            />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الماركه"
            onChange={onChangeName}
            value={name}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
        <Col sm="4" className="text-center">
          {isPress ? (
            loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              ''
            )
          ) : null}
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
}
