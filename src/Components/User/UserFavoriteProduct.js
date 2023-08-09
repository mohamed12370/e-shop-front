import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardProductsContainer from '../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishListProductsUser } from '../../Redux/actions/wishListAction';

export default function UserFavoriteProduct() {
  const dispatch = useDispatch();
  const { wishListReducer } = useSelector((state) => state);
  const { allWishList } = wishListReducer;
  //console.log(allWishList);

  const [prodFav, setProdFav] = useState([]);

  useEffect(() => {
    dispatch(getAllWishListProductsUser());
  }, [dispatch]);

  useEffect(() => {
    if (allWishList?.status === 'success') {
      setProdFav(allWishList.data);
    }
  }, [allWishList]);

  return (
    <>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
      <Row className="justify-content-start">
        {prodFav.length ? (
          <CardProductsContainer products={prodFav} />
        ) : (
          <h5 className="text-center py-3"> لا يوجد منتجات مفضلة </h5>
        )}
      </Row>
    </>
  );
}
