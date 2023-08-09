import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  allReviewProduct,
  createNewReview,
} from '../../Redux/actions/reviewAction';

export default function AddRateHook(prodId) {
  const dispatch = useDispatch();
  const { reviewReducer } = useSelector((state) => state);
  const { createReview } = reviewReducer;

  const [rateText, setRateText] = useState('');
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isPrisee, setIsPrisee] = useState(false);

  let userData = '';
  if (localStorage.getItem('userData'))
    userData = JSON.parse(localStorage.getItem('userData'));

  const handleChangeRateText = (e) => {
    setRateText(e.target.value);
  };

  const handleChangeRateValue = (value) => {
    setRateValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rateText === '') return toast.warn(' من فضلك اكتب تعليق ');
    if (rateValue === 0) return toast.warn(' من فضلك اختار قيمة التقيم ');

    setIsPrisee(true);
    setLoading(true);
    await dispatch(
      createNewReview(prodId, {
        review: rateText,
        rating: rateValue,
      })
    );
    await dispatch(allReviewProduct(prodId, 1, 5));
    setLoading(false);
  };

  useEffect(() => {
    if (isPrisee && !loading) {
      // console.log(createReview);
      if (createReview.status && createReview.status === 201) {
        toast.success(' تم اضافة التقيم بنجاح ');
        setRateText('');
      }
      if (createReview.status && createReview.status === 403) {
        toast.error(' غير مسموح للادمن بالتقيم ');
      }
      if (
        createReview.data.errors &&
        createReview.data.errors[0].msg ===
          'You already added review on this product'
      ) {
        toast.error(' لقد قمت باضافة تقيم لهذا المنتج من قبل ');
      }
      if (
        createReview.data.message &&
        createReview.data.message === 'Invalid Token. please login again'
      ) {
        toast.error(' لكى تتمكن من اضافة تعليق يجب تسجيل دخول اولا ');
      }
    }
  }, [isPrisee, loading, createReview]);

  return {
    rateText,
    handleSubmit,
    handleChangeRateText,
    handleChangeRateValue,
    userData,
    loading,
  };
}
