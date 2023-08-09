import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  getAllProductInCart,
} from '../../Redux/actions/cartAction';
import { toast } from 'react-toastify';

export default function AddToCartHook(id, item) {
  const dispatch = useDispatch();
  const { cartReducer } = useSelector((state) => state);
  const { userAddToCart } = cartReducer;

  const [indexColor, setIndexColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleColorClick = (index, color) => {
    // console.log(color);
    setIndexColor(index);
    setTextColor(color);
  };

  //console.log(item.availableColors);
  const handleAddToCart = async () => {
    if (item?.availableColors?.length) {
      if (textColor === '') return toast.warn('plz chosie color');
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(
      addProductToCart({
        productId: id,
        color: textColor,
      })
    );
    setLoading(false);

    await dispatch(getAllProductInCart());
  };

  useEffect(() => {
    if (!loading && isPress) {
      // console.log(userAddToCart);
      if (userAddToCart?.status === 200) {
        toast.success('Success');
        setIsPress(false);
      } else if (userAddToCart?.response?.status === 401) {
        toast.error('login first');
        setIsPress(false);
      } else {
        toast.error('faild tray agin at later time');
        setIsPress(false);
      }
    }
  }, [isPress, loading, userAddToCart]);

  return { indexColor, textColor, handleColorClick, handleAddToCart };
}
