import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteOneCoupon,
  getAllCoupon,
} from '../../Redux/actions/couponAction';

export default function CouponCardHook(coupon) {
  const formatDate = () => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(coupon.expire).toLocaleDateString(undefined, options);
  };

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteOneCoupon(coupon._id));
    setShow(false);
    await dispatch(getAllCoupon());
  };

  return { show, handleClose, handleShow, handleDelete, formatDate };
}
