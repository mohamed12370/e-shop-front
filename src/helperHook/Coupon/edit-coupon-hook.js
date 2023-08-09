import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getOneCoupon,
  updateOneCoupon,
} from '../../Redux/actions/couponAction';
import { toast } from 'react-toastify';

export default function EditCouponHook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { couponReducer } = useSelector((state) => state);
  const { oneCoupon, editCoupon } = couponReducer;
  //   console.log(oneCoupon);

  const [couponName, setCouponName] = useState('');
  const [couponDate, setCouponDate] = useState('');
  const [couponValue, setCouponValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleChangeCouponName = (e) => {
    setCouponName(e.target.value);
  };
  const handleChangeCouponDate = (e) => {
    setCouponDate(e.target.value);
  };
  const handleChangeCouponValue = (e) => {
    setCouponValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!couponName || !couponDate || !couponValue || couponValue <= 0)
      return toast.warn('  من فضلك اكمل البيانات ');

    setLoading(true);
    setIsPress(true);
    await dispatch(
      updateOneCoupon(id, {
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const formatDate = (oneCoupon) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(oneCoupon).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    dispatch(getOneCoupon(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (oneCoupon && oneCoupon.data) {
      setCouponName(oneCoupon?.data?.name);
      setCouponDate(formatDate(oneCoupon?.data?.expire));
      setCouponValue(oneCoupon?.data?.discount);
    }
  }, [oneCoupon]);

  useEffect(() => {
    if (!loading && isPress) {
      console.log(editCoupon);
      if (editCoupon?.status === 200) {
        toast.success(' تم تعديل الكوبون بنجاح ');
        setIsPress(false);
        setTimeout(() => {
          navigate('/admin/addcoupon');
        }, 2000);
      }
      if (editCoupon?.status === 400) {
        toast.error(' هذا الكوبون موجود من قبل ');
        setIsPress(false);
      }
      if (editCoupon?.status === 403) {
        toast.error(' انت غير مسموح لك باجراء هذا الطلب ');
        setIsPress(false);
      }
    }
  }, [editCoupon, isPress, loading, navigate]);

  return {
    couponName,
    couponDate,
    couponValue,
    handleChangeCouponName,
    handleChangeCouponDate,
    handleChangeCouponValue,
    handleSubmit,
  };
}
