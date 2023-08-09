import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import EditSubCategoryHook from '../../helperHook/Subcategory/edit-subcategory-hook';
import { useParams } from 'react-router-dom';

export default function AdminEditSubCategory() {
  const { id } = useParams();
  const {
    subcatName,
    handleChangeName,
    handleChangeId,
    catArr,
    catId,
    handleSubmit,
  } = EditSubCategoryHook(id);
  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">تعديل التصنيف الفرعي </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            onChange={handleChangeName}
            value={subcatName}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChangeId}
            value={catId}
          >
            <option value="0"> اختر تصنيف رئيسى </option>
            {catArr?.length
              ? catArr.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2" onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
        <ToastContainer />
      </Row>
    </>
  );
}
