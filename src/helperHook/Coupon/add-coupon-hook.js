import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCoupon, getAllCoupon } from '../../Redux/actions/couponAction';
import { toast } from 'react-toastify';

export default function AddCouponHook() {
  const [couponName, setCouponName] = useState('');
  const [couponDate, setCouponDate] = useState('');
  const [couponValue, setCouponValue] = useState('');
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();

  const dispatch = useDispatch();
  const { couponReducer } = useSelector((state) => state);
  const { addCoupon, allCoupon } = couponReducer;
  //console.log(allCoupon);

  const handleChangeCouponName = (e) => {
    setCouponName(e.target.value);
  };
  const handleChangeCouponDate = (e) => {
    setCouponDate(e.target.value);
  };
  const handleChangeCouponValue = (e) => {
    setCouponValue(e.target.value);
  };

  const handleOnFocus = () => {
    dateRef.current.type = 'date';
  };

  const handleOnBlur = () => {
    dateRef.current.type = 'text';
  };

  const handleSubmit = async () => {
    if (!couponName || !couponDate || !couponValue || couponValue <= 0)
      return toast.warn('  من فضلك اكمل البيانات ');

    setLoading(true);
    await dispatch(
      addNewCoupon({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
    await dispatch(getAllCoupon());
  };

  useEffect(() => {
    if (!loading && addCoupon?.data) {
      //console.log(addCoupon);
      if (addCoupon.status === 201) {
        toast.success(' تم اظافة الكوبون بنجاح ');
        setCouponName('');
        setCouponDate('');
        setCouponValue('');
      }
      if (addCoupon.status === 400) {
        toast.error(' هذا الكوبون موجود من قبل ');
      }
      if (addCoupon.status === 403) {
        toast.error(' انت غير مسموح لك باجراء هذا الطلب ');
      }
    }
  }, [addCoupon, loading]);

  useEffect(() => {
    dispatch(getAllCoupon());
  }, [dispatch]);

  return {
    couponName,
    couponDate,
    couponValue,
    dateRef,
    allCoupon,
    handleChangeCouponName,
    handleChangeCouponDate,
    handleChangeCouponValue,
    handleOnFocus,
    handleOnBlur,
    handleSubmit,
  };
}
