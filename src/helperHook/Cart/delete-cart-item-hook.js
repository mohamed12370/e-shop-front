import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAllCartItem,
  deleteOneCartItem,
  getAllProductInCart,
  updateOneCartItem,
} from '../../Redux/actions/cartAction';
import { toast } from 'react-toastify';

export default function DeleteCartItemHook(item) {
  const dispatch = useDispatch();
  const { cartReducer } = useSelector((state) => state);
  const { removeAllItemsCart, removeOneItemCart, editOneCartItem } =
    cartReducer;

  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [show, setShow] = useState(false);
  const [loadingOneItem, setLoadingOneItem] = useState(false);
  const [isPressOneItem, setIsPressOneItem] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [isPressEdit, setIsPressEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (item?.count) {
      setItemCount(item?.count);
    }
  }, [item]);

  const hnadleChangeItemCount = (e) => {
    if (e.target.value >= 1) setItemCount(e.target.value);
  };

  const handleDeleteAllCartItems = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(deleteAllCartItem());
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && isPress) {
      //console.log(removeAllItemsCart);
      if (removeAllItemsCart === '') {
        toast.success('Success');
        setIsPress(false);
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      } else {
        toast.error('faild tray agin another time');
        setIsPress(false);
      }
    }
  }, [isPress, loading, removeAllItemsCart]);

  const handleDeleteOneItemCart = async () => {
    setLoadingOneItem(true);
    setIsPressOneItem(true);
    await dispatch(deleteOneCartItem(item._id));
    setLoadingOneItem(false);
  };

  useEffect(() => {
    if (!loadingOneItem && isPressOneItem) {
      // console.log(removeOneItemCart);
      if (removeOneItemCart.status === 'success') {
        toast.success('Success');
        handleClose();
        setIsPressOneItem(false);
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
    }
  }, [isPressOneItem, loadingOneItem, removeOneItemCart]);

  const handleUpdateCartItem = async () => {
    setLoadingEdit(true);
    setIsPressEdit(true);
    await dispatch(
      updateOneCartItem(item._id, {
        count: itemCount,
      })
    );
    setLoadingEdit(false);
  };

  useEffect(() => {
    if (!loadingEdit && isPressEdit) {
      //console.log(editOneCartItem);
      if (editOneCartItem.status === 200) {
        setIsPressEdit(false);
        dispatch(getAllProductInCart());
      }
    }
  }, [dispatch, editOneCartItem, isPressEdit, loadingEdit]);

  return {
    handleDeleteAllCartItems,
    show,
    itemCount,
    handleShow,
    handleClose,
    handleDeleteOneItemCart,
    hnadleChangeItemCount,
    handleUpdateCartItem,
  };
}
