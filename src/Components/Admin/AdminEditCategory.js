import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import EditCategoryHook from '../../helperHook/Category/edit-category-hook';

export default function AdminEditCategory() {
  const { id } = useParams();
  const {
    catName,
    catImg,
    handleChangeName,
    handleCgangeImg,
    handleSubmit,
    loading,
    isPress,
  } = EditCategoryHook(id);

  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> تعديل تصنيف </div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={catImg}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: 'pointer' }}
                onChange={handleCgangeImg}
              />
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              className="w-25"
              onChange={handleCgangeImg}
            />
          </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            value={catName}
            onChange={handleChangeName}
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
    </>
  );
}
