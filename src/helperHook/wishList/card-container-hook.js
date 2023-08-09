import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishListProductsUser } from '../../Redux/actions/wishListAction';

export default function CardContainerHook() {
  const dispatch = useDispatch();
  const { wishListReducer } = useSelector((state) => state);
  const { allWishList } = wishListReducer;

  const [favProdUser, setFavProdUser] = useState([]);
  //console.log(favProdUser);

  useEffect(() => {
    if (allWishList?.status === 'success')
      setFavProdUser(allWishList?.data?.map((item) => item._id));
  }, [allWishList]);

  useEffect(() => {
    dispatch(getAllWishListProductsUser());
  }, [dispatch]);

  return { favProdUser };
}
