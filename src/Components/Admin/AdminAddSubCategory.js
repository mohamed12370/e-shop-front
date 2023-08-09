import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddSubcategoryHook from '../../helperHook/Subcategory/add-subcategory-hook';

export default function AdminAddSubCategory() {
  const [handleChangeName, name, handleChangeId, category, handleSubmit] =
    AddSubcategoryHook();

  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            onChange={handleChangeName}
            value={name}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handleChangeId}
          >
            <option value="0"> اختر تصنيف رئيسى </option>
            {category.data?.length
              ? category.data.map((item) => (
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
