import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import rate from '../../Images/rate.png';
import { Link } from 'react-router-dom';
import ProductCardWishListHook from '../../helperHook/wishList/product-card-wishList-hook';

export default function ProductCard({ item, favProdUser }) {
  const { handleFav, favImg } = ProductCardWishListHook(item, favProdUser);
  // console.log(item);

  return (
    <Col sm="6" md="6" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: '100%',
          // height: '345px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 2px 0 rgba(151,151,151,0.5)',
        }}
      >
        <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
          <Card.Img
            style={{ height: '228px', width: '100%' }}
            src={item?.imageCover}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favImg}
            alt=""
            className="text-center "
            style={{
              height: '24px',
              width: '26px',
              cursor: 'pointer',
            }}
            onClick={handleFav}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <p className="card-title">{item?.title}</p>
          </Card.Title>
          <Card.Title>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img src={rate} alt="" height="16px" width="16px" />
                <div className="card-rate mx-2">{item.ratingsAverage || 0}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {item.priceAfterDiscount >= 1 ? (
                    <>
                      {item.priceAfterDiscount} <del>{item.price}</del>
                    </>
                  ) : (
                    item.price
                  )}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
}

// `${item.price - item.priceAfterDiscount} السعر بعد الخصم `
