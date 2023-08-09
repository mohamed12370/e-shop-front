import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import favoff from '../../Images/fav-off.png';
import favon from '../../Images/fav-on.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToWishList,
  removeProductFromWishList,
} from '../../Redux/actions/wishListAction';

export default function ProductCardWishListHook(item, favProdUser) {
  const dispatch = useDispatch();
  const { wishListReducer } = useSelector((state) => state);
  const { addWishList, removeWishList } = wishListReducer;

  const [favImg, setFavImg] = useState(favoff);
  const [isFav, setIsFav] = useState(
    favProdUser.some((favItem) => favItem === item._id)
  );
  const [loading, setLoading] = useState(false);
  const [isPressAdd, setIsPressAdd] = useState(false);
  const [isPressRem, setIsPressRem] = useState(false);

  const addToWishListData = async () => {
    // setIsFav(true);
    // setFavImg(favon);

    setLoading(true);
    setIsPressAdd(true);
    await dispatch(
      addProductToWishList({
        productId: item._id,
      })
    );
    setLoading(false);
  };

  const removeToWishListData = async () => {
    // setIsFav(false);
    // setFavImg(favoff);

    setLoading(true);
    setIsPressRem(true);
    await dispatch(removeProductFromWishList(item._id));
    setLoading(false);
  };

  const handleFav = () => {
    //console.log(isFav);
    if (isFav) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  };

  // console.log(favProdUser.some((favItem) => favItem === item._id));
  // console.log(favProdUser);
  useEffect(() => {
    if (isFav) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav, favProdUser]);

  useEffect(() => {
    setIsFav(favProdUser.some((favItem) => favItem === item._id));
  }, [favProdUser, item]);

  useEffect(() => {
    if (isPressAdd && !loading) {
      //console.log(addWishList);
      if (addWishList?.status && addWishList?.status === 200) {
        toast.success(' تم اضافة المنتج الى قائمة المفضلة بنجاح ');
        setFavImg(favon);
        setIsPressAdd(false);
        setIsFav(true);
      }
      if (addWishList?.status && addWishList?.status === 401) {
        toast.warn(' يجب تسجيل دخول لاجراء هذا الطلب ');
        setIsPressAdd(false);
      }
    }
  }, [addWishList, isPressAdd, loading]);

  useEffect(() => {
    if (isPressRem && !loading) {
      //console.log(removeWishList);
      if (removeWishList?.status && removeWishList?.status === 'success') {
        toast.success(' تم حذف المنتج من قائمة المفضلة بنجاح ');
        setFavImg(favoff);
        setIsPressRem(false);
        setIsFav(false);
      }
    }
  }, [isPressRem, loading, removeWishList]);

  return { handleFav, favImg };
}
