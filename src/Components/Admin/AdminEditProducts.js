import React from 'react';
import add from '../../Images/add.png';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import MultiImageInput from 'react-multiple-image-input';
import { useParams } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { CompactPicker } from 'react-color';
import EditProductHook from '../../helperHook/Products/edit-product-hook';

export default function AdminEditProducts() {
  const { id } = useParams();
  const {
    prodName,
    prodDescription,
    priceAfter,
    priceBefore,
    images,
    setImages,
    colorArr,
    qty,
    catId,
    showColor,
    options,
    category,
    brand,
    brandId,
    crop,
    onSelect,
    onRemove,
    handleChangeName,
    handleChangeDescription,
    handlePriceBefore,
    handlePriceAfter,
    handleQty,
    onSelectCategory,
    onSelectBrand,
    handleShowColor,
    handleChangeColorComplete,
    habdleRemoveColor,
    handleSubmit,
  } = EditProductHook(id);
  return (
    <>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">تعديل المنتج - {prodName}</div>
        <Col sm="8">
          <div className="text-form pb-2"> صور للمنتج</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            theme={'light'}
            allowCrop={false}
            max={4}
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم المنتج"
            value={prodName}
            onChange={handleChangeName}
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
            value={prodDescription}
            onChange={handleChangeDescription}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            value={priceBefore}
            onChange={handlePriceBefore}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            value={priceAfter}
            onChange={handlePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            value={qty}
            onChange={handleQty}
          />
          <select
            name="cat"
            value={catId}
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectCategory}
          >
            <option value="0">التصنيف الرئيسي</option>
            {category?.data
              ? category?.data?.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: 'red' }}
          />
          <select
            name="brand"
            className="select input-form-area mt-3 px-2 "
            onChange={onSelectBrand}
            value={brandId}
          >
            <option value="0">اختر ماركة </option>
            {brand?.data?.length
              ? brand.data.map((item) => (
                  <option key={item.name} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
          <div className="mt-1 d-flex">
            {colorArr.length
              ? colorArr.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => habdleRemoveColor(item)}
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: item }}
                  ></div>
                ))
              : null}

            <img
              src={add}
              alt="+"
              width="30px"
              height="35px"
              style={{ cursor: 'pointer' }}
              onClick={handleShowColor}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {showColor ? (
            <CompactPicker
              className="CompactPicker"
              onChangeComplete={handleChangeColorComplete}
            />
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick={handleSubmit}>
            حفظ التعديلات
          </button>
        </Col>
        <ToastContainer />
      </Row>
    </>
  );
}
