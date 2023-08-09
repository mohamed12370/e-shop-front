import React from 'react';
import { Row } from 'react-bootstrap';
import SidebarSearchHook from '../../helperHook/Search/sidebar-search-hook';

export default function SideFilter() {
  const {
    allCat,
    allBrands,
    clickCategory,
    clickBrand,
    handlePriceFrom,
    handlePriceTo,
  } = SidebarSearchHook();

  const localFrom = localStorage.getItem('priceFrom') || 0;
  const localTo = localStorage.getItem('priceTo') || 0;

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={clickCategory} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {allCat.length ? (
            allCat.map((item) => (
              <div className="d-flex mt-2" key={item._id}>
                <input
                  type="checkbox"
                  value={item._id}
                  onChange={clickCategory}
                />
                <div className="filter-sub me-2 "> {item.name} </div>
              </div>
            ))
          ) : (
            <p> لا يوجد تصنيفات حتى الان </p>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" onChange={clickBrand} />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {allBrands.length ? (
            allBrands.map((item) => (
              <div className="d-flex mt-2" key={item._id}>
                <input type="checkbox" value={item._id} onChange={clickBrand} />
                <div className="filter-sub me-2 ">{item.name}</div>
              </div>
            ))
          ) : (
            <p> لا يوجد مركات حتى الان </p>
          )}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: '75px', height: '25px' }}
            value={localFrom}
            onChange={handlePriceFrom}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: '75px', height: '25px' }}
            value={localTo}
            onChange={handlePriceTo}
          />
        </div>
      </Row>
    </div>
  );
}
