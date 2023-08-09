import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  applyCouponCart,
  getAllProductInCart,
} from '../../Redux/actions/cartAction';
import { useNavigate } from 'react-router-dom';

export default function ApplyCouponCartHook(cartItems) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartReducer } = useSelector((state) => state);
  const { couponCart } = cartReducer;

  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [couponName, setCouponName] = useState('');

  const handleChangeCouponName = (e) => {
    setCouponName(e);
  };

  const handleCheckOut = () => {
    if (cartItems?.length) navigate(`/order/paymethoud`);
    else
      toast.warn(' يجب ان يكون منتج واحد على الاقل داخل العربة لاتمام الشراء ');
  };

  const handleSubmitCoupon = async () => {
    if (couponName === '') return toast.warn(' من فضلك ادخل اسم الكوبون ');

    setLoading(true);
    setIsPress(true);
    await dispatch(
      applyCouponCart({
        couponName,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading && isPress) {
      // console.log(couponCart);
      if (couponCart.status === 200) {
        toast.success(' تم اضافة الخصم بنجاح ');
        setIsPress(false);
        dispatch(getAllProductInCart());
      }
      if (couponCart?.response?.data?.status === 'fail') {
        toast.error(couponCart?.response?.data?.message);
        setIsPress(false);
        dispatch(getAllProductInCart());
      }
    }
  }, [couponCart, dispatch, isPress, loading]);

  return {
    couponName,
    handleChangeCouponName,
    handleSubmitCoupon,
    handleCheckOut,
  };
}
